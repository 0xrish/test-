import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <SectionHeader
        overline="Indigrand Technologies"
        title={<>Foundation ready. <span className="text-gradient-blue">Content next.</span></>}
        subtitle="Design system, layout, and reusable components are wired up. Pages will be filled in upcoming prompts."
      />
    </section>
  );
}
