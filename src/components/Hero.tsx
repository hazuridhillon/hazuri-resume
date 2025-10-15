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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 
          className={`text-7xl md:text-8xl lg:text-[9rem] font-black mb-10 tracking-tight leading-none transition-all duration-300 ${
            isScrolling ? 'gradient-outline-text' : ''
          }`}
          style={{ 
            fontWeight: 900,
            color: isScrolling ? undefined : 'hsl(348, 54%, 47%)',
            textShadow: isScrolling ? '0 0 40px hsl(332 58% 53% / 0.4)' : 'none',
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
            className="inline-block animate-letter-tumble ml-4"
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
          className="text-xl md:text-2xl lg:text-3xl mb-16 font-medium tracking-wide animate-fade-up max-w-4xl mx-auto" 
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
          Tech Entrepreneur × Fashion Innovator × AI Strategist
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
