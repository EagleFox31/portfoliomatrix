// Types pour les projets
export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  link?: string;
}

// Projets en français
export const projectsFr: Project[] = [
  {
    title: "Dossier Médical Numérique",
    description: "Un système complet de dossiers médicaux électroniques avec intégration d'intelligence artificielle pour l'aide au diagnostic.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "Laravel", "MySQL", "Machine Learning"],
    features: [
      "Gestion et stockage sécurisés des données patients",
      "Algorithmes IA pour suggestions de diagnostic préliminaire",
      "Tableau de bord analytique pour les métriques de santé",
      "Contrôle d'accès basé sur les rôles pour le personnel médical",
      "Interface responsive pour utilisation au chevet du patient"
    ],
    link: "#"
  },
  {
    title: "Système LMS CFAO",
    description: "Un système modulaire de gestion d'apprentissage pour CFAO Mobility Academy avec une architecture évolutive.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["PHP", "JavaScript", "MongoDB", "UML"],
    features: [
      "Requêtes MongoDB optimisées (chargement 80% plus rapide)",
      "Système d'administration modulaire avec déploiement par phases",
      "Outils personnalisables de création de cours",
      "Suivi de progression et gestion des certifications",
      "Intégration avec les systèmes RH"
    ],
    link: "#"
  },
  {
    title: "Plateforme de Réclamations CAMTEL",
    description: "Un système de collecte et de suivi des réclamations clients qui a amélioré la satisfaction client de 36%.",
    image: "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Java EE", "Oracle DB", "JSP", "Servlets"],
    features: [
      "Réduction du temps de résolution des réclamations de 17%",
      "Routage et escalade automatisés des tickets",
      "Mises à jour en temps réel pour les clients",
      "Tableau de bord analytique pour la direction",
      "Intégration avec les systèmes CRM existants"
    ],
    link: "#"
  },
  {
    title: "Système GMAO",
    description: "Un système complet de gestion de maintenance assistée par ordinateur pour le suivi des actifs.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React.js", "TypeScript", "Node.js", "Express"],
    features: [
      "Gestion du cycle de vie des équipements",
      "Planification de maintenance préventive",
      "Génération et suivi des ordres de travail",
      "Gestion des stocks de pièces détachées",
      "Tableaux de bord des KPI de maintenance"
    ],
    link: "#"
  },
  {
    title: "Matching Intelligent d'Employés",
    description: "Une plateforme assistée par IA qui associe les nouvelles recrues à des membres d'équipe compatibles.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React.js", "TypeScript", "Node.js", "Express"],
    features: [
      "Algorithme de compatibilité basé sur les compétences et l'expérience",
      "Visualisation interactive des correspondances potentielles",
      "Assistance à l'intégration et partage de ressources",
      "Suivi de la progression pour l'intégration des nouveaux employés",
      "Analyses pour les insights RH"
    ],
    link: "#"
  }
];

// Projets en anglais
export const projectsEn: Project[] = [
  {
    title: "Digital Patient Record",
    description: "A comprehensive Electronic Medical Record system with machine learning integration for diagnostic assistance.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "Laravel", "MySQL", "Machine Learning"],
    features: [
      "Secure patient data management and storage",
      "ML algorithms for preliminary diagnosis suggestions",
      "Analytics dashboard for healthcare metrics",
      "Role-based access control for medical staff",
      "Mobile-responsive interface for bedside use"
    ],
    link: "#"
  },
  {
    title: "CFAO Learning Management System",
    description: "A modular Learning Management System for CFAO Mobility Academy with scalable architecture.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["PHP", "JavaScript", "MongoDB", "UML"],
    features: [
      "Optimized MongoDB queries (80% faster loading)",
      "Modular administration system with phased deployment",
      "Customizable course creation tools",
      "Progress tracking and certification management",
      "Integration with HR systems"
    ],
    link: "#"
  },
  {
    title: "CAMTEL Complaint Platform",
    description: "A customer complaint collection and tracking system that improved customer satisfaction by 36%.",
    image: "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Java EE", "Oracle DB", "JSP", "Servlets"],
    features: [
      "Reduced complaint resolution time by 17%",
      "Automated ticket routing and escalation",
      "Real-time status updates for customers",
      "Analytics dashboard for management",
      "Integration with existing CRM systems"
    ],
    link: "#"
  },
  {
    title: "CMMS Maintenance System",
    description: "A comprehensive Computerized Maintenance Management System for asset tracking.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React.js", "TypeScript", "Node.js", "Express"],
    features: [
      "Equipment lifecycle management",
      "Preventive maintenance scheduling",
      "Work order generation and tracking",
      "Spare parts inventory management",
      "Maintenance KPI dashboards"
    ],
    link: "#"
  },
  {
    title: "Intelligent Employee Matching",
    description: "An AI-powered platform matching new recruits with compatible team members.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React.js", "TypeScript", "Node.js", "Express"],
    features: [
      "Compatibility algorithm based on skills and experience",
      "Interactive visualization of potential matches",
      "Onboarding assistance and resource sharing",
      "Progress tracking for new employee integration",
      "Analytics for HR insights"
    ],
    link: "#"
  }
];