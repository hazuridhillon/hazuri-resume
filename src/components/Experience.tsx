import { Briefcase, Heart } from "lucide-react";

export const Experience = () => {
  return (
    <section className="py-32 px-6 relative">
      {/* Decorative heart motif */}
      <Heart 
        className="absolute top-20 right-[10%] text-primary opacity-[0.04] animate-pulse-glow" 
        size={80} 
        fill="currentColor"
        style={{ filter: 'blur(20px)' }}
      />
      
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <Briefcase size={40} className="text-primary" />
          <h2 className="text-5xl md:text-6xl font-bold">EXPERIENCE</h2>
        </div>
        
        <div className="space-y-8">
          {/* Dhillon Law Group */}
          <div className="elevated-card animate-fade-up">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-3xl font-bold mb-2">Business Management and AI Intern</h3>
                <p className="text-xl gradient-text font-semibold mb-1">Dhillon Law Group</p>
                <p className="text-base text-muted-foreground">Remote, San Francisco, CA</p>
              </div>
              <span className="chip text-sm">June 2025 – August 2025</span>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-secondary text-xl mt-1 flex-shrink-0">▸</span>
                <p className="text-base text-muted-foreground">
                  Streamlined client onboarding with automated tracking, cutting process time by 30%
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-xl mt-1 flex-shrink-0">▸</span>
                <p className="text-base text-muted-foreground">
                  Implemented AI tools for contract management, reducing manual work
                </p>
              </li>
            </ul>
          </div>
          
          {/* Phia */}
          <div className="elevated-card animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-3xl font-bold mb-2">Operations Assistant Intern</h3>
                <p className="text-xl gradient-text font-semibold mb-1">Phia</p>
                <p className="text-base text-muted-foreground">Remote, New York, NY</p>
              </div>
              <span className="chip text-sm">May 2025 – June 2025</span>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-secondary text-xl mt-1 flex-shrink-0">▸</span>
                <p className="text-base text-muted-foreground">
                  Launched SMS-based user feedback system, increasing response rates by 20%
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-xl mt-1 flex-shrink-0">▸</span>
                <p className="text-base text-muted-foreground">
                  Built and managed CRM of 150+ early users
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-xl mt-1 flex-shrink-0">▸</span>
                <p className="text-base text-muted-foreground">
                  Led cost-optimized procurement, saving $1K+ and reducing delivery timelines by 3x
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
