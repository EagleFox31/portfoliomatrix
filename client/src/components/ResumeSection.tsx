import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useState } from "react";

const ResumeSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  
  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDownloading(true);
    
    try {
      // Lien direct vers le fichier PDF dans le dossier public
      window.open('/Jennifer_Lawrynn_Aka_a_CV.pdf', '_blank');
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
            <span className="text-white">&gt;</span> Resume<span className="text-white">_</span>
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
              {isDownloading ? "Downloading..." : "Download CV"}
            </button>
          </div>
          
          <div className="space-y-6">
            <div className="resume-section">
              <h4 className="text-xl font-mono text-[hsl(var(--matrix-green))] mb-4">$ cat profile.txt</h4>
              <p className="text-gray-300">
                Fullstack Engineer (Python, PHP, JavaScript) with AWS certification and 2+ years of experience in
                designing and deploying scalable business solutions (LMS, CMMS, web platforms). Passionate about
                performance, security, and user impact, seeking a challenging role to innovate and contribute to
                digital transformation.
              </p>
            </div>
            
            <div className="resume-section">
              <h4 className="text-xl font-mono text-[hsl(var(--matrix-green))] mb-4">$ cat skills.txt</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-white font-medium mb-2">Back-end:</p>
                  <p className="text-gray-300">Python, C, PHP, Django, Laravel, ASP.NET Core MVC, Node.js, Express.js</p>
                </div>
                <div>
                  <p className="text-white font-medium mb-2">Front-end:</p>
                  <p className="text-gray-300">JavaScript, HTML5, CSS, React.js, Next.js</p>
                </div>
                <div>
                  <p className="text-white font-medium mb-2">APIs:</p>
                  <p className="text-gray-300">Django REST, Swagger, Postman</p>
                </div>
                <div>
                  <p className="text-white font-medium mb-2">Cloud:</p>
                  <p className="text-gray-300">AWS (EC2, Lambda, RDS, S3, VPC, ELB, CloudFront, IAM, KMS, CloudWatch, CloudFormation, SNS, SQS)</p>
                </div>
                <div>
                  <p className="text-white font-medium mb-2">Databases:</p>
                  <p className="text-gray-300">MongoDB, PostgreSQL, MySQL, OracleDB, SQLite</p>
                </div>
                <div>
                  <p className="text-white font-medium mb-2">Tools & CI/CD:</p>
                  <p className="text-gray-300">Git, GitHub, Docker, Keycloak</p>
                </div>
                <div>
                  <p className="text-white font-medium mb-2">Methodologies:</p>
                  <p className="text-gray-300">UML, TDD, Code First</p>
                </div>
                <div>
                  <p className="text-white font-medium mb-2">Languages:</p>
                  <p className="text-gray-300">French (Native), English (Intermediate)</p>
                </div>
              </div>
            </div>
            
            <div className="resume-section">
              <h4 className="text-xl font-mono text-[hsl(var(--matrix-green))] mb-4">$ cat experience.txt</h4>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3">
                    <p className="text-[hsl(var(--matrix-teal))] font-mono">Oct. 2024 – Present</p>
                    <p className="font-medium text-white">CFAO Mobility Academy</p>
                  </div>
                  <div className="sm:w-2/3">
                    <p className="font-medium text-white">Fullstack Developer</p>
                    <p className="text-gray-300">
                      Designed, developed and deployed a modular Learning Management System with optimized MongoDB 
                      queries and evolutive UML architecture.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3">
                    <p className="text-[hsl(var(--matrix-teal))] font-mono">Aug. 2023 – Feb. 2024</p>
                    <p className="font-medium text-white">Orange Cameroun</p>
                  </div>
                  <div className="sm:w-2/3">
                    <p className="font-medium text-white">Analyst & Backend Developer Intern</p>
                    <p className="text-gray-300">
                      Developed a request management application using ASP.NET Core MVC, Entity Framework, with unit 
                      testing and Keycloak authentication.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3">
                    <p className="text-[hsl(var(--matrix-teal))] font-mono">Mar. 2020 – Jul. 2020</p>
                    <p className="font-medium text-white">CAMTEL</p>
                  </div>
                  <div className="sm:w-2/3">
                    <p className="font-medium text-white">Fullstack Developer Intern</p>
                    <p className="text-gray-300">
                      Built a customer complaint platform using Java EE and Oracle DB, improving satisfaction by 36% 
                      and reducing resolution time by 17%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="resume-section">
              <h4 className="text-xl font-mono text-[hsl(var(--matrix-green))] mb-4">$ cat education.txt</h4>
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3">
                  <p className="text-[hsl(var(--matrix-teal))] font-mono">Sept. 2020 – Aug. 2022</p>
                </div>
                <div className="sm:w-2/3">
                  <p className="font-medium text-white">Master in Engineering Sciences, Computer Engineering</p>
                  <p className="text-gray-300">Protestant University of Central Africa, Yaoundé, Cameroon</p>
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
