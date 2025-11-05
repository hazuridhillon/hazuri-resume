import { useEffect, useRef, useState } from "react";
import { Circle, Flower2, Sparkles, Heart, Star, Moon } from "lucide-react";

// Define shape configuration for dense, whimsical border
const shapes = [
  // Row 1 - Dense distribution
  { Icon: Sparkles, left: "3%", size: 14, animation: "animate-float-slow", color: "hsl(332,58%,53%)", rotation: "animate-spin-slow" },
  { Icon: Heart, left: "7%", size: 12, animation: "animate-float-slower", color: "hsl(338,49%,78%)", rotation: "" },
  { Icon: Circle, left: "11%", size: 10, animation: "animate-float-slow", color: "hsl(348,54%,47%)", rotation: "" },
  { Icon: Flower2, left: "15%", size: 16, animation: "animate-float-slower", color: "hsl(332,58%,53%)", rotation: "animate-spin-slower" },
  { Icon: Star, left: "19%", size: 13, animation: "animate-float-slow", color: "hsl(338,49%,78%)", rotation: "animate-pulse-rotate" },
  { Icon: Moon, left: "23%", size: 14, animation: "animate-float-slower", color: "hsl(348,54%,47%)", rotation: "animate-spin-slow" },
  { Icon: Circle, left: "27%", size: 11, animation: "animate-float-slow", color: "hsl(332,58%,53%)", rotation: "" },
  { Icon: Sparkles, left: "31%", size: 15, animation: "animate-float-slower", color: "hsl(338,49%,78%)", rotation: "" },
  { Icon: Heart, left: "35%", size: 13, animation: "animate-float-slow", color: "hsl(348,54%,47%)", rotation: "animate-pulse-rotate" },
  { Icon: Star, left: "39%", size: 12, animation: "animate-float-slower", color: "hsl(332,58%,53%)", rotation: "" },
  { Icon: Flower2, left: "43%", size: 14, animation: "animate-float-slow", color: "hsl(338,49%,78%)", rotation: "animate-spin-slower" },
  { Icon: Moon, left: "47%", size: 13, animation: "animate-float-slower", color: "hsl(348,54%,47%)", rotation: "" },
  { Icon: Circle, left: "51%", size: 10, animation: "animate-float-slow", color: "hsl(332,58%,53%)", rotation: "" },
  { Icon: Sparkles, left: "55%", size: 14, animation: "animate-float-slower", color: "hsl(338,49%,78%)", rotation: "animate-pulse-rotate" },
  { Icon: Heart, left: "59%", size: 12, animation: "animate-float-slow", color: "hsl(348,54%,47%)", rotation: "" },
  { Icon: Star, left: "63%", size: 15, animation: "animate-float-slower", color: "hsl(332,58%,53%)", rotation: "animate-spin-slow" },
  { Icon: Flower2, left: "67%", size: 13, animation: "animate-float-slow", color: "hsl(338,49%,78%)", rotation: "" },
  { Icon: Circle, left: "71%", size: 11, animation: "animate-float-slower", color: "hsl(348,54%,47%)", rotation: "" },
  { Icon: Moon, left: "75%", size: 14, animation: "animate-float-slow", color: "hsl(332,58%,53%)", rotation: "animate-spin-slower" },
  { Icon: Sparkles, left: "79%", size: 13, animation: "animate-float-slower", color: "hsl(338,49%,78%)", rotation: "" },
  { Icon: Heart, left: "83%", size: 12, animation: "animate-float-slow", color: "hsl(348,54%,47%)", rotation: "animate-pulse-rotate" },
  { Icon: Star, left: "87%", size: 14, animation: "animate-float-slower", color: "hsl(332,58%,53%)", rotation: "" },
  { Icon: Flower2, left: "91%", size: 15, animation: "animate-float-slow", color: "hsl(338,49%,78%)", rotation: "animate-spin-slow" },
  { Icon: Circle, left: "95%", size: 10, animation: "animate-float-slower", color: "hsl(348,54%,47%)", rotation: "" },
];

export const SectionDivider = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dividerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (dividerRef.current) {
      observer.observe(dividerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={dividerRef}
      className={`relative py-16 md:py-20 lg:py-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Dense floating decorative shapes */}
      <div className="absolute inset-0 flex items-center justify-center max-w-3xl mx-auto">
        {shapes.map((shape, index) => {
          const ShapeIcon = shape.Icon;
          return (
            <ShapeIcon
              key={index}
              size={shape.size}
              className={`absolute opacity-25 ${shape.animation} ${shape.rotation}`}
              style={{ 
                left: shape.left,
                color: shape.color,
                animationDelay: `${index * 0.15}s`
              }}
              fill="currentColor"
            />
          );
        })}
      </div>
    </div>
  );
};
