const Footer = () => {
  const menuItems = [
    { title: "About", href: "#about" },
    { title: "Experience", href: "#experience" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" }
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
    }
  };
  
  return (
    <footer className="py-8 border-t border-[hsl(var(--matrix-green))]/30 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-mono text-[hsl(var(--matrix-green))]">
              &lt;Jennifer.Lawrynn<span className="text-white">/</span>&gt;
            </h3>
            <p className="text-gray-400 mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          
          <div>
            <ul className="flex space-x-6">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-[hsl(var(--matrix-green))] transition-colors"
                    onClick={handleNavClick}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
