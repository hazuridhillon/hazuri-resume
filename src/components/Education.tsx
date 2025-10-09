import { GraduationCap, Sparkles } from "lucide-react";

export const Education = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-20 animate-fade-up">
          <GraduationCap size={44} className="text-primary" />
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold section-header">EDUCATION</h2>
        </div>
        
        <div className="space-y-8">
          {/* Babson College */}
          <div className="gradient-card animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-3">Babson College</h3>
                <p className="text-lg font-semibold text-foreground mb-2">Wellesley, MA</p>
                <p className="text-xl font-medium text-foreground">Bachelor of Science, Technology Entrepreneurship</p>
              </div>
              <span className="gradient-chip text-base py-2.5 px-6">May 2026</span>
            </div>
            
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 mb-6 border-l-4 border-primary">
              <p className="text-lg font-bold text-primary mb-2">CEA Capa - Florence, Italy (Fall 2024)</p>
              <p className="text-base font-medium text-foreground">Fashion Product Development and Emerging Trends</p>
            </div>
            
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <Sparkles size={22} className="text-secondary mt-1 flex-shrink-0" />
                <p className="text-base font-medium text-foreground">CWEL Scholar</p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles size={22} className="text-secondary mt-1 flex-shrink-0" />
                <p className="text-base font-medium text-foreground">Dean's List</p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles size={22} className="text-secondary mt-1 flex-shrink-0" />
                <p className="text-base font-medium text-foreground">Student Government Senator</p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles size={22} className="text-secondary mt-1 flex-shrink-0" />
                <p className="text-base font-medium text-foreground">Kappa Kappa Gamma VP of Events</p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles size={22} className="text-secondary mt-1 flex-shrink-0" />
                <p className="text-base font-medium text-foreground">Fashion and Sneaker Organization VP of Finance</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-primary/20">
              <p className="text-sm font-medium text-muted-foreground italic leading-relaxed">
                Tech Operations, Strategic Problem Solving, Trend Forecasting, Mobile App Creation, Fashion Entrepreneurship
              </p>
            </div>
          </div>
          
          {/* Stanford Online High School */}
          <div className="gradient-card animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-3">Stanford Online High School</h3>
                <p className="text-lg font-semibold text-foreground mb-2">Palo Alto, CA</p>
                <p className="text-xl font-medium text-foreground">High School Diploma</p>
              </div>
              <span className="gradient-chip text-base py-2.5 px-6 whitespace-nowrap">September 2018 – May 2022</span>
            </div>
            
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <Sparkles size={22} className="text-secondary mt-1 flex-shrink-0" />
                <p className="text-base font-medium text-foreground">Community Engagement Club – Executive Director</p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles size={22} className="text-secondary mt-1 flex-shrink-0" />
                <p className="text-base font-medium text-foreground">Fashion and Streetwear Club – President</p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles size={22} className="text-secondary mt-1 flex-shrink-0" />
                <p className="text-base font-medium text-foreground">Post-COVID Online Education Ambassador</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
