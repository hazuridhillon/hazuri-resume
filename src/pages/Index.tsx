import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { GeometricShapes } from "@/components/GeometricShapes";

const Index = () => {
  return (
    <div className="relative">
      <GeometricShapes />
      <Navigation />
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
};

export default Index;
