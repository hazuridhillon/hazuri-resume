import { Briefcase } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-24 lg:pb-28 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 md:gap-3 mb-10 md:mb-14 lg:mb-16">
        <Briefcase size={20} className="text-primary" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black section-header">
          EXPERIENCE
        </h2>
      </div>

      <div className="space-y-8">
        {/* Dhillon Law Group */}
        <div 
          className="rounded-2xl p-0 overflow-hidden shadow-[0_8px_32px_-10px_hsl(306_23%_26%/0.08),0_16px_64px_-20px_hsl(306_23%_26%/0.06)] animate-fade-up"
          style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <div className="bg-gradient-to-br from-[hsl(42,10%,95%)] to-[hsl(42,10%,91%)] p-4 pb-3">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Business Management and AI Intern
            </h3>
            <a 
              href="https://www.dhillonlaw.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-base md:text-lg font-semibold text-primary font-sans hover:underline cursor-pointer transition-all inline-block"
            >
              Dhillon Law Group
            </a>
            <p className="text-base text-muted-foreground font-sans">
              Remote, San Francisco, CA | June 2025 – August 2025
            </p>
          </div>
          
          <div className="bg-[hsl(42,10%,95%)] p-4 pt-3">
            <ul className="space-y-3 text-muted-foreground font-sans leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span>Streamlined client onboarding with automated tracking, cutting process time by 30% and improving client experience</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span>Implemented AI tools for contract management, reducing manual work and boosting operational efficiency</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Phia */}
        <div 
          className="rounded-2xl p-0 overflow-hidden shadow-[0_8px_32px_-10px_hsl(306_23%_26%/0.08),0_16px_64px_-20px_hsl(306_23%_26%/0.06)] animate-fade-up"
          style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <div className="bg-gradient-to-br from-[hsl(42,10%,95%)] to-[hsl(42,10%,91%)] p-4 pb-3">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Operations Assistant Intern
            </h3>
            <a 
              href="https://phia.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-base md:text-lg font-semibold text-primary font-sans hover:underline cursor-pointer transition-all inline-block"
            >
              Phia
            </a>
            <p className="text-base text-muted-foreground font-sans">
              Remote, New York, NY | May 2025 – June 2025
            </p>
          </div>
          
          <div className="bg-[hsl(42,10%,95%)] p-4 pt-3">
            <ul className="space-y-3 text-muted-foreground font-sans leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span>Launched SMS-based user feedback system using CRM and Mixpanel data, increasing response rates by 20%</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span>Built and managed CRM of 150+ early users, integrating data for engagement and retention analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span>Led cost-optimized procurement for branded podcast materials, saving $1K+ and reducing delivery timelines by 3×</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Nvidia */}
        <div 
          className="rounded-2xl p-0 overflow-hidden shadow-[0_8px_32px_-10px_hsl(306_23%_26%/0.08),0_16px_64px_-20px_hsl(306_23%_26%/0.06)] animate-fade-up"
          style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <div className="bg-gradient-to-br from-[hsl(42,10%,95%)] to-[hsl(42,10%,91%)] p-4 pb-3">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Project Management Intern – Supply Chain
            </h3>
            <a 
              href="https://www.nvidia.com/en-us/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-base md:text-lg font-semibold text-primary font-sans hover:underline cursor-pointer transition-all inline-block"
            >
              Nvidia
            </a>
            <p className="text-base text-muted-foreground font-sans">
              Santa Clara, CA | May 2024 – August 2024
            </p>
          </div>
          
          <div className="bg-[hsl(42,10%,95%)] p-4 pt-3">
            <ul className="space-y-3 text-muted-foreground font-sans leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span>Identified $80M cost-saving opportunities via distributor and contract manufacturer analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span>Performed margin and pricing analysis to recommend optimal regional production sites</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span>Coordinated supplier performance reviews and stakeholder communications, improving on-time delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span>Streamlined cross-functional workflows between QA, engineering, and suppliers to remove bottlenecks</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Marble Lotus */}
        <div 
          className="rounded-2xl p-0 overflow-hidden shadow-[0_8px_32px_-10px_hsl(306_23%_26%/0.08),0_16px_64px_-20px_hsl(306_23%_26%/0.06)] animate-fade-up"
          style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <div className="bg-gradient-to-br from-[hsl(42,10%,95%)] to-[hsl(42,10%,91%)] p-4 pb-3">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              E-commerce and Product Development Intern
            </h3>
            <a 
              href="https://www.marble-lotus.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-base md:text-lg font-semibold text-primary font-sans hover:underline cursor-pointer transition-all inline-block"
            >
              Marble Lotus
            </a>
            <p className="text-base text-muted-foreground font-sans">
              Remote | May 2023 – August 2023
            </p>
          </div>
          
          <div className="bg-[hsl(42,10%,95%)] p-4 pt-3">
            <ul className="space-y-3 text-muted-foreground font-sans leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span>Migrated brand to Shopify and Amazon fulfillment, improving logistics and customer experience, and filed trademark</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BeMe Health - Two roles */}
        <div 
          className="rounded-2xl p-0 overflow-hidden shadow-[0_8px_32px_-10px_hsl(306_23%_26%/0.08),0_16px_64px_-20px_hsl(306_23%_26%/0.06)] animate-fade-up"
          style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <div className="bg-gradient-to-br from-[hsl(42,10%,95%)] to-[hsl(42,10%,91%)] p-4 pb-3">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              BeingMe Podcast Host
            </h3>
            <a 
              href="https://beme.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-base md:text-lg font-semibold text-primary font-sans hover:underline cursor-pointer transition-all inline-block"
            >
              BeMe Health
            </a>
            <p className="text-base text-muted-foreground font-sans">
              San Jose, CA | May 2021 – May 2023
            </p>
          </div>
          
          <div className="bg-[hsl(42,10%,95%)] p-4 pt-3 pb-6">
            <ul className="space-y-3 text-muted-foreground font-sans leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span>Co-hosted 20+ episodes with Harvard M.D. Neha Chaudhary, winning the 2023 Signal Listener's Choice Award and ranking in the top 10% most shared podcasts on Spotify in 2022</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[hsl(42,10%,95%)] to-[hsl(42,10%,91%)] p-4 pb-3 border-t border-border/30">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Project Intern and Teen Advisory Board
            </h3>
            <p className="text-base text-muted-foreground font-sans">
              May 2021 – August 2022
            </p>
          </div>
          
          <div className="bg-[hsl(42,10%,95%)] p-4 pt-3">
            <ul className="space-y-3 text-muted-foreground font-sans leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">•</span>
                <span>Co-developed and patented an AI-mental health innovation, driving technological advancement in the field</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};
