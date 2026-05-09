import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";

const METRICS = [
  { value: 107, suffix: "×", label: "ROAS on a single campaign" },
  { value: 100, prefix: "₹", suffix: "Cr+", label: "Revenue driven for clients" },
  { value: 300, suffix: "+", label: "Campaigns executed" },
  { value: 8, suffix: "+", label: "Industries served" },
];

export function ResultsBar() {
  return (
    <section className="relative bg-card">
      {/* Glow lines */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(37,99,235,0.6), transparent)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(37,99,235,0.6), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-medium uppercase tracking-[0.3em] text-text-muted"
        >
          What We've Delivered
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="mt-10 grid grid-cols-2 gap-y-12 gap-x-6 md:grid-cols-4"
        >
          {METRICS.map((m) => (
            <motion.div
              key={m.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
                },
              }}
              className="text-center"
            >
              <AnimatedCounter
                to={m.value}
                prefix={m.prefix}
                suffix={m.suffix}
                duration={1.8}
                className="font-display text-5xl font-extrabold tracking-tight text-accent-blue-light sm:text-6xl"
              />
              <p className="mt-3 text-sm text-text-muted">{m.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
