import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const ResumeSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { t, language } = useLanguage();
  
  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDownloading(true);
    
    try {
      // Accès direct aux fichiers PDF dans le dossier public
      const pdfPath = language === 'fr' ? '/Jennifer_Lawrynn_Aka_a_CV_FR.pdf' : '/Jennifer_Lawrynn_Aka_a_CV_EN.pdf';
      
      // Utilisation de window.location pour forcer le téléchargement
      const link = document.createElement('a');
      link.href = pdfPath;
      link.download = language === 'fr' ? 'Jennifer_Lawrynn_Aka_a_CV_FR.pdf' : 'Jennifer_Lawrynn_Aka_a_CV_EN.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading CV:', error);
    } finally {
      // Court délai avant de réinitialiser l'état
      setTimeout(() => {
        setIsDownloading(false);
      }, 1000);
    }
  };
  
  return (
    <section id="resume" className="py-20 relative bg-[hsl(var(--matrix-dark-green))]/20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-mono text-[hsl(var(--matrix-green))] mb-2">
            <span className="text-white">&gt;</span> {t('resume.title')}<span className="text-white">_</span>
          </h2>
          <div className="w-20 h-1 bg-[hsl(var(--matrix-green))] mx-auto"></div>
        </div>
        
        <Card className="max-w-4xl mx-auto border border-[hsl(var(--matrix-green))]/30 bg-black/70 backdrop-blur-sm rounded-lg p-8 shadow-lg shadow-[hsl(var(--matrix-green))]/10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h3 className="text-2xl font-mono text-[hsl(var(--matrix-green))] mb-2">Jennifer Lawrynn Aka'a</h3>
              <p className="text-white text-lg">Fullstack Developer | AWS Certified</p>
            </div>
            <button
              onClick={handleDownloadCV}
              disabled={isDownloading}
              className="mt-4 sm:mt-0 bg-[hsl(var(--matrix-green))] text-black px-6 py-2 rounded-md font-mono hover:bg-[hsl(var(--matrix-teal))] transition-colors duration-300 inline-flex items-center disabled:opacity-70"
            >
              <Download className="mr-2 h-4 w-4" />
              {isDownloading ? 
                (language === 'fr' ? "Téléchargement..." : "Downloading...") : 
                t('resume.download')
              }
            </button>
          </div>
          
          <div className="space-y-6">
            <div className="resume-section">
              <h4 className="text-xl font-mono text-[hsl(var(--matrix-green))] mb-4">$ cat profile.txt</h4>
              <p className="text-gray-300">
                {language === 'fr' ? 
                  "Ingénieure Full-Stack (Python, PHP, JavaScript) avec certification AWS et 2 ans d'expérience dans la conception et le déploiement de solutions d'entreprise évolutives (LMS, GMAO, plateformes web). Passionnée par la performance, la sécurité et l'impact utilisateur, à la recherche d'un rôle stimulant pour innover et contribuer à la transformation numérique." : 
                  "Fullstack Engineer (Python, PHP, JavaScript) with AWS certification and 2 years of experience in designing and deploying scalable business solutions (LMS, CMMS, web platforms). Passionate about performance, security, and user impact, seeking a challenging role to innovate and contribute to digital transformation."
                }
              </p>
            </div>
            
            <div className="resume-section">
              <h4 className="text-xl font-mono text-[hsl(var(--matrix-green))] mb-4">$ cat skills.txt</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-white font-medium mb-2">{t('resume.backend')}:</p>
                  <p className="text-gray-300">Python, C, PHP, Django, Laravel, ASP.NET Core MVC, Node.js, Express.js</p>
                </div>
                <div>
                  <p className="text-white font-medium mb-2">{t('resume.frontend')}:</p>
                  <p className="text-gray-300">JavaScript, HTML5, CSS, React.js, Next.js</p>
                </div>
                <div>
                  <p className="text-white font-medium mb-2">{t('resume.apis')}:</p>
                  <p className="text-gray-300">Django REST, Swagger, Postman</p>
                </div>
                <div>
                  <p className="text-white font-medium mb-2">{t('resume.cloud')}:</p>
                  <p className="text-gray-300">AWS (EC2, Lambda, RDS, S3, VPC, ELB, CloudFront, IAM, KMS, CloudWatch, CloudFormation, SNS, SQS)</p>
                </div>
                <div>
                  <p className="text-white font-medium mb-2">{t('resume.databases')}:</p>
                  <p className="text-gray-300">MongoDB, PostgreSQL, MySQL, OracleDB, SQLite</p>
                </div>
                <div>
                  <p className="text-white font-medium mb-2">{t('resume.tools')}:</p>
                  <p className="text-gray-300">Git, GitHub, Docker, Keycloak</p>
                </div>
                <div>
                  <p className="text-white font-medium mb-2">{t('resume.methodologies')}:</p>
                  <p className="text-gray-300">UML, TDD, Code First</p>
                </div>
                <div>
                  <p className="text-white font-medium mb-2">{t('resume.languages')}:</p>
                  <p className="text-gray-300">{language === 'fr' ? 'Français (Natif), Anglais (Intermédiaire)' : 'French (Native), English (Intermediate)'}</p>
                </div>
              </div>
            </div>
            
            <div className="resume-section">
              <h4 className="text-xl font-mono text-[hsl(var(--matrix-green))] mb-4">$ cat {language === 'fr' ? 'experience.txt' : 'experience.txt'}</h4>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3">
                    <p className="text-[hsl(var(--matrix-teal))] font-mono">Oct. 2024 – {language === 'fr' ? 'Présent' : 'Present'}</p>
                    <p className="font-medium text-white">CFAO Mobility Cameroun</p>
                  </div>
                  <div className="sm:w-2/3">
                    <p className="font-medium text-white">Fullstack Developer</p>
                    <div className="text-gray-300">
                      <p className="mb-1">
                        {language === 'fr' ? 
                          "• Développement d'un Système de Gestion d'Apprentissage (LMS) pour le compte du département Academy de CFAO Mobility" : 
                          "• Development of a Learning Management System (LMS) for the Academy department of CFAO Mobility"
                        }
                      </p>
                      <p className="mb-1">
                        {language === 'fr' ? 
                          "• Conception, réalisation et déploiement d'une architecture modulaire basée sur PHP, JavaScript et MongoDB" : 
                          "• Design, implementation and deployment of a modular architecture based on PHP, JavaScript and MongoDB"
                        }
                      </p>
                      <p className="mb-1">
                        {language === 'fr' ? 
                          "• Optimisation des requêtes MongoDB résultant en des temps de chargement 80% plus rapides et création d'une architecture UML évolutive" : 
                          "• Optimized MongoDB queries resulting in 80% faster load times and created an evolutive UML architecture"
                        }
                      </p>
                      <p className="mb-1">
                        {language === 'fr' ? 
                          "• Implémentation d'un système d'administration modulaire déployé en 2 phases, assurant fiabilité et satisfaction des utilisateurs" : 
                          "• Implemented a modular admin system deployed in 2 phases, ensuring reliability and user satisfaction"
                        }
                      </p>
                      <p>
                        {language === 'fr' ? 
                          "• Réalisation de revues de code, débogage avancé et alignement des processus avec les objectifs commerciaux" : 
                          "• Conducted code reviews, advanced debugging, and aligned processes with business objectives"
                        }
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3">
                    <p className="text-[hsl(var(--matrix-teal))] font-mono">Aug. 2023 – Feb. 2024</p>
                    <p className="font-medium text-white">Orange Cameroun</p>
                  </div>
                  <div className="sm:w-2/3">
                    <p className="font-medium text-white">{language === 'fr' ? 'Analyste & Développeuse Backend Stagiaire' : 'Analyst & Backend Developer Intern'}</p>
                    <p className="text-gray-300">
                      {language === 'fr' ? 
                        "Développement d'une application de gestion des demandes utilisant ASP.NET Core MVC, Entity Framework, avec tests unitaires et authentification Keycloak." : 
                        "Developed a request management application using ASP.NET Core MVC, Entity Framework, with unit testing and Keycloak authentication."
                      }
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3">
                    <p className="text-[hsl(var(--matrix-teal))] font-mono">Mar. 2020 – Jul. 2020</p>
                    <p className="font-medium text-white">CAMTEL</p>
                  </div>
                  <div className="sm:w-2/3">
                    <p className="font-medium text-white">{language === 'fr' ? 'Développeuse Fullstack Stagiaire' : 'Fullstack Developer Intern'}</p>
                    <p className="text-gray-300">
                      {language === 'fr' ? 
                        "Création d'une plateforme de réclamations clients utilisant Java EE et Oracle DB, améliorant la satisfaction de 36% et réduisant le temps de résolution de 17%." : 
                        "Built a customer complaint platform using Java EE and Oracle DB, improving satisfaction by 36% and reducing resolution time by 17%."
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="resume-section">
              <h4 className="text-xl font-mono text-[hsl(var(--matrix-green))] mb-4">$ cat {language === 'fr' ? 'formation.txt' : 'education.txt'}</h4>
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3">
                  <p className="text-[hsl(var(--matrix-teal))] font-mono">Sept. 2020 – Aug. 2022</p>
                </div>
                <div className="sm:w-2/3">
                  <p className="font-medium text-white">
                    {language === 'fr' ? 
                      "Master en Sciences de l'Ingénieur, Génie Informatique" : 
                      "Master in Engineering Sciences, Computer Engineering"
                    }
                  </p>
                  <p className="text-gray-300">
                    {language === 'fr' ? 
                      "Université Protestante d'Afrique Centrale, Yaoundé, Cameroun" : 
                      "Protestant University of Central Africa, Yaoundé, Cameroon"
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ResumeSection;
