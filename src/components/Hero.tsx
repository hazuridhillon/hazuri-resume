import { Mail, Linkedin, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 
          className="text-7xl md:text-8xl lg:text-[10rem] font-black mb-8 tracking-tight animate-fade-up gradient-outline-text leading-none" 
          style={{ 
            animationDelay: '0.1s', 
            opacity: 0, 
            animationFillMode: 'forwards',
            fontWeight: 900,
            textShadow: '0 0 40px hsl(280 55% 80% / 0.25)',
          }}
        >
          HAZURI K.
          <br />
          DHILLON
        </h1>
        
        <p 
          className="text-2xl md:text-3xl lg:text-4xl mb-16 font-light tracking-wide animate-fade-up" 
          style={{ 
            animationDelay: '0.3s', 
            opacity: 0, 
            animationFillMode: 'forwards', 
            color: 'hsl(280, 20%, 55%)' 
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
            <span className="relative z-10 gradient-text font-bold">Boston · Bay Area · New York</span>
          </div>
        </div>
      </div>
    </section>
  );
};
