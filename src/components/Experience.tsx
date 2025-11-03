import { Briefcase } from "lucide-react";

export const Experience = () => {
  return (
    <section className="pt-12 md:pt-16 pb-12 md:pb-20 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 md:gap-3 mb-8 md:mb-12">
        <Briefcase size={20} className="text-primary" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black section-header">
          EXPERIENCE
        </h2>
      </div>

      <div className="space-y-8">
        {/* Dhillon Law Group */}
        <div 
          className="gradient-card animate-fade-up"
          style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <div className="mb-4">
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

        {/* Phia */}
        <div 
          className="gradient-card animate-fade-up"
          style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <div className="mb-4">
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

        {/* Nvidia */}
        <div 
          className="gradient-card animate-fade-up"
          style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <div className="mb-4">
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

        {/* Marble Lotus */}
        <div 
          className="gradient-card animate-fade-up"
          style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <div className="mb-4">
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
          
          <ul className="space-y-3 text-muted-foreground font-sans leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 font-bold">•</span>
              <span>Migrated brand to Shopify and Amazon fulfillment, improving logistics and customer experience, and filed trademark</span>
            </li>
          </ul>
        </div>

        {/* BeMe Health - Two roles */}
        <div 
          className="gradient-card animate-fade-up"
          style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <div className="mb-4">
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
          
          <ul className="space-y-3 text-muted-foreground font-sans leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 font-bold">•</span>
              <span>Co-hosted 20+ episodes with Harvard M.D. Neha Chaudhary, winning the 2023 Signal Listener's Choice Award and ranking in the top 10% most shared podcasts on Spotify in 2022</span>
            </li>
          </ul>

          <div className="mb-4 mt-8 pt-6 border-t border-border/30">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Project Intern and Teen Advisory Board
            </h3>
            <p className="text-base text-muted-foreground font-sans">
              May 2021 – August 2022
            </p>
          </div>
          
          <ul className="space-y-3 text-muted-foreground font-sans leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 font-bold">•</span>
              <span>Co-developed and patented an AI-mental health innovation, driving technological advancement in the field</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};
