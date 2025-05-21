import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const contactData = insertContactSchema.parse(req.body);
      
      // Store contact submission
      const submission = await storage.createContactSubmission(contactData);
      
      res.status(201).json({ success: true, message: "Contact form submitted successfully" });
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

  // API endpoint for resume download
  app.get("/api/resume/download", (req, res) => {
    try {
      const filePath = path.resolve(__dirname, "../attached_assets/Jennifer_Lawrynn_Aka_a_CV_INGENIEURE_LOGICIELLE_2025_MAI.pdf");
      
      if (fs.existsSync(filePath)) {
        res.download(
          filePath,
          "Jennifer_Lawrynn_Aka_a_CV.pdf",
          (err) => {
            if (err) {
              console.error("Error downloading CV:", err);
              res.status(500).json({ 
                success: false, 
                message: "Error downloading CV file" 
              });
            }
          }
        );
      } else {
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

  const httpServer = createServer(app);

  return httpServer;
}
