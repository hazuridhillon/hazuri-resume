import { Heart, Star, Flower } from "lucide-react";

interface ShapeProps {
  type: "heart" | "star" | "flower";
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

const Shape = ({ type, className = "", size = 48, style }: ShapeProps) => {
  const Icon = type === "heart" ? Heart : type === "star" ? Star : Flower;
  
  return (
    <div 
      className={`absolute opacity-[0.08] ${className}`} 
      style={{ 
        filter: 'blur(20px)',
        ...style 
      }}
    >
      <Icon 
        size={size} 
        fill="url(#gradient-shape)" 
        className="text-transparent"
        style={{
          stroke: 'url(#gradient-shape)',
          strokeWidth: 1
        }}
      />
    </div>
  );
};

export const GeometricShapes = () => {
  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="gradient-shape" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(270, 70%, 70%)" />
            <stop offset="50%" stopColor="hsl(340, 75%, 75%)" />
            <stop offset="100%" stopColor="hsl(280, 65%, 68%)" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Hearts - scattered throughout */}
        <Shape type="heart" className="top-[8%] left-[12%] animate-drift" size={60} />
        <Shape type="heart" className="top-[35%] right-[8%] animate-drift-slow" size={48} />
        <Shape type="heart" className="top-[65%] left-[18%] animate-drift" size={52} />
        <Shape type="heart" className="bottom-[15%] right-[15%] animate-drift-slow" size={56} />
        
        {/* Stars - scattered throughout */}
        <Shape type="star" className="top-[18%] right-[20%] animate-drift-slow" size={58} />
        <Shape type="star" className="top-[50%] left-[8%] animate-drift" size={50} />
        <Shape type="star" className="top-[75%] right-[25%] animate-drift-slow" size={54} />
        <Shape type="star" className="bottom-[25%] left-[25%] animate-drift" size={52} />
        
        {/* Flowers - scattered throughout */}
        <Shape type="flower" className="top-[12%] left-[35%] animate-drift" size={64} />
        <Shape type="flower" className="top-[42%] right-[12%] animate-drift-slow" size={56} />
        <Shape type="flower" className="top-[68%] left-[40%] animate-drift" size={60} />
        <Shape type="flower" className="bottom-[18%] right-[35%] animate-drift-slow" size={58} />
        
        {/* Additional layer for depth */}
        <Shape type="heart" className="top-[28%] left-[45%] animate-drift-slow" size={44} style={{ opacity: 0.05 }} />
        <Shape type="star" className="top-[55%] right-[40%] animate-drift" size={46} style={{ opacity: 0.06 }} />
        <Shape type="flower" className="top-[85%] left-[15%] animate-drift-slow" size={52} style={{ opacity: 0.05 }} />
      </div>
    </>
  );
};
