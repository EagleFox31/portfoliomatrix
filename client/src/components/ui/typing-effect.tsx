import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TypingEffectProps {
  text: string;
  typingSpeed?: number;
  className?: string;
}

const TypingEffect = ({
  text,
  typingSpeed = 100,
  className
}: TypingEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const prevTextRef = useRef(text);

  // Réinitialise l'animation quand le texte change (ex: changement de langue)
  useEffect(() => {
    if (prevTextRef.current !== text) {
      setDisplayText('');
      setCurrentIndex(0);
      setIsComplete(false);
      prevTextRef.current = text;
    }
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, typingSpeed]);

  return (
    <div 
      className={cn(
        "inline-block overflow-hidden whitespace-nowrap",
        !isComplete && "border-r-2 border-[hsl(var(--matrix-green))]",
        isComplete && "typing-animation-complete",
        className
      )}
    >
      {displayText}
    </div>
  );
};

export default TypingEffect;
