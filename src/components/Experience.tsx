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
                  Streamlined client onboarding with automated tracking, cutting process time by 30% and improving client experience
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-2xl mt-0.5 flex-shrink-0 font-bold">▸</span>
                <p className="text-base font-medium text-foreground leading-relaxed">
                  Implemented AI tools for contract management, reducing manual work and boosting operational efficiency
                </p>
              </li>
            </ul>
          </div>
          
          {/* Phia */}
          <div className="gradient-card animate-fade-up" style={{ animationDelay: '0.15s', opacity: 0, animationFillMode: 'forwards' }}>
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
                  Launched SMS-based user feedback system using CRM and Mixpanel data, increasing response rates by 20%
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-2xl mt-0.5 flex-shrink-0 font-bold">▸</span>
                <p className="text-base font-medium text-foreground leading-relaxed">
                  Built and managed CRM of 150+ early users, integrating data for engagement and retention analysis
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-2xl mt-0.5 flex-shrink-0 font-bold">▸</span>
                <p className="text-base font-medium text-foreground leading-relaxed">
                  Led cost-optimized procurement for branded podcast materials, saving $1K+ and reducing delivery timelines by 3x
                </p>
              </li>
            </ul>
          </div>
          
          {/* Nvidia */}
          <div className="gradient-card animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Project Management Intern – Supply Chain</h3>
                <p className="text-xl gradient-text font-bold mb-2">Nvidia</p>
                <p className="text-base font-medium text-muted-foreground">Santa Clara, CA</p>
              </div>
              <span className="gradient-chip text-base py-2.5 px-6 whitespace-nowrap">May 2024 – August 2024</span>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-secondary text-2xl mt-0.5 flex-shrink-0 font-bold">▸</span>
                <p className="text-base font-medium text-foreground leading-relaxed">
                  Identified $80M cost-saving opportunities via distributor and contract manufacturer analysis
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-2xl mt-0.5 flex-shrink-0 font-bold">▸</span>
                <p className="text-base font-medium text-foreground leading-relaxed">
                  Performed margin and pricing analysis to recommend optimal regional production sites
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-2xl mt-0.5 flex-shrink-0 font-bold">▸</span>
                <p className="text-base font-medium text-foreground leading-relaxed">
                  Coordinated supplier performance reviews and stakeholder communications, improving on-time delivery
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-2xl mt-0.5 flex-shrink-0 font-bold">▸</span>
                <p className="text-base font-medium text-foreground leading-relaxed">
                  Streamlined cross-functional workflows between QA, engineering, and suppliers to remove bottlenecks
                </p>
              </li>
            </ul>
          </div>
          
          {/* Marble Lotus */}
          <div className="gradient-card animate-fade-up" style={{ animationDelay: '0.25s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">E-commerce and Product Development Intern</h3>
                <p className="text-xl gradient-text font-bold mb-2">Marble Lotus</p>
                <p className="text-base font-medium text-muted-foreground">Remote</p>
              </div>
              <span className="gradient-chip text-base py-2.5 px-6 whitespace-nowrap">May 2023 – August 2023</span>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-secondary text-2xl mt-0.5 flex-shrink-0 font-bold">▸</span>
                <p className="text-base font-medium text-foreground leading-relaxed">
                  Migrated brand to Shopify and Amazon fulfillment, improving logistics and customer experience, and filed trademark
                </p>
              </li>
            </ul>
          </div>
          
          {/* BeMe Health */}
          <div className="gradient-card animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">BeingMe Podcast Host</h3>
                <p className="text-xl gradient-text font-bold mb-2">BeMe Health</p>
                <p className="text-base font-medium text-muted-foreground">San Jose, CA</p>
              </div>
              <span className="gradient-chip text-base py-2.5 px-6 whitespace-nowrap">May 2021 – May 2023</span>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-secondary text-2xl mt-0.5 flex-shrink-0 font-bold">▸</span>
                <p className="text-base font-medium text-foreground leading-relaxed">
                  Co-hosted 20+ episodes with Harvard M.D. Neha Chaudhary, winning the 2023 Signal Listener's Choice Award, and ranking in the top 10% most shared podcast on Spotify in 2022
                </p>
              </li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-primary/20">
              <div className="mb-4">
                <h4 className="text-lg font-bold text-foreground mb-1">Project Intern and Teen Advisory Board</h4>
                <p className="text-sm font-medium text-muted-foreground">May 2021 – August 2022</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl mt-0.5 flex-shrink-0 font-bold">▸</span>
                  <p className="text-base font-medium text-foreground leading-relaxed">
                    Co-developed and patented an AI-mental health innovation, driving technological advancement in the field
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
