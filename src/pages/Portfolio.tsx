import { Navigation } from "@/components/Navigation";
import { GeometricShapes } from "@/components/GeometricShapes";
import { ArrowLeft, ExternalLink, Palette, Briefcase, Code } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Brand Identity — Velour Studios",
    category: "Creative",
    icon: Palette,
    description:
      "Developed a full brand identity for a boutique design studio, including logo, color palette, typography system, and social media templates.",
    tags: ["Branding", "Visual Design", "Art Direction"],
    year: "2025",
  },
  {
    title: "Market Expansion Strategy — NovaTech",
    category: "Business",
    icon: Briefcase,
    description:
      "Led strategic analysis and go-to-market plan for a SaaS startup entering the European market, resulting in a 40% increase in pipeline within 6 months.",
    tags: ["Strategy", "Market Research", "GTM"],
    year: "2025",
  },
  {
    title: "Portfolio Website",
    category: "Code",
    icon: Code,
    description:
      "Designed and built this personal portfolio using React, Tailwind CSS, and Fraunces typography — a vintage editorial aesthetic with modern tooling.",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    year: "2026",
  },
  {
    title: "Editorial Zine — \"Mosaic\"",
    category: "Creative",
    icon: Palette,
    description:
      "Art-directed and produced a limited-run print zine exploring the intersection of pattern, color, and identity across cultures.",
    tags: ["Print Design", "Art Direction", "Editorial"],
    year: "2024",
  },
  {
    title: "Financial Model — GreenPath Energy",
    category: "Business",
    icon: Briefcase,
    description:
      "Built a comprehensive DCF and sensitivity analysis model for a clean-energy startup seeking Series A funding.",
    tags: ["Financial Modeling", "Valuation", "Energy"],
    year: "2024",
  },
  {
    title: "Task Management CLI",
    category: "Code",
    icon: Code,
    description:
      "A lightweight command-line productivity tool built in Python with local SQLite storage, natural language date parsing, and color-coded priorities.",
    tags: ["Python", "CLI", "SQLite"],
    year: "2025",
  },
];

const categoryColor: Record<string, string> = {
  Creative: "hsl(332, 58%, 53%)",
  Business: "hsl(55, 24%, 35%)",
  Code: "hsl(348, 54%, 47%)",
};

const Portfolio = () => {
  return (
    <div className="relative">
      <GeometricShapes />
      <Navigation />

      <section className="min-h-screen pt-28 sm:pt-36 pb-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold mb-10 transition-colors"
            style={{ color: "hsl(306, 23%, 26%)" }}
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          {/* Header */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 animate-fade-up"
            style={{
              fontWeight: 700,
              color: "hsl(348, 54%, 47%)",
              textShadow: "0 2px 8px rgba(203, 67, 139, 0.12)",
              opacity: 0,
              animationDelay: "0.1s",
              animationFillMode: "forwards",
            }}
          >
            Portfolio
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl max-w-2xl mb-16 animate-fade-up"
            style={{
              color: "hsl(306, 23%, 26%)",
              fontFamily: "Fraunces, Georgia, serif",
              fontStyle: "italic",
              opacity: 0,
              animationDelay: "0.25s",
              animationFillMode: "forwards",
            }}
          >
            A selection of creative, strategic, and technical work.
          </p>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, i) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="gradient-card group cursor-default animate-fade-up"
                  style={{
                    opacity: 0,
                    animationDelay: `${0.15 + i * 0.08}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  {/* Category + year */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
                      style={{ color: categoryColor[project.category] }}
                    >
                      <Icon size={14} />
                      {project.category}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className="text-lg sm:text-xl font-bold mb-3 leading-snug"
                    style={{
                      color: "hsl(306, 23%, 26%)",
                      fontFamily: "Fraunces, Georgia, serif",
                      fontStyle: "italic",
                    }}
                  >
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-muted-foreground mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="skill-chip text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
