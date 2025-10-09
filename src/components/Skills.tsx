import { Sparkles, Flower } from "lucide-react";

const skills = [
  "Leadership & Strategy",
  "Intellectual Property",
  "Market Research",
  "Competitive Analysis",
  "AI Implementation",
  "Supply Chain",
  "E-commerce",
  "Brand Strategy",
  "Trend Forecasting",
];

const interests = [
  "Fashion & Beauty",
  "Yoga & Pilates",
  "Wellness",
  "Pop-culture",
  "Consumer AI",
  "Brand Activations",
];

export const Skills = () => {
  return (
    <section className="py-32 px-6 relative">
      {/* Decorative flower motifs */}
      <Flower 
        className="absolute top-32 left-[8%] text-primary opacity-[0.04] animate-drift-slow" 
        size={70} 
        fill="currentColor"
        style={{ filter: 'blur(18px)' }}
      />
      <Flower 
        className="absolute bottom-20 right-[12%] text-secondary opacity-[0.05] animate-drift" 
        size={65} 
        fill="currentColor"
        style={{ filter: 'blur(16px)' }}
      />
      
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <Sparkles size={40} className="text-primary" />
          <h2 className="text-5xl md:text-6xl font-bold">SKILLS & INTERESTS</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills */}
          <div className="animate-fade-up">
            <h3 className="text-3xl font-bold gradient-text mb-8">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="chip text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Interests */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            <h3 className="text-3xl font-bold text-secondary mb-8" style={{ color: 'hsl(340, 75%, 65%)' }}>Interests</h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest) => (
                <span 
                  key={interest}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 text-sm font-medium transition-all hover:scale-105"
                  style={{ 
                    borderColor: 'hsl(340, 75%, 75%)',
                    color: 'hsl(340, 75%, 50%)',
                  }}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Notable Achievement */}
        <div 
          className="mt-16 p-8 rounded-3xl animate-fade-up"
          style={{ 
            animationDelay: '0.4s', 
            opacity: 0, 
            animationFillMode: 'forwards',
            background: 'linear-gradient(135deg, hsl(270, 70%, 70%) 0%, hsl(280, 75%, 65%) 100%)',
          }}
        >
          <h4 className="text-2xl font-bold text-white mb-4">Notable Achievement</h4>
          <p className="text-lg text-white/95">
            Co-Founder of AAPI Silicon Valley - Organized youth-led advocacy events for 1,000+ attendees
          </p>
        </div>
      </div>
    </section>
  );
};
