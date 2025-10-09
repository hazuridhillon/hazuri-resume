import { Hero } from "@/components/Hero";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { GeometricShapes } from "@/components/GeometricShapes";

const Index = () => {
  return (
    <div className="relative">
      <GeometricShapes />
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Certifications />
    </div>
  );
};

export default Index;
