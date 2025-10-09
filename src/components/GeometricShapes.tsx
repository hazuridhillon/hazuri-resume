import { Heart, Star, Flower } from "lucide-react";

interface ShapeProps {
  type: "heart" | "star" | "flower";
  className?: string;
  size?: number;
}

const Shape = ({ type, className = "", size = 48 }: ShapeProps) => {
  const Icon = type === "heart" ? Heart : type === "star" ? Star : Flower;
  
  return (
    <div className={`absolute opacity-[0.06] ${className}`} style={{ filter: 'blur(16px)' }}>
      <Icon size={size} className="text-primary" fill="currentColor" />
    </div>
  );
};

export const GeometricShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Hearts */}
      <Shape type="heart" className="top-[10%] left-[15%] animate-drift" size={56} />
      <Shape type="heart" className="top-[70%] right-[20%] animate-drift-slow" size={40} />
      <Shape type="heart" className="bottom-[15%] left-[25%] animate-drift" size={48} />
      
      {/* Stars */}
      <Shape type="star" className="top-[25%] right-[15%] animate-drift-slow" size={52} />
      <Shape type="star" className="top-[60%] left-[10%] animate-drift" size={44} />
      <Shape type="star" className="bottom-[30%] right-[25%] animate-drift-slow" size={50} />
      
      {/* Flowers */}
      <Shape type="flower" className="top-[45%] right-[10%] animate-drift" size={60} />
      <Shape type="flower" className="top-[80%] left-[40%] animate-drift-slow" size={48} />
      <Shape type="flower" className="bottom-[20%] right-[40%] animate-drift" size={54} />
    </div>
  );
};
