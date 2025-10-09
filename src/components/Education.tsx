import { GraduationCap, Sparkles } from "lucide-react";

export const Education = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-16 animate-fade-up">
          <GraduationCap size={40} className="text-primary" />
          <h2 className="text-5xl md:text-6xl font-bold section-header">EDUCATION</h2>
        </div>
        
        <div className="space-y-8">
          {/* Babson College */}
          <div className="gradient-card animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-3xl font-bold gradient-text mb-2">Babson College</h3>
                <p className="text-lg font-medium text-foreground mb-1">Wellesley, MA</p>
                <p className="text-xl text-foreground">Bachelor of Science, Technology Entrepreneurship</p>
              </div>
              <span className="gradient-chip text-sm py-2 px-5">May 2026</span>
            </div>
            
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 mb-6 border-l-4 border-primary">
              <p className="text-lg font-semibold text-primary mb-2">CEA Capa - Florence, Italy (Fall 2024)</p>
              <p className="text-base text-muted-foreground">Fashion Product Development and Emerging Trends</p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Sparkles size={20} className="text-secondary mt-1 flex-shrink-0" />
                <p className="text-base text-muted-foreground">CWEL Scholar</p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles size={20} className="text-secondary mt-1 flex-shrink-0" />
                <p className="text-base text-muted-foreground">Dean's List</p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles size={20} className="text-secondary mt-1 flex-shrink-0" />
                <p className="text-base text-muted-foreground">Student Government Senator</p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles size={20} className="text-secondary mt-1 flex-shrink-0" />
                <p className="text-base text-muted-foreground">Kappa Kappa Gamma VP of Events</p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles size={20} className="text-secondary mt-1 flex-shrink-0" />
                <p className="text-base text-muted-foreground">Fashion and Sneaker Organization VP of Finance</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-primary/20">
              <p className="text-sm text-muted-foreground italic">
                Tech Operations, Strategic Problem Solving, Trend Forecasting, Mobile App Creation, Fashion Entrepreneurship
              </p>
            </div>
          </div>
          
          {/* Stanford Online High School */}
          <div className="gradient-card animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-3xl font-bold gradient-text mb-2">Stanford Online High School</h3>
                <p className="text-lg font-medium text-foreground mb-1">Palo Alto, CA</p>
                <p className="text-xl text-foreground">High School Diploma</p>
              </div>
              <span className="gradient-chip text-sm py-2 px-5">September 2018 – May 2022</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Sparkles size={20} className="text-secondary mt-1 flex-shrink-0" />
                <p className="text-base text-muted-foreground">Community Engagement Club – Executive Director</p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles size={20} className="text-secondary mt-1 flex-shrink-0" />
                <p className="text-base text-muted-foreground">Fashion and Streetwear Club – President</p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles size={20} className="text-secondary mt-1 flex-shrink-0" />
                <p className="text-base text-muted-foreground">Post-COVID Online Education Ambassador</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
