import { Card } from "@/components/ui/card";
import SkillBar from "@/components/ui/skill-bar";

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    percentage: number;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",
    skills: [
      { name: "Python & Django", percentage: 90 },
      { name: "PHP & Laravel", percentage: 85 },
      { name: "Node.js & Express", percentage: 80 },
      { name: "ASP.NET Core MVC", percentage: 75 },
      { name: "REST APIs & Documentation", percentage: 85 }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "JavaScript", percentage: 90 },
      { name: "HTML5 & CSS3", percentage: 85 },
      { name: "React.js", percentage: 80 },
      { name: "Next.js", percentage: 75 },
      { name: "Responsive Design", percentage: 85 }
    ]
  },
  {
    title: "Databases & Storage",
    skills: [
      { name: "MongoDB", percentage: 85 },
      { name: "PostgreSQL", percentage: 80 },
      { name: "MySQL", percentage: 85 },
      { name: "Oracle DB", percentage: 75 },
      { name: "Database Optimization", percentage: 80 }
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS Services", percentage: 90 },
      { name: "Docker", percentage: 80 },
      { name: "Git & GitHub", percentage: 85 },
      { name: "CI/CD Pipelines", percentage: 75 },
      { name: "Infrastructure as Code", percentage: 70 }
    ]
  }
];

const additionalSkills = [
  "Authentication & Security",
  "Test-Driven Development",
  "UML Design",
  "Keycloak",
  "Swagger",
  "Postman",
  "TypeScript",
  "User Experience Design",
  "Code First Approach",
  "Problem Solving"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-mono text-[hsl(var(--matrix-green))] mb-2">
            <span className="text-white">&gt;</span> Skills<span className="text-white">_</span>
          </h2>
          <div className="w-20 h-1 bg-[hsl(var(--matrix-green))] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="border border-[hsl(var(--matrix-green))]/30 bg-black/60 backdrop-blur-sm rounded-lg p-6 shadow-lg shadow-[hsl(var(--matrix-green))]/10"
            >
              <h3 className="text-xl font-mono text-[hsl(var(--matrix-green))] mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <SkillBar 
                    key={idx} 
                    skill={skill.name} 
                    percentage={skill.percentage} 
                  />
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12">
          <h3 className="text-xl font-mono text-[hsl(var(--matrix-green))] mb-6 text-center">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-[hsl(var(--matrix-dark-green))] text-[hsl(var(--matrix-green))] px-4 py-2 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
