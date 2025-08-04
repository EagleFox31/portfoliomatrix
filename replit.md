# Jennifer Lawrynn Aka'a Portfolio Website

## Overview

This is a personal portfolio website for Jennifer Lawrynn Aka'a, a full-stack developer. The application uses a modern web development stack with a React frontend and Express backend. The site features a Matrix-inspired design with sections for about, experience, skills, projects, resume, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a client-server architecture:

1. **Frontend**: React-based single-page application using Vite as the build tool
2. **Backend**: Express.js server that serves the frontend and provides API endpoints
3. **Database**: PostgreSQL database (via Drizzle ORM) for storing user data and contact form submissions
4. **Styling**: Tailwind CSS with a custom theme and shadcn/ui components

The application is set up to run in a Replit environment with automatic deployment configurations. It has a clear separation between frontend (client) and backend (server) code, with shared types and schemas.

## Key Components

### Frontend

1. **React Components**: Organized in a component-based architecture with:
   - UI components (from shadcn/ui)
   - Section components (AboutSection, ContactSection, etc.)
   - Page components (Home, NotFound)
   
2. **Styling**: 
   - Tailwind CSS for utility-based styling
   - Custom Matrix-inspired theme with CSS variables
   - Responsive design for different screen sizes

3. **State Management**:
   - React Query for API data fetching and caching
   - React Hooks for component-level state

4. **Routing**:
   - Wouter for lightweight client-side routing

### Backend

1. **Express Server**:
   - Handles API requests
   - Serves static frontend files in production
   - Includes middleware for logging and error handling

2. **API Endpoints**:
   - `/api/contact`: Submission endpoint for contact forms
   - `/api/resume/download`: Endpoint for resume downloads

3. **Database Access**:
   - Drizzle ORM for type-safe database queries
   - Schema definitions for contacts and users

### Shared

1. **Schema Definitions**: 
   - Shared schema types for database entities
   - Zod validation schemas for form data

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on the frontend
   - Form data is validated client-side
   - Data is sent to `/api/contact` endpoint
   - Server validates data using Zod schema
   - Server stores data in PostgreSQL database
   - Response is sent back to client

2. **Resume Download**:
   - User clicks download button
   - Request is sent to `/api/resume/download` endpoint
   - Server sends the PDF file as a download

## External Dependencies

### Frontend Dependencies

1. **UI Framework**:
   - React with shadcn/ui components
   - Radix UI primitives for accessible components
   - Tailwind CSS for styling

2. **Data Fetching**:
   - TanStack Query (React Query) for API requests and caching

3. **Animation**:
   - Custom Matrix Rain animation
   - Framer Motion for component animations

### Backend Dependencies

1. **Server**:
   - Express.js for API handling
   - Vite for development server

2. **Database**:
   - Drizzle ORM for database access
   - PostgreSQL for data storage
   - NeonDB serverless connector for PostgreSQL

3. **Validation**:
   - Zod for schema validation

## Deployment Strategy

The application is configured for deployment on Replit with:

1. **Development Mode**:
   - Uses Vite's development server with HMR
   - Runs with `npm run dev` command

2. **Production Build**:
   - Frontend built with Vite
   - Backend bundled with esbuild
   - Combined and served from a single Express server

3. **Database**:
   - Uses Replit's PostgreSQL module
   - Database migrations managed with Drizzle Kit

4. **Environment**:
   - Environment variables for configuration
   - Different settings for development and production

5. **Monitoring**:
   - Basic request logging middleware
   - Error handling middleware

## Development Workflow

1. Use `npm run dev` to start the development server
2. Frontend code is located in `client/src/`
3. Backend code is in `server/`
4. Shared types and schemas are in `shared/`
5. Database schema changes should be applied with `npm run db:push`
6. Production build with `npm run build`

## Recent Updates

### January 2025 - Certifications Section Added
- Integrated comprehensive Certifications section with 8 authentic certifications
- Added real certificate files (PDFs and images) with secure download functionality
- Implemented `/api/certificates/download/:filename` endpoint with security whitelist
- Enhanced navigation to include Certifications section
- Full bilingual support (French/English) for all certification content
- Matrix-themed UI with interactive certification cards featuring verification links and download buttons

## Future Improvements

1. Add user authentication for admin access
2. Implement a CMS for easier content updates
3. Add blog functionality
4. Improve SEO with meta tags and server-side rendering
5. Add analytics to track visitor information
6. Add certificate verification modal with detailed information