import { Briefcase } from "lucide-react";

export const Experience = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-20 animate-fade-up">
          <Briefcase size={44} className="text-primary" />
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold section-header">EXPERIENCE</h2>
        </div>
        
        <div className="space-y-8">
          {/* Dhillon Law Group */}
          <div className="gradient-card animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Business Management and AI Intern</h3>
                <p className="text-xl gradient-text font-bold mb-2">Dhillon Law Group</p>
                <p className="text-base font-medium text-muted-foreground">Remote, San Francisco, CA</p>
              </div>
              <span className="gradient-chip text-base py-2.5 px-6 whitespace-nowrap">June 2025 – August 2025</span>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-secondary text-2xl mt-0.5 flex-shrink-0 font-bold">▸</span>
                <p className="text-base font-medium text-foreground leading-relaxed">
                  Streamlined client onboarding with automated tracking, cutting process time by 30%
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-2xl mt-0.5 flex-shrink-0 font-bold">▸</span>
                <p className="text-base font-medium text-foreground leading-relaxed">
                  Implemented AI tools for contract management, reducing manual work
                </p>
              </li>
            </ul>
          </div>
          
          {/* Phia */}
          <div className="gradient-card animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Operations Assistant Intern</h3>
                <p className="text-xl gradient-text font-bold mb-2">Phia</p>
                <p className="text-base font-medium text-muted-foreground">Remote, New York, NY</p>
              </div>
              <span className="gradient-chip text-base py-2.5 px-6 whitespace-nowrap">May 2025 – June 2025</span>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-secondary text-2xl mt-0.5 flex-shrink-0 font-bold">▸</span>
                <p className="text-base font-medium text-foreground leading-relaxed">
                  Launched SMS-based user feedback system, increasing response rates by 20%
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-2xl mt-0.5 flex-shrink-0 font-bold">▸</span>
                <p className="text-base font-medium text-foreground leading-relaxed">
                  Built and managed CRM of 150+ early users
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-2xl mt-0.5 flex-shrink-0 font-bold">▸</span>
                <p className="text-base font-medium text-foreground leading-relaxed">
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
