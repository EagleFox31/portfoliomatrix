import ProjectCard from "@/components/ProjectCard";
import { Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/lib/LanguageContext";
import { projectsFr, projectsEn } from "./ProjectData";

const ProjectsSection = () => {
  const { t, language } = useLanguage();
  
  // Sélectionner la liste de projets selon la langue
  const activeProjects = language === 'fr' ? projectsFr : projectsEn;
  
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-mono text-[hsl(var(--matrix-green))] mb-2">
            <span className="text-white">&gt;</span> {t('projects')}<span className="text-white">_</span>
          </h2>
          <div className="w-20 h-1 bg-[hsl(var(--matrix-green))] mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            {language === 'fr' 
              ? "Une sélection de mes projets professionnels et personnels qui démontrent mes compétences techniques et mon approche de résolution de problèmes."
              : "A selection of my professional and personal projects showcasing my technical skills and problem-solving approach."}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeProjects.map((project, index) => (
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
              <h3 className="text-xl font-mono text-[hsl(var(--matrix-green))] mb-2">
                {language === 'fr' ? "Plus de Projets sur GitHub" : "More Projects on GitHub"}
              </h3>
              <p className="text-gray-300">
                {language === 'fr'
                  ? "Explorez mon dépôt GitHub pour découvrir d'autres projets, exemples de code et contributions open-source."
                  : "Explore my GitHub repository for additional projects, code samples, and contributions to open-source."}
              </p>
            </div>
            <a 
              href="https://github.com/EagleFox31" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-[hsl(var(--matrix-green))] hover:text-[hsl(var(--matrix-teal))] transition-colors"
            >
              <span>
                {language === 'fr' ? "Visiter mon Profil GitHub" : "Visit GitHub Profile"}
              </span>
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
