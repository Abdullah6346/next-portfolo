import Navbar from "@/app/Components/Navbar";
import Hero from "@/app/Components/Hero";
import TechStack from "@/app/Components/TechStack";
import Projects from "@/app/Components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <TechStack />
      <Projects />
    </>
  );
}
