import { useEffect, useState } from 'react';
import TypingEffect from '@/components/ui/typing-effect';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

const HeroSection = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const { t } = useLanguage();
  
  useEffect(() => {
    // Delay subtitle appearance for better effect
    const timer = setTimeout(() => {
      setShowSubtitle(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleScrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 py-20 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-[hsl(var(--matrix-teal))] mb-2 font-mono">
            {t('hero.greeting')}
          </p>
          <h1 className="text-4xl md:text-6xl font-mono text-white mb-6" id="hero-title">
            <span className="text-[hsl(var(--matrix-green))]">&lt;</span>
            <TypingEffect text={t('hero.name')} typingSpeed={70} />
            <span className="text-[hsl(var(--matrix-green))]">/&gt;</span>
          </h1>
          
          {showSubtitle && (
            <div className="overflow-hidden h-12">
              <p className="text-xl md:text-2xl font-mono text-[hsl(var(--matrix-green))] typing-animation mb-8">
                {t('hero.title')} | AWS Certified
              </p>
            </div>
          )}
          
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              onClick={handleScrollToSection('projects')}
              className="bg-transparent border-2 border-[hsl(var(--matrix-green))] text-[hsl(var(--matrix-green))] px-8 py-3 rounded-md font-mono hover:bg-[hsl(var(--matrix-green))] hover:text-black transition-colors duration-300"
            >
              {t('hero.cta')}
            </a>
            <a 
              href="#contact" 
              onClick={handleScrollToSection('contact')}
              className="bg-[hsl(var(--matrix-green))] text-black px-8 py-3 rounded-md font-mono hover:bg-[hsl(var(--matrix-teal))] transition-colors duration-300"
            >
              {t('contact')}
            </a>
          </div>
          
          <div className="mt-12 flex justify-center space-x-6">
            <a 
              href="https://github.com/EagleFox31" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[hsl(var(--matrix-green))] transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/jennifer-lawrynn-aka-a-79842b1b3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[hsl(var(--matrix-green))] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:lawrynnjennifer@gmail.com"
              className="text-white hover:text-[hsl(var(--matrix-green))] transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about"
          onClick={handleScrollToSection('about')}
          aria-label="Scroll to About section"
        >
          <ChevronDown className="text-[hsl(var(--matrix-green))] h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
