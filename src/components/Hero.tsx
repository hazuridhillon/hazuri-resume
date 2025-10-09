import { Mail, Linkedin, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background: 'linear-gradient(135deg, hsl(270, 70%, 75%) 0%, hsl(340, 75%, 80%) 50%, hsl(280, 65%, 70%) 100%)',
          backgroundSize: '200% 200%',
        }}
      />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
          <span className="gradient-text">HAZURI K.</span>
          <br />
          <span className="gradient-text">DHILLON</span>
        </h1>
        
        <p className="text-2xl md:text-3xl lg:text-4xl mb-12 font-light tracking-wide animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards', color: 'hsl(280, 20%, 35%)' }}>
          Tech Entrepreneur × Fashion Innovator × AI Strategist
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
          <div className="chip">
            <MapPin size={18} />
            <span>Boston · Bay Area · New York</span>
          </div>
          
          <a href="mailto:hazuridhillon@gmail.com" className="chip">
            <Mail size={18} />
            <span>Email</span>
          </a>
          
          <a 
            href="https://linkedin.com/in/hazuri-dhillon" 
            target="_blank" 
            rel="noopener noreferrer"
            className="chip"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};
