import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Indigrand Technologies" },
      {
        name: "description",
        content: "Insights on performance marketing, GA4, GTM strategy, and AI-driven growth systems.",
      },
      { property: "og:title", content: "Blog — Indigrand Technologies" },
      { property: "og:description", content: "Field notes from the consulting trenches." },
    ],
  }),
  component: () => (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <h1 className="font-display text-5xl">Blog</h1>
    </section>
  ),
});
