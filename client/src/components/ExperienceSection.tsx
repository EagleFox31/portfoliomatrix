import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
  align: 'left' | 'right';
}

const experiences: Experience[] = [
  {
    company: "CFAO Mobility Academy",
    position: "Fullstack Developer",
    period: "Oct. 2024 – Present",
    description: [
      "Designed, developed and deployed a modular Learning Management System (LMS) using PHP, JavaScript, and MongoDB.",
      "Optimized MongoDB queries resulting in 80% faster load times and created an evolutive UML architecture.",
      "Implemented a modular admin system deployed in 2 phases, ensuring reliability and user satisfaction.",
      "Conducted code reviews, advanced debugging, and aligned processes with business objectives."
    ],
    align: 'left'
  },
  {
    company: "CAMI (CFAO Mobility)",
    position: "Assistant System & Network Analyst",
    period: "Jul. 2024 – Sept. 2024",
    description: [
      "Provided IT support and user assistance across the organization.",
      "Managed systems and network administration tasks.",
      "Coordinated a repair tracking platform, streamlining maintenance workflows."
    ],
    align: 'right'
  },
  {
    company: "Orange Cameroun",
    position: "Analyst & Backend Developer Intern",
    period: "Aug. 2023 – Feb. 2024",
    description: [
      "Developed a request management application using ASP.NET Core MVC and Entity Framework.",
      "Conducted unit testing (xUnit) and API testing (Swagger, Postman).",
      "Implemented Keycloak authentication for secure access control.",
      "Created comprehensive technical and functional specifications documentation."
    ],
    align: 'left'
  },
  {
    company: "CAMTEL",
    position: "Fullstack Developer Intern",
    period: "Mar. 2020 – Jul. 2020",
    description: [
      "Built a customer complaint collection platform using Java EE and Oracle DB, improving satisfaction by 36%.",
      "Performed testing, debugging, and workflow optimization, reducing resolution time by 17%.",
      "Implemented responsive UI/UX enhancements to improve user engagement."
    ],
    align: 'right'
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-mono text-[hsl(var(--matrix-green))] mb-2">
            <span className="text-white">&gt;</span> Experience<span className="text-white">_</span>
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
