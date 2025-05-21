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
              {t('about.engineer')}
            </p>
            <p className="text-gray-300 mb-4">
              {t('about.developed')}
            </p>
            <p className="text-gray-300">
              {t('about.looking')}
            </p>
          </Card>
          
          <Card className="border border-[hsl(var(--matrix-green))]/30 bg-black/60 backdrop-blur-sm rounded-lg p-6 shadow-lg shadow-[hsl(var(--matrix-green))]/10">
            <h3 className="text-xl font-mono text-[hsl(var(--matrix-green))] mb-4">$ cat certifications.txt</h3>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{t('about.certifications')}</span>
                <span className="text-[hsl(var(--matrix-green))] font-mono">July 2023</span>
              </div>
            </div>
            
            <h3 className="text-xl font-mono text-[hsl(var(--matrix-green))] mb-4">$ cat education.txt</h3>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{t('about.education')}</span>
                <span className="text-[hsl(var(--matrix-green))] font-mono">2020-2022</span>
              </div>
              <p className="text-gray-400">{t('about.university')}</p>
              <p className="text-gray-300 mt-2">
                {t('about.educationDesc')}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
