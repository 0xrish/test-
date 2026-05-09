import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Indigrand Technologies" },
      {
        name: "description",
        content:
          "Performance websites, GA4 infrastructure, paid media consulting, GTM strategy, Micro-SaaS, WhatsApp automation and AI-powered marketing workflows.",
      },
      { property: "og:title", content: "Services — Indigrand Technologies" },
      {
        property: "og:description",
        content: "End-to-end consulting from GA4 setup to AI-driven ad systems.",
      },
    ],
  }),
  component: () => (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <h1 className="font-display text-5xl">Services</h1>
    </section>
  ),
});
