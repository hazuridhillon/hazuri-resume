import { Heart, Star, Flower, Circle } from "lucide-react";

interface ShapeProps {
  type: "heart" | "star" | "flower" | "circle";
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

const Shape = ({ type, className = "", size = 48, style }: ShapeProps) => {
  const Icon = type === "heart" ? Heart : type === "star" ? Star : type === "circle" ? Circle : Flower;
  
  return (
    <div 
      className={`absolute opacity-[0.08] ${className}`} 
      style={{ 
        filter: 'blur(24px)',
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
        {/* Top section - Hero area */}
        <Shape type="heart" className="top-[5%] left-[8%] animate-drift" size={64} />
        <Shape type="star" className="top-[12%] right-[15%] animate-drift-slow" size={58} />
        <Shape type="flower" className="top-[8%] left-[40%] animate-drift-slower" size={70} />
        <Shape type="circle" className="top-[15%] right-[35%] animate-drift-fast" size={52} />
        <Shape type="heart" className="top-[18%] left-[22%] animate-drift-slow" size={48} style={{ opacity: 0.06 }} />
        
        {/* Upper-middle section */}
        <Shape type="star" className="top-[25%] left-[12%] animate-drift-slower" size={56} />
        <Shape type="flower" className="top-[28%] right-[10%] animate-drift" size={62} />
        <Shape type="circle" className="top-[32%] left-[45%] animate-drift-fast" size={50} style={{ opacity: 0.07 }} />
        <Shape type="heart" className="top-[30%] right-[28%] animate-drift-slow" size={54} />
        
        {/* Middle section */}
        <Shape type="flower" className="top-[42%] left-[18%] animate-drift-fast" size={68} />
        <Shape type="star" className="top-[45%] right-[20%] animate-drift" size={60} />
        <Shape type="heart" className="top-[48%] left-[50%] animate-drift-slower" size={56} style={{ opacity: 0.09 }} />
        <Shape type="circle" className="top-[50%] right-[8%] animate-drift-slow" size={52} />
        <Shape type="flower" className="top-[52%] left-[8%] animate-drift" size={58} />
        
        {/* Lower-middle section */}
        <Shape type="star" className="top-[60%] right-[25%] animate-drift-slow" size={62} />
        <Shape type="heart" className="top-[62%] left-[25%] animate-drift-fast" size={54} />
        <Shape type="circle" className="top-[65%] right-[40%] animate-drift-slower" size={50} style={{ opacity: 0.08 }} />
        <Shape type="flower" className="top-[68%] left-[42%] animate-drift" size={64} />
        
        {/* Bottom section */}
        <Shape type="heart" className="top-[75%] right-[18%] animate-drift-slow" size={58} />
        <Shape type="star" className="top-[78%] left-[15%] animate-drift-slower" size={56} />
        <Shape type="circle" className="top-[80%] right-[32%] animate-drift-fast" size={52} />
        <Shape type="flower" className="top-[82%] left-[38%] animate-drift" size={60} style={{ opacity: 0.07 }} />
        <Shape type="heart" className="top-[85%] right-[12%] animate-drift-slow" size={54} />
        
        {/* Extra scattered shapes for natural look */}
        <Shape type="star" className="top-[35%] left-[30%] animate-drift-fast" size={46} style={{ opacity: 0.06 }} />
        <Shape type="circle" className="top-[55%] right-[15%] animate-drift" size={48} style={{ opacity: 0.06 }} />
        <Shape type="flower" className="top-[72%] left-[28%] animate-drift-slower" size={52} style={{ opacity: 0.07 }} />
        <Shape type="heart" className="top-[90%] left-[48%] animate-drift-slow" size={50} style={{ opacity: 0.08 }} />
      </div>
    </>
  );
};
