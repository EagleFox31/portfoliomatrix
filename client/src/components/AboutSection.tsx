import { Card } from "@/components/ui/card";
import { useLanguage } from "@/lib/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-mono text-[hsl(var(--matrix-green))] mb-2">
            <span className="text-white">&gt;</span> {t('about')}<span className="text-white">_</span>
          </h2>
          <div className="w-20 h-1 bg-[hsl(var(--matrix-green))] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Card className="border border-[hsl(var(--matrix-green))]/30 bg-black/60 backdrop-blur-sm rounded-lg p-6 shadow-lg shadow-[hsl(var(--matrix-green))]/10">
            <h3 className="text-xl font-mono text-[hsl(var(--matrix-green))] mb-4">$ whoami</h3>
            <p className="text-gray-300 mb-4">
              Fullstack Engineer with 2+ years of experience specializing in Python, PHP, and JavaScript. 
              AWS Certified Solutions Architect with expertise in designing and deploying scalable business solutions.
            </p>
            <p className="text-gray-300 mb-4">
              I've developed Learning Management Systems, Computerized Maintenance Management Systems, 
              and web platforms that prioritize performance, security, and user impact.
            </p>
            <p className="text-gray-300">
              I'm looking for challenging opportunities where I can innovate and contribute to digital transformation.
            </p>
          </Card>
          
          <Card className="border border-[hsl(var(--matrix-green))]/30 bg-black/60 backdrop-blur-sm rounded-lg p-6 shadow-lg shadow-[hsl(var(--matrix-green))]/10">
            <h3 className="text-xl font-mono text-[hsl(var(--matrix-green))] mb-4">$ cat certifications.txt</h3>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">AWS Certified Solutions Architect – Associate</span>
                <span className="text-[hsl(var(--matrix-green))] font-mono">July 2023</span>
              </div>
              <a 
                href="#" 
                className="text-[hsl(var(--matrix-teal))] hover:text-[hsl(var(--matrix-green))] transition-colors inline-flex items-center"
              >
                <span>{t('resume.certifications')}</span>
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            
            <h3 className="text-xl font-mono text-[hsl(var(--matrix-green))] mb-4">$ cat education.txt</h3>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Master in Engineering Sciences, Computer Engineering</span>
                <span className="text-[hsl(var(--matrix-green))] font-mono">2020-2022</span>
              </div>
              <p className="text-gray-400">Protestant University of Central Africa, Yaoundé, Cameroon</p>
              <p className="text-gray-300 mt-2">
                Developed a Digital Patient Record coupled with ML-assisted diagnosis (Python, Laravel, MySQL).
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
