import { useLanguage } from '@/lib/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award, Clock, Download, Eye, Globe } from 'lucide-react';
import { useState } from 'react';

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
  certificateFile?: string;
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
    skills: ['AWS', 'Infrastructure cloud', 'Amazon Web Services', 'Amazon S3', 'Amazon Elastic Compute Cloud', 'Architecture cloud-native', 'Cloud security', 'Cloud data'],
    skillsFr: ['AWS', 'Infrastructure cloud', 'Amazon Web Services', 'Amazon S3', 'Amazon Elastic Compute Cloud', 'Architecture cloud-native', 'Sécurité cloud', 'Données cloud'],
    link: 'https://www.credly.com/badges/e6af30ab-2ca1-4f71-8c0e-c528913bd948/linked_in_profile',
    certificateFile: '/certificates/aws-solutions-architect.pdf',
    status: 'completed'
  },
  {
    id: 'google-cybersecurity',
    title: 'Foundations of Cybersecurity',
    titleFr: 'Fondements de la Cybersécurité',
    organization: 'Google',
    date: 'May 2025',
    dateFr: 'Mai 2025',
    skills: ['Security Management', 'Cyber Attacks', 'Data Ethics', 'Network Security', 'Data Security', 'Security Information and Event Management (SIEM)', 'Threat Detection', 'Enterprise Security', 'Cybersecurity', 'Incident Response', 'Information Privacy', 'Computer Security'],
    skillsFr: ['Gestion de la Sécurité', 'Cyberattaques', 'Éthique des Données', 'Sécurité Réseau', 'Sécurité des Données', 'Gestion des Informations et Événements de Sécurité (SIEM)', 'Détection de Menaces', 'Sécurité d\'Entreprise', 'Cybersécurité', 'Réponse aux Incidents', 'Confidentialité des Informations', 'Sécurité Informatique'],
    link: 'https://www.coursera.org/account/accomplishments/verify/YI76AYVEU18O',
    certificateFile: '/certificates/google-cybersecurity.pdf',
    status: 'completed'
  },
  {
    id: 'soc-operations',
    title: 'Security Operations Center (SOC)',
    titleFr: 'Centre d\'Opérations de Sécurité (SOC)',
    organization: 'Cisco Learning',
    date: 'August 2024',
    dateFr: 'Août 2024',
    skills: ['Cyber Threat Intelligence', 'Network Monitoring', 'Automation', 'Security Information and Event Management (SIEM)', 'Threat Detection', 'System Monitoring', 'Cyber Operations', 'Cybersecurity', 'Computer Security Incident Management', 'Incident Response'],
    skillsFr: ['Intelligence des Menaces Cyber', 'Surveillance Réseau', 'Automatisation', 'Gestion des Informations et Événements de Sécurité (SIEM)', 'Détection de Menaces', 'Surveillance Système', 'Opérations Cyber', 'Cybersécurité', 'Gestion des Incidents de Sécurité Informatique', 'Réponse aux Incidents'],
    link: 'https://www.coursera.org/account/accomplishments/verify/MCLMOZ1TA3K2',
    certificateFile: '/certificates/soc-operations.pdf',
    status: 'completed'
  },
  {
    id: 'kaggle-python',
    title: 'Python Certificate of Completion',
    titleFr: 'Certificat Python',
    organization: 'Kaggle',
    date: 'June 8, 2023',
    dateFr: '8 Juin 2023',
    skills: ['Python Scripts', 'Pandas', 'NumPy', 'Data Preparation'],
    skillsFr: ['Scripts Python', 'Pandas', 'NumPy', 'Préparation de Données'],
    link: 'https://www.kaggle.com/learn/certification/jenniferlawrynn/python',
    certificateFile: '/certificates/kaggle-python.png',
    status: 'completed'
  },
  {
    id: 'kaggle-dataviz',
    title: 'Data Visualization Certificate',
    titleFr: 'Certificat de Visualisation de Données',
    organization: 'Kaggle',
    date: 'June 12, 2023',
    dateFr: '12 Juin 2023',
    skills: ['Matplotlib', 'Seaborn', 'Data Storytelling'],
    skillsFr: ['Matplotlib', 'Seaborn', 'Storytelling Graphique'],
    link: 'https://www.kaggle.com/learn/certification/jenniferlawrynn/data-visualization',
    certificateFile: '/certificates/kaggle-dataviz.png',
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
    date: 'June 25, 2023',
    dateFr: '25 Juin 2023',
    skills: ['Climate Issues', 'Green Finance', 'Renewable Energy Markets'],
    skillsFr: ['Enjeux Climatiques', 'Finance Verte', 'Marchés Énergies Renouvelables'],
    link: 'https://learning.intracen.org/verify/?q=1OJFME6JH2',
    certificateFile: '/certificates/energy-transition.png',
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
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleDownload = (certificateFile: string, title: string) => {
    const filename = certificateFile.split('/').pop(); // Extract filename from path
    const downloadUrl = `/api/certificates/download/${filename}`;
    
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `Jennifer_Lawrynn_${filename}`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              className="group border border-[hsl(var(--matrix-green))]/30 bg-black/60 backdrop-blur-sm rounded-lg p-6 shadow-lg shadow-[hsl(var(--matrix-green))]/10 hover:shadow-[hsl(var(--matrix-green))]/30 hover:shadow-2xl hover:scale-[1.02] hover:border-[hsl(var(--matrix-green))]/60 transition-all duration-500 ease-out relative overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredCard(cert.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated glow effect on hover */}
              <div className={`absolute inset-0 rounded-lg transition-opacity duration-500 ${
                hoveredCard === cert.id 
                  ? 'opacity-100 bg-gradient-to-br from-[hsl(var(--matrix-green))]/10 via-transparent to-[hsl(var(--matrix-green))]/5' 
                  : 'opacity-0'
              }`}></div>
              
              {/* Matrix code rain effect on hover */}
              <div className={`absolute inset-0 rounded-lg transition-opacity duration-700 overflow-hidden ${
                hoveredCard === cert.id ? 'opacity-20' : 'opacity-0'
              }`}>
                <div className="matrix-rain-card"></div>
              </div>

              {/* Certification Link Preview Overlay */}
              {hoveredCard === cert.id && cert.link && (
                <div className="absolute top-2 left-2 right-2 bg-black/90 backdrop-blur-sm border border-[hsl(var(--matrix-green))]/50 rounded-md p-3 z-20 transform animate-in slide-in-from-top-2 duration-300">
                  <div className="flex items-center gap-2 text-xs">
                    <Globe className="w-3 h-3 text-[hsl(var(--matrix-green))]" />
                    <span className="text-[hsl(var(--matrix-green))] font-mono">
                      {language === 'fr' ? 'Lien de vérification:' : 'Verification link:'}
                    </span>
                  </div>
                  <div className="text-xs text-gray-300 font-mono mt-1 truncate">
                    {cert.link}
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    <Eye className="w-3 h-3 text-[hsl(var(--matrix-green))]" />
                    <span className="text-xs text-[hsl(var(--matrix-green))]">
                      {language === 'fr' ? 'Cliquez pour voir le badge officiel' : 'Click to view official badge'}
                    </span>
                  </div>
                </div>
              )}

              {/* Status indicator */}
              <div className="absolute top-4 right-4 z-10">
                {cert.status === 'completed' ? (
                  <Award className={`w-5 h-5 transition-all duration-300 ${
                    hoveredCard === cert.id 
                      ? 'text-[hsl(var(--matrix-green))] scale-110 drop-shadow-lg' 
                      : 'text-[hsl(var(--matrix-green))]'
                  }`} />
                ) : (
                  <Clock className="w-5 h-5 text-gray-400" />
                )}
              </div>

              {/* Content */}
              <div className="space-y-4 relative z-10">
                <div>
                  <h3 className={`text-lg font-mono text-white mb-2 pr-8 leading-tight transition-all duration-300 ${
                    hoveredCard === cert.id ? 'text-[hsl(var(--matrix-green))] scale-[1.02]' : ''
                  }`}>
                    {language === 'fr' ? cert.titleFr : cert.title}
                  </h3>
                  <p className={`text-[hsl(var(--matrix-green))] text-sm font-medium transition-all duration-300 ${
                    hoveredCard === cert.id ? 'text-[hsl(var(--matrix-green))] brightness-125' : ''
                  }`}>
                    {cert.organization}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {language === 'fr' ? cert.dateFr : cert.date}
                  </p>
                </div>

                {/* Animated Skills */}
                <div className="flex flex-wrap gap-2">
                  {(language === 'fr' ? cert.skillsFr : cert.skills).slice(0, 6).map((skill, index) => (
                    <Badge 
                      key={index}
                      variant="outline"
                      className={`text-xs border-[hsl(var(--matrix-green))]/50 text-[hsl(var(--matrix-green))] bg-transparent transition-all duration-300 ${
                        hoveredCard === cert.id 
                          ? 'border-[hsl(var(--matrix-green))] bg-[hsl(var(--matrix-green))]/10 scale-105 shadow-sm' 
                          : 'hover:border-[hsl(var(--matrix-green))]/70'
                      }`}
                      style={{
                        animationDelay: hoveredCard === cert.id ? `${index * 100}ms` : '0ms'
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                {cert.status === 'completed' && (
                  <div className="flex flex-col gap-2 mt-4">
                    {cert.link && (
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(cert.link, '_blank', 'noopener,noreferrer');
                        }}
                        className={`bg-[hsl(var(--matrix-green))]/10 text-[hsl(var(--matrix-green))] border border-[hsl(var(--matrix-green))]/30 hover:bg-[hsl(var(--matrix-green))]/20 hover:scale-105 h-8 text-xs font-mono transition-all duration-300 ${
                          hoveredCard === cert.id ? 'shadow-lg shadow-[hsl(var(--matrix-green))]/20 border-[hsl(var(--matrix-green))]/60' : ''
                        }`}
                        variant="outline"
                      >
                        <ExternalLink className={`w-3 h-3 mr-2 transition-all duration-300 ${
                          hoveredCard === cert.id ? 'scale-110' : ''
                        }`} />
                        {language === 'fr' ? 'Voir le badge' : 'View badge'}
                      </Button>
                    )}
                    {cert.certificateFile && (
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownload(cert.certificateFile!, language === 'fr' ? cert.titleFr : cert.title);
                        }}
                        className={`bg-[hsl(var(--matrix-teal))]/10 text-[hsl(var(--matrix-teal))] border border-[hsl(var(--matrix-teal))]/30 hover:bg-[hsl(var(--matrix-teal))]/20 hover:scale-105 h-8 text-xs font-mono transition-all duration-300 ${
                          hoveredCard === cert.id ? 'border-[hsl(var(--matrix-teal))]/60 shadow-md shadow-[hsl(var(--matrix-teal))]/20' : ''
                        }`}
                        variant="outline"
                      >
                        <Download className={`w-3 h-3 mr-2 transition-all duration-300 ${
                          hoveredCard === cert.id ? 'scale-110 animate-bounce' : ''
                        }`} />
                        {language === 'fr' ? 'Télécharger' : 'Download'}
                      </Button>
                    )}
                  </div>
                )}

                {cert.status === 'in-progress' && (
                  <div className="flex items-center text-gray-500 text-sm mt-4">
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