import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Indigrand Technologies" },
      {
        name: "description",
        content: "Indigrand-built products: IndiaAds, Medino, and Indigrand Solar.",
      },
      { property: "og:title", content: "Projects — Indigrand Technologies" },
      { property: "og:description", content: "Products we built and operate." },
    ],
  }),
  component: () => (
    <section className="mx-auto max-w-7xl px-6 py-32">
      <h1 className="font-display text-5xl">Projects</h1>
    </section>
  ),
});
