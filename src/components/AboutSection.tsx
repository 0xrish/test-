import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { TagPill } from "./TagPill";
import { ArrowUpRight, Activity, Database, Sparkles } from "lucide-react";

function StackedDashboard() {
  return (
    <div className="relative mx-auto h-[460px] w-full max-w-md">
      {/* Background card */}
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -3 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        className="absolute right-2 top-6 h-72 w-[88%] rounded-2xl border border-accent-blue/20 bg-card/60 p-5 backdrop-blur-xl shadow-[0_0_60px_-20px_rgba(37,99,235,0.5)]"
      >
        <div className="flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
            Funnel · Last 90d
          </p>
          <span className="rounded-full border border-border bg-background/60 px-2 py-0.5 text-[10px] text-accent-blue-light">
            GA4
          </span>
        </div>
        <div className="mt-5 space-y-2.5">
          {[
            { label: "Sessions", w: "100%", v: "412K" },
            { label: "Add to Cart", w: "62%", v: "255K" },
            { label: "Checkout", w: "31%", v: "127K" },
            { label: "Purchase", w: "14%", v: "57.6K" },
          ].map((row) => (
            <div key={row.label}>
              <div className="flex items-center justify-between text-[11px] text-text-muted">
                <span>{row.label}</span>
                <span className="text-text-primary">{row.v}</span>
              </div>
              <div className="mt-1 h-2 overflow-hidden rounded-full bg-background/60">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: row.w }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-blue-light"
                  style={{ boxShadow: "0 0 12px rgba(96,165,250,0.6)" }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Mid card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
        className="absolute left-0 top-24 w-[78%] rounded-2xl border border-border bg-card/85 p-5 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
      >
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-accent-blue/15 text-accent-blue-light">
            <Activity className="h-3.5 w-3.5" />
          </span>
          <p className="text-xs font-medium text-text-primary">Realtime ROAS</p>
        </div>
        <p className="mt-3 font-display text-3xl font-extrabold text-text-primary">
          6.4<span className="text-accent-blue-light">x</span>
        </p>
        <p className="mt-1 text-[10px] text-emerald-400">▲ 1.2x vs last 7 days</p>
        <div className="mt-4 grid grid-cols-7 items-end gap-1.5">
          {[40, 55, 38, 62, 70, 58, 88].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.05 }}
              className="w-full rounded-sm bg-gradient-to-t from-accent-blue/30 to-accent-blue-light"
              style={{ minHeight: 8 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-4 right-4 rounded-xl border border-accent-orange/30 bg-card/90 p-3 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(249,115,22,0.5)]"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-accent-orange" />
          <p className="text-[10px] uppercase tracking-wider text-text-muted">
            AI Optimization
          </p>
        </div>
        <p className="mt-1.5 font-display text-base font-bold text-text-primary">
          CAC <span className="text-accent-orange">−38%</span>
        </p>
      </motion.div>

      {/* Floating numbers */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-2 top-0 rounded-lg border border-border bg-card/80 px-3 py-2 backdrop-blur-md"
      >
        <div className="flex items-center gap-1.5 text-[11px]">
          <Database className="h-3 w-3 text-accent-blue-light" />
          <span className="text-text-muted">1.2M events / day</span>
        </div>
      </motion.div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <SectionHeader
              overline="We Are Not An Agency"
              title={
                <>
                  A Technology Company
                  <br />
                  That Happens to{" "}
                  <span className="text-gradient-blue">Do Marketing.</span>
                </>
              }
            />

            <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-text-muted sm:text-[17px]">
              <p>
                Most agencies run your ads and send you a report. We build the systems
                underneath — the tracking infrastructure, the automation layers, the
                data pipelines — so your marketing actually compounds over time.
              </p>
              <p>
                We work with D2C and B2B brands globally, starting with data from what's
                already happened, finding what works, and scaling it with technology.
                From GA4 to WhatsApp flows to Micro-SaaS tools — we are end-to-end.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Systems Thinking",
                "Data-First",
                "AI-Powered",
                "Consulting, Not Agency",
              ].map((t) => (
                <TagPill key={t}>{t}</TagPill>
              ))}
            </div>

            <a
              href="/services"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-accent-blue-light hover:text-text-primary"
            >
              How we work <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          <div className="relative">
            {/* Glow behind dashboard */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(circle at 60% 50%, rgba(37,99,235,0.18), transparent 65%)",
                filter: "blur(40px)",
              }}
            />
            <StackedDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
