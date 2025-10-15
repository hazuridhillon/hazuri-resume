import { Heart, Star, Sparkles, Circle, Flower2, Hexagon } from "lucide-react";

interface ShapeProps {
  type: "heart" | "star" | "sparkles" | "circle" | "flower" | "hexagon";
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

const Shape = ({ type, className = "", size = 48, style }: ShapeProps) => {
  const icons = {
    heart: Heart,
    star: Star,
    sparkles: Sparkles,
    circle: Circle,
    flower: Flower2,
    hexagon: Hexagon,
  };

  const Icon = icons[type];

  return (
    <div className={`absolute ${className}`} style={style}>
      <Icon
        size={size}
        className="opacity-25 blur-[40px]"
        strokeWidth={1.5}
        fill="url(#vintage-gradient)"
        stroke="url(#vintage-gradient)"
      />
    </div>
  );
};

export const GeometricShapes = () => {
  return (
    <>
      {/* SVG gradient definition for vintage editorial colors */}
      <svg width="0" height="0" className="hidden">
        <defs>
          <linearGradient id="vintage-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(332, 58%, 53%)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(348, 54%, 47%)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="hsl(338, 49%, 78%)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Orchid Whisper shapes */}
        <Shape type="heart" size={180} className="top-[12%] left-[8%] animate-drift-slow" />
        <Shape type="star" size={120} className="top-[25%] right-[15%] animate-drift" />
        <Shape type="flower" size={160} className="top-[55%] left-[12%] animate-drift-slower" />
        <Shape type="sparkles" size={100} className="top-[70%] right-[20%] animate-drift-fast" />
        
        {/* Crimson Velvet accents */}
        <Shape type="circle" size={200} className="top-[40%] right-[10%] animate-drift-slow" />
        <Shape type="hexagon" size={140} className="top-[80%] left-[25%] animate-drift" />
        
        {/* Blush highlights */}
        <Shape type="heart" size={110} className="top-[15%] right-[35%] animate-drift-slower" />
        <Shape type="star" size={90} className="top-[45%] left-[40%] animate-drift-fast" />
        <Shape type="flower" size={130} className="top-[65%] right-[45%] animate-drift" />
        
        {/* Mossy Stone organic shapes */}
        <Shape type="circle" size={150} className="top-[8%] left-[50%] animate-drift-slow" 
          style={{ 
            filter: 'blur(40px)', 
            opacity: 0.2,
            fill: 'hsl(55, 24%, 35%)',
            stroke: 'hsl(55, 24%, 35%)' 
          }} 
        />
        <Shape type="hexagon" size={95} className="top-[88%] right-[12%] animate-drift-slower"
          style={{ 
            filter: 'blur(35px)', 
            opacity: 0.22,
            fill: 'hsl(55, 24%, 35%)',
            stroke: 'hsl(55, 24%, 35%)' 
          }} 
        />
        
        {/* Additional organic elements */}
        <Shape type="sparkles" size={75} className="top-[32%] left-[70%] animate-drift-fast" />
        <Shape type="flower" size={115} className="top-[50%] right-[60%] animate-drift" />
        <Shape type="heart" size={95} className="top-[75%] left-[65%] animate-drift-slow" />
      </div>
    </>
  );
};
