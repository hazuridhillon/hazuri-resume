import { GraduationCap, Sparkles } from "lucide-react";
export const Education = () => {
  return <section id="education" className="pt-16 md:pt-20 lg:pt-24 pb-16 md:pb-24 lg:pb-28 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 md:gap-3 mb-10 md:mb-14 lg:mb-16 flex-wrap">
        <GraduationCap size={20} className="text-primary flex-shrink-0" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black section-header break-words">
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
            <a 
              href="https://www.babson.edu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl md:text-2xl font-bold subheading-hover mb-2 hover:text-primary transition-colors inline-block"
            >
              Babson College
            </a>
            <p className="text-base text-muted-foreground font-sans">
              Wellesley, MA
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-sans mt-1 leading-relaxed">
              Bachelor of Science, Technology Entrepreneurship
            </p>
            <p className="text-base text-primary font-sans">
              May 2026
            </p>
          </div>

          {/* CEA Capa Highlighted Section */}
          <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r my-4">
            <p className="text-primary font-sans text-sm">
              CEA Capa - Florence, Italy (Fall 2024) - Fashion Product Development and Emerging Trends
            </p>
          </div>

          <ul className="space-y-2 text-muted-foreground font-sans leading-relaxed">
            <li className="flex items-start gap-2">
              <Sparkles size={14} className="text-primary flex-shrink-0 mt-0.5" />
              <span>CWEL Scholar</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles size={14} className="text-primary flex-shrink-0 mt-0.5" />
              <span>Dean's List</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles size={14} className="text-primary flex-shrink-0 mt-0.5" />
              <span>Student Government Senator</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles size={14} className="text-primary flex-shrink-0 mt-0.5" />
              <span>Kappa Kappa Gamma VP of Events</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles size={14} className="text-primary flex-shrink-0 mt-0.5" />
              <span>Fashion and Sneaker Organization VP of Finance</span>
            </li>
          </ul>

          <p className="text-muted-foreground italic font-sans mt-6 text-sm">
            Tech Operations, Strategic Problem Solving, Trend Forecasting, Mobile App Creation, Fashion Entrepreneurship
          </p>
        </div>

        {/* Stanford Online High School */}
        <div className="gradient-card h-full animate-fade-up" style={{
        animationDelay: '0.2s',
        opacity: 0,
        animationFillMode: 'forwards'
      }}>
          <div className="mb-4">
            <a 
              href="https://ohs.stanford.edu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl md:text-2xl font-bold subheading-hover mb-2 hover:text-primary transition-colors inline-block"
            >
              Stanford Online High School
            </a>
            <p className="text-base text-muted-foreground font-sans">
              Palo Alto, CA
            </p>
            <p className="text-base md:text-lg text-muted-foreground font-sans mt-1 leading-relaxed">
              High School Diploma
            </p>
            <p className="text-base text-primary font-sans">
              September 2018 – May 2022
            </p>
          </div>

          <ul className="space-y-2 text-muted-foreground font-sans leading-relaxed">
            <li className="flex items-start gap-2">
              <Sparkles size={14} className="text-primary flex-shrink-0 mt-0.5" />
              <span>Community Engagement Club – Executive Director</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles size={14} className="text-primary flex-shrink-0 mt-0.5" />
              <span>Fashion and Streetwear Club – President</span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles size={14} className="text-primary flex-shrink-0 mt-0.5" />
              <span>Post-COVID Online Education Ambassador</span>
            </li>
          </ul>
        </div>
      </div>
    </section>;
};