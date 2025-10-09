import { Hero } from "@/components/Hero";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { GeometricShapes } from "@/components/GeometricShapes";

const Index = () => {
  return (
    <div className="relative">
      <GeometricShapes />
      <Hero />
      <Education />
      <Experience />
      <Skills />
    </div>
  );
};

export default Index;
