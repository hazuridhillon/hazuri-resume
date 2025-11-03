import { Mail, Linkedin, MapPin } from "lucide-react";

export const Hero = () => {

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-24 md:py-32 lg:py-40 xl:py-48">
      <div className="relative z-10 text-center px-6 md:px-12 lg:px-16 max-w-5xl mx-auto">
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-10 md:mb-14 lg:mb-16 tracking-tight leading-none animate-fade-up"
          style={{ 
            fontWeight: 700,
            color: 'hsl(348, 54%, 47%)',
            textShadow: '0 2px 8px rgba(203, 67, 139, 0.12)',
            opacity: 0,
            animationDelay: '0.1s',
            animationFillMode: 'forwards',
          }}
        >
          HAZURI K.<br />DHILLON
        </h1>
        
        <p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-16 md:mb-20 lg:mb-24 font-semibold tracking-normal animate-fade-up max-w-4xl mx-auto px-2"
          style={{ 
            animationDelay: '0.3s', 
            opacity: 0, 
            animationFillMode: 'forwards', 
            color: 'hsl(306, 23%, 26%)',
            lineHeight: '1.8',
            fontStyle: 'italic',
            fontFamily: 'Fraunces, Georgia, serif',
          }}
        >
          Blending strategy, style, and technology to shape the next generation of ideas.
        </p>
        
        <div 
          className="flex flex-wrap items-center justify-center gap-6 md:gap-8 animate-fade-up" 
          style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <a 
            href="mailto:hazuridhillon@gmail.com"
            className="gradient-chip group"
          >
            <Mail size={16} className="relative z-10" />
            <span className="relative z-10">hazuridhillon@gmail.com</span>
          </a>
          
          <a 
            href="https://linkedin.com/in/hazuridhillon" 
            target="_blank" 
            rel="noopener noreferrer"
            className="gradient-chip group"
          >
            <Linkedin size={16} className="relative z-10" />
            <span className="relative z-10">LinkedIn</span>
          </a>
          
          <div className="gradient-chip">
            <MapPin size={16} className="relative z-10" />
            <span className="relative z-10 font-bold text-white">Boston · Bay Area · New York</span>
          </div>
        </div>
      </div>
    </section>
  );
};
