import { GraduationCap, Sparkles } from "lucide-react";
export const Education = () => {
  return <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <GraduationCap size={40} className="text-primary" />
        <h2 className="text-6xl md:text-7xl font-black section-header">
          EDUCATION
        </h2>
      </div>

      <div className="space-y-8">
        {/* Babson College */}
        <div className="gradient-card animate-fade-up" style={{
        animationDelay: '0.1s',
        opacity: 0,
        animationFillMode: 'forwards'
      }}>
          <div className="mb-4">
            <h3 className="text-3xl md:text-4xl font-bold subheading-hover mb-2">
              Babson College
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground font-sans">
              Bachelor of Science Candidate, Concentration in Technology Entrepreneurship
            </p>
            <p className="text-base text-muted-foreground mt-1 font-sans">
              Wellesley, MA | May 2026
            </p>
          </div>

          <div className="mb-6 pb-6 border-b border-border/30">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={18} className="text-primary" />
              <p className="text-base font-semibold text-foreground font-sans">
                Study Abroad: CEA Capa – Florence, Italy (Fall 2024)
              </p>
            </div>
            <p className="text-sm text-muted-foreground ml-7 font-sans">
              Fashion Product Development and Emerging Trends
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2 font-sans">Academic Excellence</h4>
              <ul className="space-y-2 text-muted-foreground font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>CWEL Scholar – Selected for Center for Women's Entrepreneurial Leadership program</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Dean's List x5</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2 font-sans">Leadership & Involvement</h4>
              <ul className="space-y-2 text-muted-foreground font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Student Government Senator – Advocate for student voices and campus initiatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>VP of Marketing, Babson Entrepreneurship Society – Leading marketing strategy for 500+ member organization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>VP of Branding, South Asian Student Association – Spearheading visual identity and cultural awareness campaigns</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border/30">
            <div className="flex flex-wrap gap-2">
              {['Technology Entrepreneurship', 'Strategic Management', 'AI Implementation', 'Fashion Business'].map((keyword, index) => <span key={index} className="skill-chip text-sm" style={{
              animationDelay: `${0.3 + index * 0.1}s`
            }}>
                  {keyword}
                </span>)}
            </div>
          </div>
        </div>

        {/* Stanford Online High School */}
        <div className="gradient-card animate-fade-up" style={{
        animationDelay: '0.2s',
        opacity: 0,
        animationFillMode: 'forwards'
      }}>
          <div className="mb-4">
            <h3 className="text-3xl md:text-4xl font-bold subheading-hover mb-2">
              Stanford Online High School
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground font-sans">
              High School Diploma
            </p>
            <p className="text-base text-muted-foreground mt-1 font-sans">
              2018 – 2022
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2 font-sans">Leadership Roles</h4>
              <ul className="space-y-2 text-muted-foreground font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Executive Director, Community Engagement Club – Coordinated virtual community service initiatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>President, Fashion and Streetwear Club – Led discussions on fashion industry trends and sustainability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Post-COVID Online Education Ambassador – Advocated for virtual learning best practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};