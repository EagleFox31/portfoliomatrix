import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SkillBarProps {
  skill: string;
  percentage: number;
  className?: string;
}

const SkillBar = ({ skill, percentage, className }: SkillBarProps) => {
  const [animated, setAnimated] = useState(false);
  const skillBarRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    if (skillBarRef.current) {
      observer.observe(skillBarRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div className={cn("space-y-1", className)} ref={skillBarRef}>
      <div className="flex justify-between mb-1">
        <span className="text-white">{skill}</span>
        <span className="text-[hsl(var(--matrix-green))] font-mono">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: animated ? `${percentage}%` : '0%' }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
