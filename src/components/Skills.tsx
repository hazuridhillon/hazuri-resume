import { Award } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = [
  {
    name: "Leadership & Strategy",
    description: "Leading student government initiatives, managing events for my sorority, and acting as COO of Babson themed card game, Oh Dam taught me how to balance creativity with execution, turning ideas into organized, well-run projects that deliver results."
  },
  {
    name: "Intellectual Property Registration",
    description: "Co-patenting an AI-driven mental health tool and handling trademark filings built a deep understanding of how innovation, design, and legal protection intersect to give ideas long lasting power."
  },
  {
    name: "Market/User Research",
    description: "Mixpanel has been my main tool for understanding how people actually use products, turning behavioral data into clear insights that improve engagement, retention, and product design."
  },
  {
    name: "Competitive Analysis",
    description: "From startup landscapes to established brands, analyzing market behavior helps identify what's missing, and how thoughtful positioning can turn a good idea into a category leader."
  },
  {
    name: "AI Implementation",
    description: "Hands-on experience introducing AI into legal and operational workflows showed how automation can save time, reduce friction, and let people focus on creative, strategic work."
  },
  {
    name: "Supply Chain",
    description: "Optimizing supplier networks and logistics revealed how small process changes can drive big cost savings and efficiency — lessons that apply to any growing business."
  },
  {
    name: "E-commerce",
    description: "Helping brands build on Shopify and launch through Amazon taught me that good online retail isn't just tech, it's aligning brand voice, product flow, and customer experience into one seamless system."
  },
  {
    name: "Brand Strategy",
    description: "Across podcasting, startups, and student organizations, strong brand work has always come down to clarity, knowing your story and making every touchpoint feel connected and real."
  },
  {
    name: "Trend Forecasting",
    description: "Studying global fashion and consumer behavior, especially while abroad in Florence, shaped how I spot early shifts in taste, culture, and tech, and use them to guide what's next."
  }
];

const interests = [
  "Fashion",
  "Beauty",
  "Yoga, Pilates, Wellness",
  "Pop-culture",
  "Consumer AI",
  "Brand Strategy & Activations",
];

export const Skills = () => {
  return (
    <TooltipProvider delayDuration={200}>
      <section className="pt-12 md:pt-16 pb-12 md:pb-20 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 md:gap-3 mb-8 md:mb-12">
        <Award size={20} className="text-primary" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black section-header leading-tight">
          SKILLS & INTERESTS
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column: Skills + Certifications */}
        <div className="space-y-10">
          {/* Skills */}
          <div
            className="animate-fade-up"
            style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 section-header">
              Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Tooltip key={skill.name}>
                  <TooltipTrigger asChild>
                    <span 
                      className="skill-chip animate-fade-up cursor-help"
                      style={{ 
                        animationDelay: `${0.2 + index * 0.05}s`, 
                        opacity: 0, 
                        animationFillMode: 'forwards' 
                      }}
                    >
                      {skill.name}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent 
                    side="top" 
                    className="max-w-xs md:max-w-sm bg-background/95 backdrop-blur-sm border-primary/20 text-foreground p-4 shadow-lg"
                    sideOffset={8}
                  >
                    <p className="text-sm leading-relaxed font-sans">
                      {skill.description}
                    </p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div 
            className="gradient-card animate-fade-up"
            style={{ animationDelay: '1.2s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 subheading-hover">
              Certifications
            </h4>
            <ul className="space-y-3 font-sans">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-0.5 flex-shrink-0 font-bold">•</span>
                <p className="text-base font-medium text-foreground">Responsible Business Alliance trained</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl mt-0.5 flex-shrink-0 font-bold">•</span>
                <p className="text-base font-medium text-foreground">Certified Stott Pilates Instructor</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Interests + Notable Achievement */}
        <div className="space-y-10">
          {/* Interests */}
          <div
            className="animate-fade-up"
            style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 section-header">
              Interests
            </h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <span 
                  key={interest}
                  className="interest-badge animate-fade-up"
                  style={{ 
                    animationDelay: `${0.7 + index * 0.1}s`,
                    opacity: 0,
                    animationFillMode: 'forwards'
                  }}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Notable Achievement */}
          <div 
            className="notable-card animate-fade-up"
            style={{ animationDelay: '1.3s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-3">
              Notable Achievement
            </h4>
            <p className="text-base font-medium text-foreground font-sans leading-relaxed">
              Co-Founder of{" "}
              <a 
                href="https://aapisiliconvalley.wixsite.com/home" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-semibold"
              >
                AAPI Silicon Valley
              </a>
              {" "}- Organized youth-led advocacy events for 1,000+ attendees
            </p>
          </div>
        </div>
      </div>
    </section>
    </TooltipProvider>
  );
};
