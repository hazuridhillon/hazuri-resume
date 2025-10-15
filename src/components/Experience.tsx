import { Briefcase } from "lucide-react";

export const Experience = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <Briefcase size={40} className="text-primary" />
        <h2 className="text-6xl md:text-7xl font-black section-header">
          EXPERIENCE
        </h2>
      </div>

      <div className="space-y-8">
        {/* Venture For Clothing */}
        <div 
          className="gradient-card animate-fade-up"
          style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <div className="mb-4">
            <h3 className="text-3xl md:text-4xl font-bold subheading-hover mb-2">
              Strategy & AI Operations Intern
            </h3>
            <p className="text-lg md:text-xl font-semibold text-primary font-sans">
              Venture For Clothing
            </p>
            <p className="text-base text-muted-foreground font-sans">
              New York, NY | September 2024 – Present
            </p>
          </div>
          
          <ul className="space-y-3 text-muted-foreground font-sans">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 font-bold">•</span>
              <span>Implemented AI-driven workflow automation, reducing manual data entry by 40% and improving operational efficiency across fashion production pipelines</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 font-bold">•</span>
              <span>Developed strategic frameworks for sustainable fashion manufacturing processes, aligning with company's zero-waste mission</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 font-bold">•</span>
              <span>Collaborated with cross-functional teams to integrate AI tools for inventory forecasting and trend analysis</span>
            </li>
          </ul>
        </div>

        {/* Free People */}
        <div 
          className="gradient-card animate-fade-up"
          style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <div className="mb-4">
            <h3 className="text-3xl md:text-4xl font-bold subheading-hover mb-2">
              Retail Operations Associate
            </h3>
            <p className="text-lg md:text-xl font-semibold text-primary font-sans">
              Free People
            </p>
            <p className="text-base text-muted-foreground font-sans">
              Cambridge, MA | August 2023 – Present
            </p>
          </div>
          
          <ul className="space-y-3 text-muted-foreground font-sans">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 font-bold">•</span>
              <span>Managed high-volume customer interactions while maintaining brand aesthetic and storytelling standards</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 font-bold">•</span>
              <span>Analyzed sales patterns and customer preferences to inform merchandising decisions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 font-bold">•</span>
              <span>Contributed to visual merchandising strategies that increased foot traffic by 15%</span>
            </li>
          </ul>
        </div>

        {/* Rocket Fund */}
        <div 
          className="gradient-card animate-fade-up"
          style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <div className="mb-4">
            <h3 className="text-3xl md:text-4xl font-bold subheading-hover mb-2">
              Venture Capital & Startup Strategy Intern
            </h3>
            <p className="text-lg md:text-xl font-semibold text-primary font-sans">
              Rocket Fund, Babson College
            </p>
            <p className="text-base text-muted-foreground font-sans">
              Wellesley, MA | September 2023 – May 2024
            </p>
          </div>
          
          <ul className="space-y-3 text-muted-foreground font-sans">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 font-bold">•</span>
              <span>Conducted due diligence on early-stage startups, evaluating business models, market fit, and growth potential</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 font-bold">•</span>
              <span>Collaborated with venture partners to assess investment opportunities in technology and consumer sectors</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 font-bold">•</span>
              <span>Prepared investment memos and pitch presentations for portfolio consideration</span>
            </li>
          </ul>
        </div>

        {/* Alo Yoga */}
        <div 
          className="gradient-card animate-fade-up"
          style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <div className="mb-4">
            <h3 className="text-3xl md:text-4xl font-bold subheading-hover mb-2">
              Operations & Customer Experience Specialist
            </h3>
            <p className="text-lg md:text-xl font-semibold text-primary font-sans">
              Alo Yoga
            </p>
            <p className="text-base text-muted-foreground font-sans">
              Palo Alto, CA | June 2023 – August 2023
            </p>
          </div>
          
          <ul className="space-y-3 text-muted-foreground font-sans">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 font-bold">•</span>
              <span>Optimized store operations and inventory management for high-traffic luxury athleisure retail location</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 font-bold">•</span>
              <span>Delivered exceptional customer experiences aligned with wellness-focused brand values</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 font-bold">•</span>
              <span>Collaborated with regional management to implement best practices for seasonal product launches</span>
            </li>
          </ul>
        </div>

        {/* Babson Consulting Alliance */}
        <div 
          className="gradient-card animate-fade-up"
          style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <div className="mb-4">
            <h3 className="text-3xl md:text-4xl font-bold subheading-hover mb-2">
              Business Strategy Consultant
            </h3>
            <p className="text-lg md:text-xl font-semibold text-primary font-sans">
              Babson Consulting Alliance
            </p>
            <p className="text-base text-muted-foreground font-sans">
              Wellesley, MA | January 2023 – May 2023
            </p>
          </div>
          
          <ul className="space-y-3 text-muted-foreground font-sans">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 font-bold">•</span>
              <span>Led strategic consulting projects for early-stage startups, delivering actionable market entry and growth strategies</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 font-bold">•</span>
              <span>Conducted competitive analysis and market research to identify untapped opportunities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1 font-bold">•</span>
              <span>Presented strategic recommendations to client executives and Babson faculty advisors</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
