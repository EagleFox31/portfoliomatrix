import { useEffect, useRef, useState } from "react";
import { getRandomInterval } from "@/lib/utils";

const MatrixRain = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
    };
    
    // Initial dimensions
    updateDimensions();
    
    // Handle resize
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  
  const createRaindrops = () => {
    if (dimensions.width === 0) return [];
    
    const columns = Math.floor(dimensions.width / 20);
    const raindrops = [];
    
    for (let i = 0; i < columns; i++) {
      const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789フソアウエオキハマヤタレワル";
      const length = getRandomInterval(10, 30);
      const chars = [];
      
      for (let j = 0; j < length; j++) {
        chars.push(matrixChars.charAt(Math.floor(Math.random() * matrixChars.length)));
      }
      
      const style = {
        left: `${i * 20}px`,
        animationDuration: `${getRandomInterval(10, 20)}s`,
        animationDelay: `${getRandomInterval(0, 5000) / 1000}s`,
        top: `${-getRandomInterval(0, 100)}%`
      };
      
      raindrops.push(
        <div 
          key={`raindrop-${i}`} 
          className="matrix-rain animate-digital-rain"
          style={style}
        >
          {chars.join('')}
        </div>
      );
    }
    
    return raindrops;
  };
  
  return (
    <div 
      className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none"
      ref={containerRef}
    >
      {createRaindrops()}
    </div>
  );
};

export default MatrixRain;
