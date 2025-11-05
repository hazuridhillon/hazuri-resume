import { useEffect, useRef, useState } from "react";
import { Circle, Flower2, Sparkles } from "lucide-react";

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
      {/* Animated gradient line */}
      <div className="relative h-px max-w-3xl mx-auto overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(332,58%,53%)] to-transparent opacity-30 animate-pulse-subtle" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(338,49%,78%)] to-transparent animate-shimmer" />
      </div>

      {/* Floating decorative shapes */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Circle 
          size={12} 
          className="absolute left-[20%] text-[hsl(332,58%,53%)] opacity-20 animate-float-slow"
          fill="currentColor"
        />
        <Flower2 
          size={16} 
          className="absolute left-[45%] text-[hsl(338,49%,78%)] opacity-25 animate-float-slower"
          fill="currentColor"
        />
        <Sparkles 
          size={14} 
          className="absolute right-[25%] text-[hsl(348,54%,47%)] opacity-20 animate-float-slow"
          fill="currentColor"
        />
      </div>
    </div>
  );
};
