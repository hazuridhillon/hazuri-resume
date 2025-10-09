import { Award } from "lucide-react";

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
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'hsl(250, 75%, 65%)' }}>
            <Award size={32} className="text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: 'hsl(0, 0%, 15%)' }}>
            SKILLS & INTERESTS
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Skills Only */}
          <div>
            {/* Skills */}
            <div className="animate-fade-up">
              <h3 className="text-4xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif', color: 'hsl(270, 70%, 60%)' }}>
                Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="inline-flex items-center px-6 py-3 rounded-full font-medium text-white transition-all hover:scale-105"
                    style={{ background: 'hsl(250, 75%, 65%)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column: Interests, then Certifications & Notable Achievement side by side */}
          <div className="space-y-8">
            {/* Interests */}
            <div className="animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
              <h3 className="text-4xl font-bold mb-8" style={{ fontFamily: 'Playfair Display, serif', color: 'hsl(340, 75%, 60%)' }}>
                Interests
              </h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {interests.map((interest) => (
                  <span 
                    key={interest}
                    className="inline-flex items-center px-6 py-3 rounded-full border-2 font-medium transition-all hover:scale-105"
                    style={{ 
                      borderColor: 'hsl(340, 75%, 70%)',
                      color: 'hsl(340, 75%, 55%)',
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
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
                <h4 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: 'hsl(340, 75%, 60%)' }}>
                  Certifications
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-xl mt-1 flex-shrink-0">•</span>
                    <p className="text-sm text-muted-foreground">Responsible Business Alliance trained</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 text-xl mt-1 flex-shrink-0">•</span>
                    <p className="text-sm text-muted-foreground">Certified Stott Pilates Instructor</p>
                  </li>
                </ul>
              </div>
              
              {/* Notable Achievement */}
              <div 
                className="p-6 rounded-3xl animate-fade-up"
                style={{ 
                  animationDelay: '0.3s', 
                  opacity: 0, 
                  animationFillMode: 'forwards',
                  background: 'linear-gradient(135deg, hsl(270, 70%, 65%) 0%, hsl(280, 75%, 60%) 100%)',
                }}
              >
                <h4 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Notable Achievement
                </h4>
                <p className="text-base text-white/95">
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
