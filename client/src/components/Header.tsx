import { useState } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
  
  const menuItems = [
    { title: "_about", href: "#about" },
    { title: "_experience", href: "#experience" },
    { title: "_skills", href: "#skills" },
    { title: "_projects", href: "#projects" },
    { title: "_contact", href: "#contact" }
  ];
  
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href') || '';
    const targetSection = document.querySelector(href);
    
    if (targetSection) {
      window.scrollTo({
        top: targetSection.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      if (mobileMenuOpen) setMobileMenuOpen(false);
    }
  };
  
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-[hsl(var(--matrix-green))]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo">
          <h1 className="text-2xl font-mono text-[hsl(var(--matrix-green))]">
            &lt;Jennifer.Lawrynn<span className="text-white">/</span>&gt;
          </h1>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className="font-mono text-white hover:text-[hsl(var(--matrix-green))] transition-colors"
                  onClick={handleNavClick}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      <div className={cn("md:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="px-4 py-3 space-y-2 bg-black/90 backdrop-blur-md border-b border-[hsl(var(--matrix-green))]">
          {menuItems.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className="block font-mono text-white hover:text-[hsl(var(--matrix-green))] py-2"
              onClick={handleNavClick}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
