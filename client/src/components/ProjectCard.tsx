import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  link?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  features,
  link
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  return (
    <motion.div 
      className="project-card"
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn(
        "project-card-inner",
        isHovered && "transform rotate-y-180"
      )}>
        <div className="project-card-front border border-[hsl(var(--matrix-green))]/30 bg-black/60 backdrop-blur-sm rounded-xl p-6 flex flex-col">
          <div className="h-40 rounded-lg bg-[hsl(var(--matrix-dark-green))]/40 mb-4 overflow-hidden">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }}></div>
          </div>
          <h3 className="text-xl font-mono text-[hsl(var(--matrix-green))] mb-2">{title}</h3>
          <p className="text-gray-300 mb-4 flex-grow">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-[hsl(var(--matrix-dark-green))] text-[hsl(var(--matrix-green))] text-xs px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="project-card-back border border-[hsl(var(--matrix-green))]/30 bg-black/80 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-xl font-mono text-[hsl(var(--matrix-green))] mb-4">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          
          <div className="mb-4">
            <h4 className="text-white font-medium mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-300">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          {/* Liens supprimés comme demandé */}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
