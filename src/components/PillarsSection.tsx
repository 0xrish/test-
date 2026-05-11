import { motion } from "framer-motion";
import { Target, BarChart3, Settings2 } from "lucide-react";
import { GlowCard } from "./GlowCard";
import { SectionHeader } from "./SectionHeader";

const PILLARS = [
  {
    icon: Target,
    title: "Websites Built to Convert",
    body: "Not just beautiful — built with GA4 tracking, heatmaps, CRO principles, and performance benchmarks from day one.",
  },
  {
    icon: BarChart3,
    title: "Data From Your Past, Applied to Your Future",
    body: "We audit your historical campaign data, find what was working (and what was wasting budget), and build a strategy on real signals — not assumptions.",
  },
  {
    icon: Settings2,
    title: "Technology as the Delivery Mechanism",
    body: "CRMs, WhatsApp automation, Micro-SaaS tools, AI ad systems — we build the infrastructure that makes your marketing team 10× more effective.",
  },
];

export function PillarsSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(ellipse at top, rgba(37,99,235,0.08), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <SectionHeader
            align="center"
            overline="Why Indigrand"
            title={
              <>
                Why Brands That Care About <span className="text-gradient-blue">Results</span>{" "}
                Choose Us
              </>
            }
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
          }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
                  },
                }}
              >
                <GlowCard className="h-full">
                  <div className="flex h-full flex-col">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent-blue/30 bg-accent-blue/10 text-accent-blue-light shadow-[0_0_30px_-8px_var(--accent-blue)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display mt-6 text-2xl font-extrabold leading-tight text-text-primary">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-text-muted">{p.body}</p>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
