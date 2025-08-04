var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  contactSubmissions: () => contactSubmissions,
  insertContactSchema: () => insertContactSchema,
  insertUserSchema: () => insertUserSchema,
  users: () => users
});
import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow().notNull()
});
var insertContactSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  subject: true,
  message: true
});
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});

// server/db.ts
import { Pool, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import ws from "ws";
neonConfig.webSocketConstructor = ws;
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?"
  );
}
var pool = new Pool({ connectionString: process.env.DATABASE_URL });
var db = drizzle({ client: pool, schema: schema_exports });

// server/storage.ts
import { eq } from "drizzle-orm";
var DatabaseStorage = class {
  async getUser(id) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || void 0;
  }
  async getUserByUsername(username) {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || void 0;
  }
  async createUser(insertUser) {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  async createContactSubmission(data) {
    const [submission] = await db.insert(contactSubmissions).values(data).returning();
    return submission;
  }
  async getContactSubmissions() {
    return await db.select().from(contactSubmissions);
  }
};
var storage = new DatabaseStorage();

// server/routes.ts
import path from "path";
import fs from "fs";
import { z } from "zod";

// server/telegram.ts
import TelegramBot from "node-telegram-bot-api";
var TOKEN = process.env.TELEGRAM_BOT_TOKEN;
var CHAT_ID = process.env.TELEGRAM_CHAT_ID;
var bot = null;
if (TOKEN && CHAT_ID) {
  try {
    bot = new TelegramBot(TOKEN, { polling: false });
    console.log("Telegram bot initialized successfully");
  } catch (error) {
    console.error("Error initializing Telegram bot:", error);
  }
} else {
  console.warn("Telegram bot not initialized: missing environment variables");
}
async function sendTelegramMessage(message) {
  if (!bot || !CHAT_ID) {
    console.warn("Cannot send Telegram message: bot or chat ID not configured");
    return false;
  }
  try {
    await bot.sendMessage(CHAT_ID, message, { parse_mode: "HTML" });
    return true;
  } catch (error) {
    console.error("Error sending Telegram message:", error);
    return false;
  }
}
function formatContactMessage(contactData) {
  const { name, email, subject, message } = contactData;
  return `
<b>\u{1F514} Nouveau message de contact</b>

<b>Nom:</b> ${name}
<b>Email:</b> ${email}
${subject ? `<b>Sujet:</b> ${subject}
` : ""}
<b>Message:</b>
${message}

<i>Envoy\xE9 depuis votre portfolio</i>
`;
}

// server/routes.ts
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(contactData);
      const telegramMessage = formatContactMessage({
        name: contactData.name,
        email: contactData.email,
        subject: contactData.subject,
        message: contactData.message
      });
      const telegramSent = await sendTelegramMessage(telegramMessage);
      if (telegramSent) {
        console.log("Message sent to Telegram successfully");
      } else {
        console.warn("Failed to send message to Telegram");
      }
      res.status(201).json({
        success: true,
        message: "Contact form submitted successfully"
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors
        });
      } else {
        console.error("Error handling contact form submission:", error);
        res.status(500).json({
          success: false,
          message: "Failed to submit contact form. Please try again later."
        });
      }
    }
  });
  app2.get("/api/resume/download", (req, res) => {
    try {
      const lang = req.query.lang || "en";
      const fileName = lang === "fr" ? "Jennifer_Lawrynn_Aka_a_CV_INGENIEURE_LOGICIELLE_2025_MAI (2).pdf" : "Jennifer_Lawrynn_Aka_a_CV_SOFTWARE_ENGINEER_2025_ENG_MAY.pdf";
      const filePath = path.join(process.cwd(), "attached_assets", fileName);
      console.log("Attempting to send file:", filePath);
      console.log("Language:", lang);
      console.log("File exists:", fs.existsSync(filePath));
      if (fs.existsSync(filePath)) {
        res.setHeader("Content-Type", "application/pdf");
        const downloadName = lang === "fr" ? "Jennifer_Lawrynn_Aka_a_CV_FR.pdf" : "Jennifer_Lawrynn_Aka_a_CV_EN.pdf";
        res.setHeader("Content-Disposition", `attachment; filename=${downloadName}`);
        const fileStream = fs.createReadStream(filePath);
        fileStream.on("error", (error) => {
          console.error("Stream error:", error);
          res.status(500).json({
            success: false,
            message: "Error streaming CV file"
          });
        });
        fileStream.pipe(res);
      } else {
        console.error("File not found at path:", filePath);
        res.status(404).json({
          success: false,
          message: "Resume file not found"
        });
      }
    } catch (error) {
      console.error("Error in resume download:", error);
      res.status(500).json({
        success: false,
        message: "Server error while processing download request"
      });
    }
  });
  app2.get("/api/certificates/download/:filename", (req, res) => {
    try {
      const filename = req.params.filename;
      const allowedFiles = [
        "aws-solutions-architect.pdf",
        "google-cybersecurity.pdf",
        "soc-operations.pdf",
        "kaggle-python.png",
        "kaggle-dataviz.png",
        "energy-transition.png"
      ];
      if (!allowedFiles.includes(filename)) {
        return res.status(404).json({ error: "Certificate not found" });
      }
      const filePath = path.join(process.cwd(), "public", "certificates", filename);
      console.log("Attempting to send certificate:", filePath);
      console.log("File exists:", fs.existsSync(filePath));
      if (fs.existsSync(filePath)) {
        const downloadName = `Jennifer_Lawrynn_${filename}`;
        const mimeType = filename.endsWith(".pdf") ? "application/pdf" : "image/png";
        res.setHeader("Content-Type", mimeType);
        res.setHeader("Content-Disposition", `attachment; filename=${downloadName}`);
        const fileStream = fs.createReadStream(filePath);
        fileStream.on("error", (error) => {
          console.error("Stream error:", error);
          res.status(500).json({
            success: false,
            message: "Error streaming certificate file"
          });
        });
        fileStream.pipe(res);
      } else {
        console.error("Certificate file not found at path:", filePath);
        res.status(404).json({
          success: false,
          message: "Certificate file not found"
        });
      }
    } catch (error) {
      console.error("Error in certificate download:", error);
      res.status(500).json({
        success: false,
        message: "Server error while processing certificate download"
      });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs2 from "fs";
import path3 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path2 from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path2.resolve(import.meta.dirname, "client", "src"),
      "@shared": path2.resolve(import.meta.dirname, "shared"),
      "@assets": path2.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path2.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path2.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path3.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs2.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path3.resolve(import.meta.dirname, "public");
  if (!fs2.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path3.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path4 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path4.startsWith("/api")) {
      let logLine = `${req.method} ${path4} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
