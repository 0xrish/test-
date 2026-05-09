import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — Indigrand Technologies" },
      {
        name: "description",
        content: "Past results and case studies from D2C and B2B brands we partner with.",
      },
      { property: "og:title", content: "Our Work — Indigrand Technologies" },
      { property: "og:description", content: "Real results from real campaigns." },
    ],
  }),
  component: () => (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <h1 className="font-display text-5xl">Our Work</h1>
    </section>
  ),
});
