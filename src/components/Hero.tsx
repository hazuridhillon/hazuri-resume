import { Mail, Linkedin, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 
          className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight animate-fade-up outlined-text" 
          style={{ 
            animationDelay: '0.1s', 
            opacity: 0, 
            animationFillMode: 'forwards',
            WebkitTextStroke: '2px hsl(270, 70%, 60%)',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
          }}
        >
          HAZURI K.
          <br />
          DHILLON
        </h1>
        
        <p className="text-2xl md:text-3xl lg:text-4xl mb-12 font-light tracking-wide animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards', color: 'hsl(280, 15%, 50%)' }}>
          Tech Entrepreneur × Fashion Innovator × AI Strategist
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
          <a 
            href="mailto:hazuridhillon@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/95 backdrop-blur-sm text-foreground font-medium text-base transition-all hover:scale-105 hover:bg-white hover:shadow-lg"
          >
            <Mail size={20} />
            <span>hazuridhillon@gmail.com</span>
          </a>
          
          <a 
            href="https://linkedin.com/in/hazuri-dhillon" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/95 backdrop-blur-sm text-foreground font-medium text-base transition-all hover:scale-105 hover:bg-white hover:shadow-lg"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          
          <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/95 backdrop-blur-sm text-foreground font-medium text-base">
            <MapPin size={20} />
            <span>Boston, Bay Area, New York</span>
          </div>
        </div>
      </div>
    </section>
  );
};
