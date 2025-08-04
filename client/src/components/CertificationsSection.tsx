import { useLanguage } from '@/lib/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Award, Clock } from 'lucide-react';

interface Certification {
  id: string;
  title: string;
  titleFr: string;
  organization: string;
  date: string;
  dateFr: string;
  skills: string[];
  skillsFr: string[];
  link?: string;
  status: 'completed' | 'in-progress';
  logoUrl?: string;
}

const certifications: Certification[] = [
  {
    id: 'aws-solutions-architect',
    title: 'AWS Certified Solutions Architect — Associate',
    titleFr: 'AWS Certified Solutions Architect — Associate',
    organization: 'Amazon Web Services',
    date: 'July 2023',
    dateFr: 'Juillet 2023',
    skills: ['Cloud Architecture', 'High Availability', 'Cost Optimization'],
    skillsFr: ['Architecture Cloud', 'Haute Disponibilité', 'Optimisation des Coûts'],
    link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
    status: 'completed'
  },
  {
    id: 'google-cybersecurity',
    title: 'Foundations of Cybersecurity',
    titleFr: 'Fondements de la Cybersécurité',
    organization: 'Google',
    date: 'May 2025',
    dateFr: 'Mai 2025',
    skills: ['Risk Management', 'Security Controls', 'Data Ethics'],
    skillsFr: ['Gestion des Risques', 'Contrôles de Sécurité', 'Éthique des Données'],
    link: 'https://www.coursera.org/account/accomplishments/verify/YI76AYVEU18O',
    status: 'completed'
  },
  {
    id: 'soc-operations',
    title: 'Security Operations Center (SOC)',
    titleFr: 'Centre d\'Opérations de Sécurité (SOC)',
    organization: 'Coursera',
    date: 'August 2024',
    dateFr: 'Août 2024',
    skills: ['SOC Operations', 'SIEM', 'Detection & Response'],
    skillsFr: ['Opérations SOC', 'SIEM', 'Détection et Réponse'],
    link: 'https://www.coursera.org/account/accomplishments/verify/MCLMOZ1TA3K2',
    status: 'completed'
  },
  {
    id: 'kaggle-python',
    title: 'Python Certificate of Completion',
    titleFr: 'Certificat Python',
    organization: 'Kaggle',
    date: 'June 2023',
    dateFr: 'Juin 2023',
    skills: ['Python Scripts', 'Pandas', 'NumPy', 'Data Preparation'],
    skillsFr: ['Scripts Python', 'Pandas', 'NumPy', 'Préparation de Données'],
    link: 'https://www.kaggle.com/learn/certification/jenniferlawrynn/python',
    status: 'completed'
  },
  {
    id: 'kaggle-dataviz',
    title: 'Data Visualization Certificate',
    titleFr: 'Certificat de Visualisation de Données',
    organization: 'Kaggle',
    date: 'June 2023',
    dateFr: 'Juin 2023',
    skills: ['Matplotlib', 'Seaborn', 'Data Storytelling'],
    skillsFr: ['Matplotlib', 'Seaborn', 'Storytelling Graphique'],
    link: 'https://www.kaggle.com/learn/certification/jenniferlawrynn/data-visualization',
    status: 'completed'
  },
  {
    id: 'hackerrank-sql',
    title: 'SQL Advanced',
    titleFr: 'SQL Avancé',
    organization: 'HackerRank',
    date: 'July 2023',
    dateFr: 'Juillet 2023',
    skills: ['Complex Queries', 'Joins', 'Window Functions', 'Optimization'],
    skillsFr: ['Requêtes Complexes', 'Jointures', 'Fonctions Fenêtres', 'Optimisation'],
    link: 'https://www.hackerrank.com/certificates/2e3ac70af727',
    status: 'completed'
  },
  {
    id: 'energy-transition',
    title: 'Become a Player in the Energy Transition',
    titleFr: 'Devenir un Acteur de la Transition Énergétique',
    organization: 'ITC SME Trade Academy',
    date: 'June 2023',
    dateFr: 'Juin 2023',
    skills: ['Climate Issues', 'Green Finance', 'Renewable Energy Markets'],
    skillsFr: ['Enjeux Climatiques', 'Finance Verte', 'Marchés Énergies Renouvelables'],
    link: 'https://learning.intracen.org/verify/?q=1OJFME6JH2',
    status: 'completed'
  },
  {
    id: 'ibm-project-manager',
    title: 'IBM IT Project Manager Professional Certificate',
    titleFr: 'Certificat Professionnel IBM IT Project Manager',
    organization: 'IBM / Coursera',
    date: '2025',
    dateFr: '2025',
    skills: ['Project Management', 'Agile Methodologies', 'Risk Management'],
    skillsFr: ['Gestion de Projet', 'Méthodologies Agiles', 'Gestion des Risques'],
    status: 'in-progress'
  }
];

export default function CertificationsSection() {
  const { language } = useLanguage();

  return (
    <section id="certifications" className="py-20 px-6 bg-black relative overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="matrix-rain"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-mono text-[hsl(var(--matrix-green))] mb-4 tracking-wider">
            {language === 'fr' ? '> CERTIFICATIONS_' : '> CERTIFICATIONS_'}
          </h2>
          <div className="w-24 h-1 bg-[hsl(var(--matrix-green))] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg font-mono">
            {language === 'fr' 
              ? 'Compétences validées par l\'industrie, mises à jour en continu' 
              : 'Industry-validated skills, continuously updated'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card 
              key={cert.id}
              className="group border border-[hsl(var(--matrix-green))]/30 bg-black/60 backdrop-blur-sm rounded-lg p-6 shadow-lg shadow-[hsl(var(--matrix-green))]/10 hover:shadow-[hsl(var(--matrix-green))]/20 hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden"
              onClick={() => cert.link && window.open(cert.link, '_blank', 'noopener,noreferrer')}
            >
              {/* Status indicator */}
              <div className="absolute top-4 right-4">
                {cert.status === 'completed' ? (
                  <Award className="w-5 h-5 text-[hsl(var(--matrix-green))]" />
                ) : (
                  <Clock className="w-5 h-5 text-gray-400" />
                )}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-mono text-white mb-2 pr-8 leading-tight">
                    {language === 'fr' ? cert.titleFr : cert.title}
                  </h3>
                  <p className="text-[hsl(var(--matrix-green))] text-sm font-medium">
                    {cert.organization}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {language === 'fr' ? cert.dateFr : cert.date}
                  </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {(language === 'fr' ? cert.skillsFr : cert.skills).slice(0, 3).map((skill, index) => (
                    <Badge 
                      key={index}
                      variant="outline"
                      className="text-xs border-[hsl(var(--matrix-green))]/50 text-[hsl(var(--matrix-green))] bg-transparent"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Link indicator */}
                {cert.link && cert.status === 'completed' && (
                  <div className="flex items-center text-gray-400 text-sm group-hover:text-[hsl(var(--matrix-green))] transition-colors">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {language === 'fr' ? 'Voir le badge' : 'View badge'}
                  </div>
                )}

                {cert.status === 'in-progress' && (
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {language === 'fr' ? 'En cours' : 'In progress'}
                  </div>
                )}
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--matrix-green))]/5 to-[hsl(var(--matrix-teal))]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm font-mono">
            {language === 'fr' 
              ? 'Mise à jour trimestrielle • Liens de vérification officiels' 
              : 'Quarterly updates • Official verification links'
            }
          </p>
        </div>
      </div>
    </section>
  );
}