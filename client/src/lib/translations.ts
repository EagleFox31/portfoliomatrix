export type Language = 'fr' | 'en';

export type TranslationKey = 
  | 'about'
  | 'experience'
  | 'skills'
  | 'projects'
  | 'resume'
  | 'contact'
  | 'hero.greeting'
  | 'hero.name'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.description'
  | 'hero.cta'
  | 'hero.contact'
  | 'about.title'
  | 'about.description'
  | 'about.engineer'
  | 'about.developed'
  | 'about.looking'
  | 'experience.title'
  | 'experience.location'
  | 'skills.title'
  | 'skills.programming'
  | 'skills.frameworks'
  | 'skills.tools'
  | 'skills.languages'
  | 'projects.title'
  | 'projects.featured'
  | 'resume.title'
  | 'resume.download'
  | 'resume.education'
  | 'resume.experience'
  | 'resume.certifications'
  | 'contact.title'
  | 'contact.name'
  | 'contact.email'
  | 'contact.message'
  | 'contact.submit'
  | 'contact.success'
  | 'contact.error'
  | 'footer.copyright'
  | 'footer.rights';

export const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    'about': 'About',
    'experience': 'Experience',
    'skills': 'Skills',
    'projects': 'Projects',
    'resume': 'Resume',
    'contact': 'Contact',
    'hero.greeting': 'Hello, I am',
    'hero.name': 'Jennifer Lawrynn Aka\'a',
    'hero.title': 'Full-Stack Developer',
    'hero.subtitle': 'Specializing in modern web technologies',
    'hero.description': 'An engineer passionate about building scalable solutions, optimizing performance, and creating impactful user experiences.',
    'hero.cta': 'View My Work',
    'hero.contact': 'Contact Me',
    'about.title': 'About Me',
    'about.description': 'I am a passionate full-stack developer with expertise in building modern, scalable web applications. With a strong foundation in both frontend and backend technologies, I create seamless digital experiences that solve real-world problems.',
    'about.engineer': 'Fullstack Engineer with 2 years of experience specializing in Python, PHP, and JavaScript. AWS Certified Solutions Architect with expertise in designing and deploying scalable business solutions.',
    'about.developed': 'I\'ve developed Learning Management Systems, Computerized Maintenance Management Systems, and web platforms that prioritize performance, security, and user impact.',
    'about.looking': 'I\'m looking for challenging opportunities where I can innovate and contribute to digital transformation.',
    'experience.title': 'Work Experience',
    'experience.location': 'Location',
    'skills.title': 'My Skills',
    'skills.programming': 'Programming Languages',
    'skills.frameworks': 'Frameworks & Libraries',
    'skills.tools': 'Tools & Technologies',
    'skills.languages': 'Languages',
    'projects.title': 'My Projects',
    'projects.featured': 'Featured Projects',
    'resume.title': 'My Resume',
    'resume.download': 'Download CV',
    'resume.education': 'Education',
    'resume.experience': 'Professional Experience',
    'resume.certifications': 'Certifications',
    'contact.title': 'Get In Touch',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.submit': 'Send Message',
    'contact.success': 'Your message has been sent successfully!',
    'contact.error': 'There was an error sending your message. Please try again.',
    'footer.copyright': 'Copyright ©',
    'footer.rights': 'All rights reserved.'
  },
  fr: {
    'about': 'À Propos',
    'experience': 'Expérience',
    'skills': 'Compétences',
    'projects': 'Projets',
    'resume': 'CV',
    'contact': 'Contact',
    'hero.greeting': 'Bonjour, je suis',
    'hero.name': 'Jennifer Lawrynn Aka\'a',
    'hero.title': 'Développeuse Full-Stack',
    'hero.subtitle': 'Spécialisée en technologies web modernes',
    'hero.description': 'Une ingénieure passionnée par la création de solutions évolutives, l\'optimisation des performances et la conception d\'expériences utilisateur impactantes.',
    'hero.cta': 'Voir Mon Travail',
    'hero.contact': 'Me Contacter',
    'about.title': 'À Propos de Moi',
    'about.description': 'Je suis une développeuse full-stack passionnée avec une expertise dans la création d\'applications web modernes et évolutives. Avec une solide base en technologies frontend et backend, je crée des expériences numériques fluides qui résolvent des problèmes concrets.',
    'about.engineer': 'Ingénieure Full-Stack avec 2 ans d\'expérience spécialisée en Python, PHP et JavaScript. Solutions Architect certifiée AWS avec expertise dans la conception et le déploiement de solutions d\'entreprise évolutives.',
    'about.developed': 'J\'ai développé des Systèmes de Gestion d\'Apprentissage, des Systèmes GMAO, et des plateformes web qui privilégient la performance, la sécurité et l\'impact utilisateur.',
    'about.looking': 'Je recherche des opportunités stimulantes où je peux innover et contribuer à la transformation numérique.',
    'experience.title': 'Expérience Professionnelle',
    'experience.location': 'Lieu',
    'skills.title': 'Mes Compétences',
    'skills.programming': 'Langages de Programmation',
    'skills.frameworks': 'Frameworks & Bibliothèques',
    'skills.tools': 'Outils & Technologies',
    'skills.languages': 'Langues',
    'projects.title': 'Mes Projets',
    'projects.featured': 'Projets Phares',
    'resume.title': 'Mon CV',
    'resume.download': 'Télécharger CV',
    'resume.education': 'Formation',
    'resume.experience': 'Expérience Professionnelle',
    'resume.certifications': 'Certifications',
    'contact.title': 'Me Contacter',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.submit': 'Envoyer Message',
    'contact.success': 'Votre message a été envoyé avec succès !',
    'contact.error': 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer.',
    'footer.copyright': 'Copyright ©',
    'footer.rights': 'Tous droits réservés.'
  }
};

export const getTranslation = (language: Language, key: TranslationKey): string => {
  return translations[language][key] || key;
};