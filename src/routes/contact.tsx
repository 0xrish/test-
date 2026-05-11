import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Indigrand Technologies" },
      {
        name: "description",
        content:
          "Talk to Indigrand about performance systems, GA4, paid media, GTM, and AI workflows.",
      },
      { property: "og:title", content: "Contact — Indigrand Technologies" },
      { property: "og:description", content: "Let's build systems that deliver results." },
    ],
  }),
  component: () => (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <h1 className="font-display text-5xl">Contact</h1>
    </section>
  ),
});
