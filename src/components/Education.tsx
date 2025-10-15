import { GraduationCap, Sparkles } from "lucide-react";
export const Education = () => {
  return <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <GraduationCap size={40} className="text-primary" />
        <h2 className="text-6xl md:text-7xl font-black section-header">
          EDUCATION
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Babson College */}
        <div className="gradient-card h-full animate-fade-up" style={{
        animationDelay: '0.1s',
        opacity: 0,
        animationFillMode: 'forwards'
      }}>
          <div className="mb-4">
            <h3 className="text-3xl md:text-4xl font-bold subheading-hover mb-2">
              Babson College
            </h3>
            <p className="text-base text-muted-foreground font-sans">
              Wellesley, MA
            </p>
            <p className="text-lg md:text-xl text-muted-foreground font-sans mt-1">
              Bachelor of Science, Technology Entrepreneurship
            </p>
            <p className="text-base text-muted-foreground font-sans">
              May 2026
            </p>
          </div>

          <ul className="space-y-2 text-muted-foreground font-sans">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>CEA Capa - Florence, Italy (Fall 2024) - Fashion Product Development and Emerging Trends</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>CWEL Scholar</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Dean's List</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Student Government Senator</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Kappa Kappa Gamma VP of Events</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Fashion and Sneaker Organization VP of Finance</span>
            </li>
          </ul>

          <div className="mt-6 pt-6 border-t border-border/30">
            <div className="flex flex-wrap gap-2">
              {['Tech Operations', 'Strategic Problem Solving', 'Trend Forecasting', 'Mobile App Creation', 'Fashion Entrepreneurship'].map((keyword, index) => <span key={index} className="skill-chip text-sm" style={{
              animationDelay: `${0.3 + index * 0.1}s`
            }}>
                  {keyword}
                </span>)}
            </div>
          </div>
        </div>

        {/* Stanford Online High School */}
        <div className="gradient-card h-full animate-fade-up" style={{
        animationDelay: '0.2s',
        opacity: 0,
        animationFillMode: 'forwards'
      }}>
          <div className="mb-4">
            <h3 className="text-3xl md:text-4xl font-bold subheading-hover mb-2">
              Stanford Online High School
            </h3>
            <p className="text-base text-muted-foreground font-sans">
              Palo Alto, CA
            </p>
            <p className="text-lg md:text-xl text-muted-foreground font-sans mt-1">
              High School Diploma
            </p>
            <p className="text-base text-muted-foreground font-sans">
              September 2018 – May 2022
            </p>
          </div>

          <ul className="space-y-2 text-muted-foreground font-sans">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Community Engagement Club – Executive Director</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Fashion and Streetwear Club – President</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Post-COVID Online Education Ambassador</span>
            </li>
          </ul>
        </div>
      </div>
    </section>;
};