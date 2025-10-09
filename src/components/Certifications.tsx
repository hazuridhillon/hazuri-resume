import { Award } from "lucide-react";

export const Certifications = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <Award size={40} className="text-primary" />
          <h2 className="text-5xl md:text-6xl font-bold">CERTIFICATIONS</h2>
        </div>
        
        <div className="elevated-card animate-fade-up max-w-2xl">
          <div 
            className="absolute -inset-1 rounded-3xl opacity-30 blur-2xl"
            style={{
              background: 'radial-gradient(circle at center, hsl(270, 70%, 75%), transparent 70%)',
            }}
          />
          <div className="relative">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-secondary text-xl mt-1 flex-shrink-0">•</span>
                <p className="text-lg text-muted-foreground">Responsible Business Alliance trained</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-xl mt-1 flex-shrink-0">•</span>
                <p className="text-lg text-muted-foreground">Certified Stott Pilates Instructor</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
