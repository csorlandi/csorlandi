import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProjectsSection />
    </main>
  );
}
