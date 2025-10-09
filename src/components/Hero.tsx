import { Mail, Linkedin, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

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
          className={`text-7xl md:text-8xl lg:text-[9rem] font-black mb-10 tracking-tight animate-fade-up leading-none transition-all duration-300 ${
            isScrolling ? 'gradient-outline-text' : ''
          }`}
          style={{ 
            animationDelay: '0.1s', 
            opacity: 0, 
            animationFillMode: 'forwards',
            fontWeight: 900,
            color: isScrolling ? undefined : 'hsl(280, 20%, 20%)',
            textShadow: isScrolling ? '0 0 40px hsl(0 70% 65% / 0.4)' : 'none',
          }}
        >
          HAZURI K.
          <br />
          DHILLON
        </h1>
        
        <p 
          className="text-xl md:text-2xl lg:text-3xl mb-16 font-medium tracking-wide animate-fade-up max-w-4xl mx-auto" 
          style={{ 
            animationDelay: '0.3s', 
            opacity: 0, 
            animationFillMode: 'forwards', 
            color: 'hsl(280, 30%, 35%)',
            lineHeight: '1.5',
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
            href="https://linkedin.com/in/hazuri-dhillon" 
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
