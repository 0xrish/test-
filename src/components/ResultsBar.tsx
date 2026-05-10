import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import { GlowCard } from "./GlowCard";

const METRICS = [
  { value: 12, suffix: "+", label: "Business Verticals" },
  { value: 500, prefix: "₹", suffix: "Cr+", label: "Revenue Ecosystem" },
  { value: 8, suffix: "+", label: "Industries Served" },
  { value: 3, suffix: "", label: "Countries & Growing" },
];

export function ResultsBar() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#0A0A12" }}
    >
      {/* Top + bottom glow lines */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(37,99,235,0.7), transparent)",
          boxShadow: "0 0 24px rgba(37,99,235,0.4)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(37,99,235,0.7), transparent)",
          boxShadow: "0 0 24px rgba(37,99,235,0.4)",
        }}
      />

      {/* Animated dot grid */}
      <motion.div
        aria-hidden
        animate={{ backgroundPosition: ["0px 0px", "32px 32px"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(96,165,250,0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display mx-auto max-w-3xl text-center text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl"
        >
          Built for Scale.{" "}
          <span className="text-gradient-blue">Trusted for Results.</span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
          }}
          className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4"
        >
          {METRICS.map((m) => (
            <motion.div
              key={m.label}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
                },
              }}
            >
              <GlowCard className="h-full text-center">
                <AnimatedCounter
                  to={m.value}
                  prefix={m.prefix}
                  suffix={m.suffix}
                  duration={2}
                  className="font-display text-5xl font-extrabold tracking-tight text-accent-blue-light sm:text-6xl"
                />
                <p className="mt-3 text-sm text-text-muted">{m.label}</p>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
