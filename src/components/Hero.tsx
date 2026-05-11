import { Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const MARQUEE = [
  "AI Automation",
  "Solar Infrastructure",
  "Healthcare CRM",
  "SaaS Platforms",
  "Performance Marketing",
  "Enterprise Tech",
  "Growth Systems",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      {/* Animated grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 80, -30, 0], y: [0, -50, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-40 -left-32 -z-10 h-[560px] w-[560px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.22), transparent 60%)",
          filter: "blur(70px)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -90, 50, 0], y: [0, 60, -30, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-44 -right-40 -z-10 h-[640px] w-[640px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.16), transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, 40, -40, 0], y: [0, 30, -50, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(96,165,250,0.10), transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
          }}
          className="flex flex-col items-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border glass px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-blue" />
              </span>
              Global Technology Conglomerate · Est. India
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display mt-7 max-w-5xl text-5xl leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          >
            Where Technology,
            <br />
            Infrastructure & Intelligence
            <br />
            <span className="text-gradient-blue">Converge.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-[17px] leading-relaxed text-text-muted sm:text-[18px]"
          >
            Indigrand Technologies powers the next generation of enterprises, healthcare systems,
            cities, and digital ecosystems — built for scale, designed for impact.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/work"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-blue px-7 py-3.5 text-sm font-medium text-white shadow-[0_10px_40px_-10px_var(--accent-blue)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[oklch(0.48_0.22_264)] hover:shadow-[0_18px_50px_-12px_var(--accent-blue)]"
            >
              Explore Our Verticals
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border glass px-7 py-3.5 text-sm font-medium text-text-primary transition-all duration-300 hover:border-accent-blue/60 hover:text-accent-blue-light"
            >
              Get in Touch
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-16 flex flex-col items-center gap-2 text-text-muted"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-full border border-border p-1.5"
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden border-t border-border bg-background/40 py-4 backdrop-blur-sm">
        <div
          className="flex w-max animate-[marquee_40s_linear_infinite] gap-10 whitespace-nowrap text-xs uppercase tracking-[0.25em] text-text-muted"
          style={{ paddingLeft: "2.5rem" }}
        >
          {[...MARQUEE, ...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-10">
              {item}
              <span className="text-accent-blue/60">·</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
