export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  location: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image?: string;
  link?: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  profile: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github?: string;
  };
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  skillCategories: SkillCategory[];
  additionalSkills: string[];
  projects: Project[];
  languages: {
    language: string;
    proficiency: string;
  }[];
}

export const resumeData: ResumeData = {
  name: "Jennifer Lawrynn Aka'a",
  title: "Fullstack Developer | AWS Certified",
  profile: "Fullstack Engineer (Python, PHP, JavaScript) with AWS certification and 2+ years of experience in designing and deploying scalable business solutions (LMS, CMMS, web platforms). Passionate about performance, security, and user impact, seeking a challenging role to innovate and contribute to digital transformation.",
  contact: {
    email: "lawrynnjennifer@gmail.com",
    phone: "+237 6 90 77 78 59",
    location: "Yaoundé, Cameroon",
    linkedin: "linkedin.com/in/jennifer-lawrynn-aka-a-79842b1b3",
    github: ""
  },
  experiences: [
    {
      company: "CFAO Mobility Academy",
      position: "Fullstack Developer",
      period: "Oct. 2024 – Present",
      description: "Designed, developed and deployed a modular Learning Management System with optimized MongoDB queries and evolutive UML architecture.",
      location: "Yaoundé, Cameroon"
    },
    {
      company: "CAMI (CFAO Mobility)",
      position: "Assistant System & Network Analyst",
      period: "Jul. 2024 – Sept. 2024",
      description: "Provided IT support, managed systems and network administration tasks, and coordinated a repair tracking platform.",
      location: "Yaoundé, Cameroon"
    },
    {
      company: "Orange Cameroun",
      position: "Analyst & Backend Developer Intern",
      period: "Aug. 2023 – Feb. 2024",
      description: "Developed a request management application using ASP.NET Core MVC, Entity Framework, with unit testing and Keycloak authentication.",
      location: "Douala, Cameroon"
    },
    {
      company: "CAMTEL",
      position: "Fullstack Developer Intern",
      period: "Mar. 2020 – Jul. 2020",
      description: "Built a customer complaint platform using Java EE and Oracle DB, improving satisfaction by 36% and reducing resolution time by 17%.",
      location: "Yaoundé, Cameroon"
    }
  ],
  education: [
    {
      degree: "Master in Engineering Sciences, Computer Engineering",
      institution: "Protestant University of Central Africa",
      period: "Sept. 2020 – Aug. 2022",
      location: "Yaoundé, Cameroon",
      description: "Developed a Digital Patient Record coupled with ML-assisted diagnosis (Python, Laravel, MySQL)."
    }
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "July 2023",
      link: ""
    }
  ],
  skillCategories: [
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
  ],
  additionalSkills: [
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
  ],
  projects: [
    {
      title: "Digital Patient Record",
      description: "A comprehensive Electronic Medical Record system with machine learning integration for diagnostic assistance.",
      technologies: ["Python", "Laravel", "MySQL", "Machine Learning"],
      features: [
        "Secure patient data management and storage",
        "ML algorithms for preliminary diagnosis suggestions",
        "Analytics dashboard for healthcare metrics",
        "Role-based access control for medical staff",
        "Mobile-responsive interface for bedside use"
      ]
    },
    {
      title: "CFAO Learning Management System",
      description: "A modular Learning Management System for CFAO Mobility Academy with scalable architecture.",
      technologies: ["PHP", "JavaScript", "MongoDB", "UML"],
      features: [
        "Optimized MongoDB queries (80% faster loading)",
        "Modular administration system with phased deployment",
        "Customizable course creation tools",
        "Progress tracking and certification management",
        "Integration with HR systems"
      ]
    },
    {
      title: "CAMTEL Complaint Platform",
      description: "A customer complaint collection and tracking system that improved customer satisfaction by 36%.",
      technologies: ["Java EE", "Oracle DB", "JSP", "Servlets"],
      features: [
        "Reduced complaint resolution time by 17%",
        "Automated ticket routing and escalation",
        "Real-time status updates for customers",
        "Analytics dashboard for management",
        "Integration with existing CRM systems"
      ]
    },
    {
      title: "GMAO Maintenance System",
      description: "A comprehensive Computerized Maintenance Management System for asset tracking.",
      technologies: ["React.js", "TypeScript", "Node.js", "Express"],
      features: [
        "Equipment lifecycle management",
        "Preventive maintenance scheduling",
        "Work order generation and tracking",
        "Spare parts inventory management",
        "Maintenance KPI dashboards"
      ]
    },
    {
      title: "Intelligent Employee Matching",
      description: "An AI-powered platform matching new recruits with compatible team members.",
      technologies: ["React.js", "TypeScript", "Node.js", "Express"],
      features: [
        "Compatibility algorithm based on skills and experience",
        "Interactive visualization of potential matches",
        "Onboarding assistance and resource sharing",
        "Progress tracking for new employee integration",
        "Analytics for HR insights"
      ]
    }
  ],
  languages: [
    { language: "French", proficiency: "Native" },
    { language: "English", proficiency: "Intermediate" }
  ]
};
