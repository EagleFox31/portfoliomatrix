import { useEffect, useRef } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

const ParallaxSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current && bgRef.current) {
        const scrollPosition = window.pageYOffset;
        const containerPosition = parallaxRef.current.offsetTop;
        const speed = 0.5;
        
        if (scrollPosition + window.innerHeight > containerPosition && 
            scrollPosition < containerPosition + parallaxRef.current.offsetHeight) {
          const yPos = (scrollPosition - containerPosition) * speed;
          bgRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section 
      className="relative overflow-hidden h-[50vh] flex items-center justify-center"
      ref={parallaxRef}
    >
      <div 
        className="absolute top-0 left-0 w-full h-[120%] bg-center bg-cover scale-110 z-[-1] opacity-40"
        ref={bgRef}
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`
        }}
      ></div>
      
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-mono text-[hsl(var(--matrix-green))] mb-6">
            {t('parallax.title')}
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            {t('parallax.description')}
          </p>
        </div>
        
        <a 
          href="#projects" 
          onClick={handleScrollToProjects}
          className="inline-block bg-[hsl(var(--matrix-green))] text-black px-8 py-3 rounded-md font-mono hover:bg-[hsl(var(--matrix-teal))] transition-colors duration-300"
        >
          {t('parallax.cta')}
        </a>
      </div>
    </section>
  );
};

export default ParallaxSection;
