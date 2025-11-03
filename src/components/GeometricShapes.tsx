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
        className="opacity-10 blur-[80px]"
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
        {/* Minimal organic shapes - ultra subtle */}
        <Shape type="circle" size={200} className="top-[20%] left-[10%] animate-drift-minimal" />
        <Shape type="flower" size={180} className="top-[60%] right-[15%] animate-drift-minimal" />
        <Shape type="circle" size={160} className="top-[40%] right-[40%] animate-drift-minimal" />
        <Shape type="flower" size={150} className="top-[70%] left-[30%] animate-drift-minimal" />
        <Shape type="circle" size={140} className="top-[15%] right-[25%] animate-drift-minimal" />
        <Shape type="flower" size={120} className="top-[80%] right-[50%] animate-drift-minimal" />
      </div>
    </>
  );
};
