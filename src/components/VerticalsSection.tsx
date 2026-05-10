import { motion, type Variants } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Cpu,
  Globe,
  Layers,
  Sun,
  Target,
  type LucideIcon,
} from "lucide-react";
import { GlowCard } from "./GlowCard";
import { SectionHeader } from "./SectionHeader";

type Vertical = {
  name: string;
  icon: LucideIcon;
  color: string;
  tagline: string;
  description: string;
};

const VERTICALS: Vertical[] = [
  {
    name: "IndiaAds",
    icon: Target,
    color: "#2563EB",
    tagline: "Performance Marketing at Scale",
    description:
      "India's growth marketing engine — AI-powered campaigns, performance media, and data-driven brand building for modern businesses.",
  },
  {
    name: "Medino",
    icon: Activity,
    color: "#10B981",
    tagline: "Healthcare CRM Ecosystem",
    description:
      "Intelligent healthcare infrastructure — CRM, patient journeys, clinic automation, and health-tech platforms built for modern care.",
  },
  {
    name: "Indigrand Solar",
    icon: Sun,
    color: "#F97316",
    tagline: "Solar & Sustainability Infrastructure",
    description:
      "Future-ready solar systems for enterprises, industrial parks, and residential townships — clean energy at scale.",
  },
  {
    name: "AI Automation Systems",
    icon: Cpu,
    color: "#8B5CF6",
    tagline: "Intelligent Process Automation",
    description:
      "End-to-end AI workflows, LLM integrations, robotic process automation, and custom intelligence layers for enterprise operations.",
  },
  {
    name: "Technology Solutions",
    icon: Globe,
    color: "#06B6D4",
    tagline: "Enterprise Digital Infrastructure",
    description:
      "Full-stack technology architecture — platforms, APIs, cloud systems, and enterprise software built for the future.",
  },
  {
    name: "SaaS Ecosystem",
    icon: Layers,
    color: "#EC4899",
    tagline: "Scalable Software Platforms",
    description:
      "White-label and custom SaaS products designed for vertical markets — built to scale, engineered to retain.",
  },
];

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function VerticalsSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          align="center"
          overline="The Indigrand Ecosystem"
          title="Our Verticals"
          subtitle="Six focused verticals. One unified vision."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {VERTICALS.map((v) => {
            const Icon = v.icon;
            return (
              <motion.div key={v.name} variants={cardVariant}>
                <GlowCard
                  accentColor={v.color}
                  className="group relative h-full overflow-hidden p-7 hover:-translate-y-1"
                >
                  {/* Top accent line */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${v.color}, transparent)`,
                      boxShadow: `0 0 16px ${v.color}80`,
                    }}
                  />

                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl border"
                    style={{
                      borderColor: `${v.color}40`,
                      background: `${v.color}14`,
                      boxShadow: `0 0 24px -6px ${v.color}80, inset 0 0 12px ${v.color}20`,
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: v.color }} />
                  </div>

                  <h3 className="font-display mt-6 text-2xl font-bold tracking-tight text-text-primary">
                    {v.name}
                  </h3>
                  <p
                    className="mt-1.5 text-[13px] font-medium uppercase tracking-[0.12em]"
                    style={{ color: v.color }}
                  >
                    {v.tagline}
                  </p>

                  <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
                    {v.description}
                  </p>

                  <div
                    className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium opacity-0 transition-all duration-300 group-hover:opacity-100"
                    style={{ color: v.color }}
                  >
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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
