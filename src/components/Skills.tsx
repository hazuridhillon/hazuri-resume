import { Award } from "lucide-react";

const skills = [
  "Leadership & Strategy",
  "Intellectual Property Registration",
  "Market/User Research",
  "Competitive Analysis",
  "AI Implementation",
  "Supply Chain",
  "E-commerce",
  "Brand Strategy",
  "Trend Forecasting",
];

const interests = [
  "Fashion & Beauty",
  "Yoga, Pilates, Wellness",
  "Pop-culture",
  "Consumer AI",
  "Brand Strategy & Activations",
];

export const Skills = () => {
  return (
    <section className="py-32 px-6 relative mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-20 animate-fade-up">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, hsl(270, 55%, 75%), hsl(280, 55%, 78%))' }}>
            <Award size={36} className="text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold section-header">
            SKILLS & INTERESTS
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column: Skills Only */}
          <div>
            {/* Skills */}
            <div className="animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
              <h3 className="text-4xl md:text-5xl font-bold mb-10 gradient-text">
                Skills
              </h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="gradient-chip text-base"
                  >
                    <span className="relative z-10">{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column: Interests, then Certifications & Notable Achievement side by side */}
          <div className="space-y-10">
            {/* Interests */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
              <h3 className="text-4xl md:text-5xl font-bold mb-10" style={{ color: 'hsl(340, 75%, 60%)', fontFamily: 'Playfair Display, serif' }}>
                Interests
              </h3>
              <div className="flex flex-wrap gap-4 mb-8">
                {interests.map((interest) => (
                  <span 
                    key={interest}
                    className="inline-flex items-center px-6 py-3.5 rounded-full border-2 font-semibold text-base transition-all hover:scale-105"
                    style={{ 
                      borderColor: 'hsl(340, 75%, 70%)',
                      color: 'hsl(340, 75%, 50%)',
                    }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Certifications & Notable Achievement - Side by Side */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Certifications */}
              <div className="gradient-card animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
                <h4 className="text-2xl md:text-3xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif', color: 'hsl(340, 75%, 60%)' }}>
                  Certifications
                </h4>
                <ul className="space-y-3.5">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-xl mt-1 flex-shrink-0 font-bold">•</span>
                    <p className="text-base font-medium text-foreground leading-relaxed">Responsible Business Alliance trained</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-xl mt-1 flex-shrink-0 font-bold">•</span>
                    <p className="text-base font-medium text-foreground leading-relaxed">Certified Stott Pilates Instructor</p>
                  </li>
                </ul>
              </div>
              
              {/* Notable Achievement */}
              <div 
                className="p-7 rounded-3xl animate-fade-up"
                style={{ 
                  animationDelay: '0.4s', 
                  opacity: 0, 
                  animationFillMode: 'forwards',
                  background: 'linear-gradient(135deg, hsl(270, 55%, 78%) 0%, hsl(280, 55%, 75%) 100%)',
                  boxShadow: '0 12px 40px -10px hsl(280 50% 70% / 0.4)',
                }}
              >
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Notable Achievement
                </h4>
                <p className="text-base font-medium text-white/95 leading-relaxed">
                  Co-Founder of AAPI Silicon Valley - Organized youth-led advocacy events for 1,000+ attendees
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
