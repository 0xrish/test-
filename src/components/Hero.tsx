import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, TrendingUp } from "lucide-react";

const MARQUEE = [
  "Performance Marketing Consulting",
  "GA4 Setup",
  "WhatsApp Automation",
  "Micro-SaaS",
  "CRM Build",
  "Meta Ads",
  "Google Ads",
  "E-commerce Systems",
  "Lead Generation",
  "Data Analysis",
  "GTM Strategy",
];

import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function AnalyticsMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-md"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-2xl border border-border bg-card/80 p-6 shadow-[0_30px_80px_-20px_rgba(37,99,235,0.4)] backdrop-blur-xl"
      >
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-text-muted">
              Campaign Performance
            </p>
            <p className="mt-1 font-display text-sm font-bold">Last 30 days</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-accent-blue/30 bg-accent-blue/10 px-2 py-1 text-[10px] font-medium text-accent-blue-light">
            <TrendingUp className="h-3 w-3" /> Live
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Sessions", value: "184.2K", delta: "+24.6%" },
            { label: "ROAS", value: "6.4x", delta: "+1.2x" },
            { label: "CVR", value: "3.81%", delta: "+0.42%" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-background/60 p-3"
            >
              <p className="text-[10px] uppercase tracking-wider text-text-muted">
                {s.label}
              </p>
              <p className="mt-1 font-display text-lg font-bold text-text-primary">
                {s.value}
              </p>
              <p className="mt-0.5 text-[10px] font-medium text-emerald-400">{s.delta}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl border border-border bg-background/40 p-3">
          <svg viewBox="0 0 300 90" className="h-24 w-full">
            <defs>
              <linearGradient id="lineFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="lineStroke" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
            </defs>
            <path
              d="M0,70 L30,60 L60,65 L90,45 L120,52 L150,38 L180,42 L210,28 L240,32 L270,18 L300,22 L300,90 L0,90 Z"
              fill="url(#lineFill)"
            />
            <motion.path
              d="M0,70 L30,60 L60,65 L90,45 L120,52 L150,38 L180,42 L210,28 L240,32 L270,18 L300,22"
              fill="none"
              stroke="url(#lineStroke)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ filter: "drop-shadow(0 0 8px rgba(37,99,235,0.7))" }}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
            />
            <motion.circle
              r="4"
              fill="#60A5FA"
              style={{ filter: "drop-shadow(0 0 6px #60A5FA)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, cx: 300, cy: 22 }}
              transition={{ delay: 3, duration: 0.4 }}
            />
          </svg>
        </div>

        <div className="mt-4 flex items-center justify-between text-[11px] text-text-muted">
          <span>Source: GA4 + Ads</span>
          <span className="inline-flex items-center gap-1 text-accent-blue-light">
            View report <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </motion.div>

      {/* Floating mini badge */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -left-6 -bottom-6 hidden rounded-xl border border-border bg-card/90 p-3 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(249,115,22,0.4)] sm:block"
      >
        <p className="text-[10px] uppercase tracking-wider text-text-muted">CAC ↓</p>
        <p className="font-display text-base font-bold text-accent-orange">−38%</p>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      {/* Grid lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* Glowing orbs */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 60, -20, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-32 -left-32 -z-10 h-[520px] w-[520px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(37,99,235,0.15), transparent 60%)",
          filter: "blur(60px)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -80, 40, 0], y: [0, 50, -30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-40 -right-32 -z-10 h-[600px] w-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.10), transparent 60%)",
          filter: "blur(70px)",
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

      <div className="mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 py-24">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
            }}
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-text-muted">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-blue" />
                </span>
                Technology Consulting · Headquartered in Nagpur · Serving Globally
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display mt-6 text-5xl leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              We Build Systems
              <br />
              That <span className="text-gradient-blue">Grow Businesses.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-[17px] leading-relaxed text-text-muted sm:text-[18px]"
            >
              Indigrand Technologies is a technology consulting company helping D2C and B2B
              brands grow through performance websites, data systems, AI-powered marketing,
              and end-to-end digital infrastructure.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-blue px-6 py-3 text-sm font-medium text-white shadow-[0_10px_40px_-10px_var(--accent-blue)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[oklch(0.48_0.22_264)] hover:shadow-[0_18px_50px_-12px_var(--accent-blue)]"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border glass px-6 py-3 text-sm font-medium text-text-primary transition-all duration-300 hover:border-accent-blue/50 hover:text-accent-blue-light"
              >
                See Our Work
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
              {[
                "GA4 → Revenue Attribution",
                "Performance Websites",
                "AI-Driven Ad Systems",
              ].map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs font-medium text-text-muted"
                >
                  <span className="h-1 w-1 rounded-full bg-accent-blue" />
                  {c}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <div className="hidden justify-end lg:flex">
            <AnalyticsMockup />
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-border bg-background/40 py-4 backdrop-blur-sm">
        <div
          className="flex w-max animate-[marquee_45s_linear_infinite] gap-10 whitespace-nowrap text-xs uppercase tracking-[0.25em] text-text-muted"
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
