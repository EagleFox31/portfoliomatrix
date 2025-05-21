import ProjectCard from "@/components/ProjectCard";
import { Github } from "lucide-react";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Digital Patient Record",
    description: "A comprehensive Electronic Medical Record system with machine learning integration for diagnostic assistance.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "Laravel", "MySQL", "Machine Learning"],
    features: [
      "Secure patient data management and storage",
      "ML algorithms for preliminary diagnosis suggestions",
      "Analytics dashboard for healthcare metrics",
      "Role-based access control for medical staff",
      "Mobile-responsive interface for bedside use"
    ],
    link: "#"
  },
  {
    title: "CFAO Learning Management System",
    description: "A modular Learning Management System for CFAO Mobility Academy with scalable architecture.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["PHP", "JavaScript", "MongoDB", "UML"],
    features: [
      "Optimized MongoDB queries (80% faster loading)",
      "Modular administration system with phased deployment",
      "Customizable course creation tools",
      "Progress tracking and certification management",
      "Integration with HR systems"
    ],
    link: "#"
  },
  {
    title: "CAMTEL Complaint Platform",
    description: "A customer complaint collection and tracking system that improved customer satisfaction by 36%.",
    image: "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Java EE", "Oracle DB", "JSP", "Servlets"],
    features: [
      "Reduced complaint resolution time by 17%",
      "Automated ticket routing and escalation",
      "Real-time status updates for customers",
      "Analytics dashboard for management",
      "Integration with existing CRM systems"
    ],
    link: "#"
  },
  {
    title: "GMAO Maintenance System",
    description: "A comprehensive Computerized Maintenance Management System for asset tracking.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React.js", "TypeScript", "Node.js", "Express"],
    features: [
      "Equipment lifecycle management",
      "Preventive maintenance scheduling",
      "Work order generation and tracking",
      "Spare parts inventory management",
      "Maintenance KPI dashboards"
    ],
    link: "#"
  },
  {
    title: "Intelligent Employee Matching",
    description: "An AI-powered platform matching new recruits with compatible team members.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React.js", "TypeScript", "Node.js", "Express"],
    features: [
      "Compatibility algorithm based on skills and experience",
      "Interactive visualization of potential matches",
      "Onboarding assistance and resource sharing",
      "Progress tracking for new employee integration",
      "Analytics for HR insights"
    ],
    link: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-mono text-[hsl(var(--matrix-green))] mb-2">
            <span className="text-white">&gt;</span> Projects<span className="text-white">_</span>
          </h2>
          <div className="w-20 h-1 bg-[hsl(var(--matrix-green))] mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            A selection of my professional and personal projects showcasing my technical skills and problem-solving approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              features={project.features}
              link={project.link}
            />
          ))}
          
          {/* Github Repository Card */}
          <Card className="border border-[hsl(var(--matrix-green))]/30 bg-black/60 backdrop-blur-sm rounded-xl p-6 flex flex-col justify-between h-full">
            <div>
              <div className="h-40 rounded-lg bg-[hsl(var(--matrix-dark-green))]/40 mb-4 flex items-center justify-center">
                <Github className="h-16 w-16 text-[hsl(var(--matrix-green))] opacity-70" />
              </div>
              <h3 className="text-xl font-mono text-[hsl(var(--matrix-green))] mb-2">More Projects on GitHub</h3>
              <p className="text-gray-300">
                Explore my GitHub repository for additional projects, code samples, and contributions to open-source.
              </p>
            </div>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-[hsl(var(--matrix-green))] hover:text-[hsl(var(--matrix-teal))] transition-colors"
            >
              <span>Visit GitHub Profile</span>
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
