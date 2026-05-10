import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { ResultsBar } from "@/components/ResultsBar";
import { AboutSection } from "@/components/AboutSection";
import { PillarsSection } from "@/components/PillarsSection";
import { VerticalsSection } from "@/components/VerticalsSection";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <ResultsBar />
      <AboutSection />
      <VerticalsSection />
      <PillarsSection />
    </>
  );
}
