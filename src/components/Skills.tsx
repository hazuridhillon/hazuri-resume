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
    <section className="py-20 px-6 max-w-6xl mx-auto mb-20">
      <div className="flex items-center gap-4 mb-16">
        <Award size={40} className="text-primary" />
        <h2 className="text-6xl md:text-7xl font-black section-header">
          SKILLS & INTERESTS
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column: Skills + Certifications */}
        <div className="space-y-10">
          {/* Skills */}
          <div
            className="animate-fade-up"
            style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-8 section-header">
              Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={skill}
                  className="skill-chip animate-fade-up"
                  style={{ 
                    animationDelay: `${0.2 + index * 0.05}s`, 
                    opacity: 0, 
                    animationFillMode: 'forwards' 
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div 
            className="gradient-card animate-fade-up"
            style={{ animationDelay: '1.2s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <h4 className="text-2xl md:text-3xl font-bold mb-4 subheading-hover">
              Certifications
            </h4>
            <ul className="space-y-3 font-sans">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-0.5 flex-shrink-0 font-bold">•</span>
                <p className="text-base font-medium text-foreground">Responsible Business Alliance trained</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-0.5 flex-shrink-0 font-bold">•</span>
                <p className="text-base font-medium text-foreground">Certified Stott Pilates Instructor</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Interests + Notable Achievement */}
        <div className="space-y-10">
          {/* Interests */}
          <div
            className="animate-fade-up"
            style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <h3 className="text-4xl md:text-5xl font-bold mb-8 section-header">
              Interests
            </h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <span 
                  key={interest}
                  className="interest-badge animate-fade-up"
                  style={{ 
                    animationDelay: `${0.7 + index * 0.1}s`,
                    opacity: 0,
                    animationFillMode: 'forwards'
                  }}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Notable Achievement */}
          <div 
            className="notable-card animate-fade-up"
            style={{ animationDelay: '1.3s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Notable Achievement
            </h4>
            <p className="text-base font-medium text-foreground font-sans leading-relaxed">
              Co-Founder of AAPI Silicon Valley - Organized youth-led advocacy events for 1,000+ attendees
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
