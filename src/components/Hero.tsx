import { Mail, Linkedin, MapPin } from "lucide-react";

export const Hero = () => {

  return (
    <section id="home" className="min-h-[100svh] flex items-center justify-center relative overflow-x-hidden pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40 xl:pt-64 xl:pb-48">
      <div className="relative z-10 text-center px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <h1 
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-black mb-8 md:mb-10 lg:mb-12 tracking-tight leading-none animate-fade-up"
          style={{ 
            fontWeight: 700,
            color: 'hsl(348, 54%, 47%)',
            textShadow: '0 2px 8px rgba(203, 67, 139, 0.12)',
            opacity: 0,
            animationDelay: '0.1s',
            animationFillMode: 'forwards',
          }}
        >
          HAZURI K. DHILLON
        </h1>
        
        <p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-12 md:mb-16 lg:mb-20 font-semibold tracking-normal animate-fade-up mx-auto max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl text-center"
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
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 animate-fade-up w-full" 
          style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <a 
            href="mailto:hazuridhillon@gmail.com"
            className="gradient-chip group w-full sm:w-auto justify-center max-w-[calc(100vw-3rem)]"
          >
            <Mail size={16} className="relative z-10 flex-shrink-0" />
            <span className="relative z-10 break-all text-center">hazuridhillon@gmail.com</span>
          </a>
          
          <a 
            href="https://linkedin.com/in/hazuridhillon" 
            target="_blank" 
            rel="noopener noreferrer"
            className="gradient-chip group w-full sm:w-auto justify-center max-w-[calc(100vw-3rem)]"
          >
            <Linkedin size={16} className="relative z-10 flex-shrink-0" />
            <span className="relative z-10">LinkedIn</span>
          </a>
          
          <div className="gradient-chip w-full sm:w-auto justify-center max-w-[calc(100vw-3rem)]">
            <MapPin size={16} className="relative z-10 flex-shrink-0" />
            <span className="relative z-10 font-bold text-white text-center">Boston · Bay Area · New York</span>
          </div>
        </div>
      </div>
    </section>
  );
};
