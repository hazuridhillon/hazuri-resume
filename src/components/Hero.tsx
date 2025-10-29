import { Mail, Linkedin, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  // Generate semi-random delays for letter animation (0-200ms base + variation)
  const generateLetterDelays = () => {
    const delays = [];
    for (let i = 0; i < 14; i++) { // 14 letters total in "HAZURIKDHILLON"
      const baseDelay = Math.random() * 200;
      const variation = (Math.random() - 0.5) * 100;
      delays.push(baseDelay + variation);
    }
    return delays;
  };

  const [letterDelays] = useState(() => generateLetterDelays());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      const timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
      
      setScrollTimeout(timeout);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 md:py-20">
      <div className="relative z-10 text-center px-4 md:px-6 max-w-6xl mx-auto">
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-black mb-8 md:mb-10 tracking-tight leading-none"
          style={{ 
            fontWeight: 900,
            color: 'hsl(348, 54%, 47%)',
            textShadow: '0 4px 12px rgba(203, 67, 139, 0.25), 0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <span className="inline-block">
            {['H','A','Z','U','R','I'].map((letter, i) => (
              <span 
                key={i}
                className="inline-block animate-letter-tumble"
                style={{
                  animationDelay: `${letterDelays[i]}ms`,
                  transformOrigin: 'center center',
                  willChange: 'transform, opacity',
                  filter: 'drop-shadow(0 10px 20px rgba(203, 67, 139, 0.2))',
                }}
              >
                {letter}
              </span>
            ))}
          </span>
          <span 
            className="inline-block animate-letter-tumble ml-2 md:ml-4"
            style={{
              animationDelay: `${letterDelays[6]}ms`,
              transformOrigin: 'center center',
              willChange: 'transform, opacity',
            }}
          >
            K.
          </span>
          <br />
          <span className="inline-block">
            {['D','H','I','L','L','O','N'].map((letter, i) => (
              <span 
                key={i}
                className="inline-block animate-letter-tumble"
                style={{
                  animationDelay: `${letterDelays[i + 7]}ms`,
                  transformOrigin: 'center center',
                  willChange: 'transform, opacity',
                  filter: 'drop-shadow(0 10px 20px rgba(203, 67, 139, 0.2))',
                }}
              >
                {letter}
              </span>
            ))}
          </span>
        </h1>
        
        <p 
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-12 md:mb-16 font-medium tracking-wide animate-fade-up max-w-5xl mx-auto px-2 whitespace-nowrap"
          style={{ 
            animationDelay: '0.3s', 
            opacity: 0, 
            animationFillMode: 'forwards', 
            color: 'hsl(306, 23%, 26%)',
            lineHeight: '1.5',
            fontStyle: 'italic',
            fontFamily: 'Fraunces, Georgia, serif',
          }}
        >
          Blending strategy, style, and technology to shape the next generation of ideas.
        </p>
        
        <div 
          className="flex flex-wrap items-center justify-center gap-5 animate-fade-up" 
          style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <a 
            href="mailto:hazuridhillon@gmail.com"
            className="gradient-chip group"
          >
            <Mail size={20} className="relative z-10" />
            <span className="relative z-10">hazuridhillon@gmail.com</span>
          </a>
          
          <a 
            href="https://linkedin.com/in/hazuridhillon" 
            target="_blank" 
            rel="noopener noreferrer"
            className="gradient-chip group"
          >
            <Linkedin size={20} className="relative z-10" />
            <span className="relative z-10">LinkedIn</span>
          </a>
          
          <div className="gradient-chip">
            <MapPin size={20} className="relative z-10" />
            <span className="relative z-10 font-bold text-white">Boston · Bay Area · New York</span>
          </div>
        </div>
      </div>
    </section>
  );
};
