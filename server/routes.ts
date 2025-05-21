import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { formatContactMessage, sendTelegramMessage } from "./telegram";

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
      // Récupération de la langue depuis la query string
      const lang = req.query.lang as string || 'en';
      
      // Sélection du fichier en fonction de la langue
      const fileName = lang === 'fr' 
        ? 'Jennifer_Lawrynn_Aka_a_CV_INGENIEURE_LOGICIELLE_2025_MAI (2).pdf'
        : 'Jennifer_Lawrynn_Aka_a_CV_SOFTWARE_ENGINEER_2025_ENG_MAY.pdf';
      
      // Chemin absolu vers le fichier PDF
      const filePath = path.join(process.cwd(), 'attached_assets', fileName);
      
      console.log('Attempting to send file:', filePath);
      console.log('Language:', lang);
      console.log('File exists:', fs.existsSync(filePath));
      
      if (fs.existsSync(filePath)) {
        res.setHeader('Content-Type', 'application/pdf');
        const downloadName = lang === 'fr' ? 'Jennifer_Lawrynn_Aka_a_CV_FR.pdf' : 'Jennifer_Lawrynn_Aka_a_CV_EN.pdf';
        res.setHeader('Content-Disposition', `attachment; filename=${downloadName}`);
        
        // Flux de lecture du fichier
        const fileStream = fs.createReadStream(filePath);
        
        fileStream.on('error', (error) => {
          console.error('Stream error:', error);
          res.status(500).json({ 
            success: false, 
            message: "Error streaming CV file" 
          });
        });
        
        // Pipe le fichier directement dans la réponse
        fileStream.pipe(res);
      } else {
        console.error('File not found at path:', filePath);
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
