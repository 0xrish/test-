import { motion, type Variants } from "framer-motion";
import { TagPill } from "./TagPill";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const TAGS = [
  "Systems Thinking",
  "Scalable Infrastructure",
  "AI-First",
  "India to World",
];

function NetworkVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto aspect-square w-full max-w-md"
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(37,99,235,0.25), transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      {/* Stacked glass cards */}
      {[
        { rotate: -8, x: -28, y: 30, delay: 0, opacity: 0.55 },
        { rotate: -3, x: -10, y: 12, delay: 0.1, opacity: 0.75 },
        { rotate: 4, x: 14, y: -6, delay: 0.2, opacity: 1 },
      ].map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: card.opacity, y: card.y }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: card.delay, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-6 inset-y-10 rounded-2xl border border-accent-blue/30 bg-card/70 backdrop-blur-xl"
          style={{
            transform: `translate(${card.x}px, 0) rotate(${card.rotate}deg)`,
            boxShadow:
              "0 30px 80px -20px rgba(37,99,235,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {i === 2 && (
            <div className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
                  Indigrand Network
                </span>
                <span className="inline-flex h-2 w-2 rounded-full bg-accent-blue shadow-[0_0_10px_var(--accent-blue)]" />
              </div>

              {/* SVG nodes */}
              <svg viewBox="0 0 200 160" className="mt-4 h-full w-full">
                <defs>
                  <linearGradient id="netLine" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                {[
                  ["100,20", "30,70"],
                  ["100,20", "170,70"],
                  ["100,20", "100,90"],
                  ["30,70", "70,140"],
                  ["170,70", "130,140"],
                  ["100,90", "70,140"],
                  ["100,90", "130,140"],
                ].map(([a, b], idx) => {
                  const [ax, ay] = a.split(",").map(Number);
                  const [bx, by] = b.split(",").map(Number);
                  return (
                    <motion.line
                      key={idx}
                      x1={ax}
                      y1={ay}
                      x2={bx}
                      y2={by}
                      stroke="url(#netLine)"
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.4 + idx * 0.08 }}
                    />
                  );
                })}
                {[
                  [100, 20],
                  [30, 70],
                  [170, 70],
                  [100, 90],
                  [70, 140],
                  [130, 140],
                ].map(([cx, cy], idx) => (
                  <motion.circle
                    key={idx}
                    cx={cx}
                    cy={cy}
                    r={idx === 0 ? 5 : 3.5}
                    fill={idx === 0 ? "#60A5FA" : "#2563EB"}
                    style={{
                      filter:
                        idx === 0
                          ? "drop-shadow(0 0 8px #60A5FA)"
                          : "drop-shadow(0 0 4px #2563EB)",
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.08, duration: 0.4 }}
                  />
                ))}
              </svg>
            </div>
          )}
        </motion.div>
      ))}

      {/* Floating dots */}
      {[
        { x: "8%", y: "12%", size: 6, color: "#60A5FA", delay: 0 },
        { x: "92%", y: "20%", size: 4, color: "#F97316", delay: 1 },
        { x: "85%", y: "82%", size: 5, color: "#60A5FA", delay: 2 },
        { x: "12%", y: "88%", size: 3, color: "#2563EB", delay: 1.5 },
      ].map((d, i) => (
        <motion.span
          key={i}
          aria-hidden
          animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: d.delay,
          }}
          className="absolute rounded-full"
          style={{
            left: d.x,
            top: d.y,
            width: d.size,
            height: d.size,
            background: d.color,
            boxShadow: `0 0 12px ${d.color}`,
          }}
        />
      ))}
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
          }}
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
            Our Story
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="font-display mt-6 text-4xl leading-[1.05] sm:text-5xl md:text-[3.5rem]"
          >
            A New Kind of{" "}
            <span className="text-gradient-blue">Technology Ecosystem</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-[16px] leading-relaxed text-text-muted sm:text-[17px]"
          >
            Indigrand Technologies was born from a singular belief — that the
            future belongs to companies that can think in systems, execute at
            scale, and grow without limits. We are not a service provider. We
            are a technology ecosystem. Across AI, infrastructure, healthcare,
            marketing, and solar energy, we build the platforms and systems
            that define the next generation of Indian and global enterprise.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-[16px] leading-relaxed text-text-muted sm:text-[17px]"
          >
            From automating operations to building SaaS platforms, from solar
            grids to healthcare CRM — Indigrand is where technology meets
            transformation.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <TagPill key={t}>{t}</TagPill>
            ))}
          </motion.div>
        </motion.div>

        <div className="flex justify-center lg:justify-end">
          <NetworkVisual />
        </div>
      </div>
    </section>
  );
}
