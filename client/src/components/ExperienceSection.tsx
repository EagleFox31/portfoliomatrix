import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/LanguageContext";

interface ExperienceBase {
  company: string;
  position: string;
  period: string;
  align: 'left' | 'right';
}

interface ExperienceData extends ExperienceBase {
  descriptionEn: string[];
  descriptionFr: string[];
}

const experiencesData: ExperienceData[] = [
  {
    company: "CFAO Mobility Academy",
    position: "Fullstack Developer",
    period: "Oct. 2024 – Present",
    descriptionEn: [
      "Designed, developed and deployed a modular Learning Management System (LMS) using PHP, JavaScript, and MongoDB.",
      "Optimized MongoDB queries resulting in 80% faster load times and created an evolutive UML architecture.",
      "Implemented a modular admin system deployed in 2 phases, ensuring reliability and user satisfaction.",
      "Conducted code reviews, advanced debugging, and aligned processes with business objectives."
    ],
    descriptionFr: [
      "Conception, développement et déploiement d'un Système de Gestion d'Apprentissage (LMS) modulaire utilisant PHP, JavaScript et MongoDB.",
      "Optimisation des requêtes MongoDB résultant en des temps de chargement 80% plus rapides et création d'une architecture UML évolutive.",
      "Implémentation d'un système d'administration modulaire déployé en 2 phases, assurant fiabilité et satisfaction des utilisateurs.",
      "Réalisation de revues de code, débogage avancé et alignement des processus avec les objectifs commerciaux."
    ],
    align: 'left'
  },
  {
    company: "CAMI (CFAO Mobility)",
    position: "Assistant System & Network Analyst",
    period: "Jul. 2024 – Sept. 2024",
    descriptionEn: [
      "Provided IT support and user assistance across the organization.",
      "Managed systems and network administration tasks.",
      "Coordinated a repair tracking platform, streamlining maintenance workflows."
    ],
    descriptionFr: [
      "Fourniture de support informatique et assistance aux utilisateurs dans toute l'organisation.",
      "Gestion des tâches d'administration système et réseau.",
      "Coordination d'une plateforme de suivi des réparations, simplifiant les flux de travail de maintenance."
    ],
    align: 'right'
  },
  {
    company: "Orange Cameroun",
    position: "Analyst & Backend Developer Intern",
    period: "Aug. 2023 – Feb. 2024",
    descriptionEn: [
      "Developed a request management application using ASP.NET Core MVC and Entity Framework.",
      "Conducted unit testing (xUnit) and API testing (Swagger, Postman).",
      "Implemented Keycloak authentication for secure access control.",
      "Created comprehensive technical and functional specifications documentation."
    ],
    descriptionFr: [
      "Développement d'une application de gestion des demandes utilisant ASP.NET Core MVC et Entity Framework.",
      "Réalisation de tests unitaires (xUnit) et tests d'API (Swagger, Postman).",
      "Implémentation de l'authentification Keycloak pour un contrôle d'accès sécurisé.",
      "Création d'une documentation complète des spécifications techniques et fonctionnelles."
    ],
    align: 'left'
  },
  {
    company: "CAMTEL",
    position: "Fullstack Developer Intern",
    period: "Mar. 2020 – Jul. 2020",
    descriptionEn: [
      "Built a customer complaint collection platform using Java EE and Oracle DB, improving satisfaction by 36%.",
      "Performed testing, debugging, and workflow optimization, reducing resolution time by 17%.",
      "Implemented responsive UI/UX enhancements to improve user engagement."
    ],
    descriptionFr: [
      "Création d'une plateforme de collecte des réclamations clients utilisant Java EE et Oracle DB, améliorant la satisfaction de 36%.",
      "Réalisation de tests, débogage et optimisation des flux de travail, réduisant le temps de résolution de 17%.",
      "Implémentation d'améliorations UI/UX responsive pour améliorer l'engagement des utilisateurs."
    ],
    align: 'right'
  }
];

const ExperienceSection = () => {
  const { t, language } = useLanguage();

  const experiences = experiencesData.map(exp => ({
    company: exp.company,
    position: exp.position,
    period: exp.period,
    description: language === 'en' ? exp.descriptionEn : exp.descriptionFr,
    align: exp.align
  }));

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-mono text-[hsl(var(--matrix-green))] mb-2">
            <span className="text-white">&gt;</span> {t('experience.title')}<span className="text-white">_</span>
          </h2>
          <div className="w-20 h-1 bg-[hsl(var(--matrix-green))] mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-[hsl(var(--matrix-green))]/30 transform md:-translate-x-1/2"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={cn(
                  "relative md:ml-0 mb-12 group",
                  exp.align === 'right' && "md:flex md:justify-end"
                )}
              >
                <div className={cn(
                  "flex flex-col md:flex-row items-start group-hover:shadow-lg shadow-[hsl(var(--matrix-green))]/10 transition-shadow duration-300",
                  exp.align === 'right' && "md:flex-row-reverse"
                )}>
                  <div className={cn(
                    "flex md:w-1/2 pb-5 relative",
                    exp.align === 'left' ? "md:justify-end md:pr-12" : "md:justify-start md:pl-12"
                  )}>
                    <div className={cn(
                      "hidden md:block absolute top-0 w-3 h-3 rounded-full bg-[hsl(var(--matrix-green))] z-10",
                      exp.align === 'left' ? "right-0 -mr-1.5" : "left-0 -ml-1.5"
                    )}></div>
                    <div className={exp.align === 'left' ? "md:text-right" : "md:text-left"}>
                      <h3 className="text-xl font-mono text-[hsl(var(--matrix-green))]">{exp.company}</h3>
                      <p className="text-lg text-white">{exp.position}</p>
                      <p className="text-[hsl(var(--matrix-teal))] font-mono">{exp.period}</p>
                    </div>
                  </div>
                  <Card className={cn(
                    "border border-[hsl(var(--matrix-green))]/30 bg-black/60 backdrop-blur-sm rounded-lg p-6 md:w-1/2 relative",
                    exp.align === 'left' ? "md:ml-12" : "md:mr-12"
                  )}>
                    <div className="md:hidden absolute top-0 left-0 w-3 h-3 rounded-full bg-[hsl(var(--matrix-green))] -ml-9 mt-3 z-10"></div>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
