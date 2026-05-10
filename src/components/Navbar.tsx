import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/services", label: "Solutions" },
  { to: "/work", label: "Verticals" },
  { to: "/projects", label: "Industries" },
  { to: "/blog", label: "Impact" },
  { to: "/contact", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="font-display text-xl font-extrabold tracking-tight text-text-primary"
    >
      INDIGRAND
      <span className="ml-1 inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-accent-blue shadow-[0_0_12px_var(--accent-blue)]" />
    </Link>
  );
}

function GetInTouch({ onClick, className }: { onClick?: () => void; className?: string }) {
  return (
    <Link
      to="/contact"
      onClick={onClick}
      className={cn(
        "group inline-flex items-center justify-center rounded-full border border-accent-blue/70 bg-transparent px-5 py-2.5 text-sm font-medium text-accent-blue-light transition-all duration-300",
        "hover:bg-accent-blue hover:text-white hover:shadow-[0_10px_30px_-10px_var(--accent-blue)] hover:-translate-y-0.5",
        className,
      )}
    >
      Get in Touch
    </Link>
  );
}

function NavLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      activeProps={{ className: "text-text-primary" }}
      inactiveProps={{ className: "text-text-muted hover:text-text-primary" }}
      className="group relative px-3 py-2 text-sm transition-colors"
    >
      {({ isActive }) => (
        <>
          {label}
          <span
            className={cn(
              "absolute left-1/2 top-full mt-0.5 h-1 w-1 -translate-x-1/2 rounded-full bg-accent-blue transition-all duration-300",
              isActive
                ? "opacity-100 shadow-[0_0_8px_var(--accent-blue)]"
                : "opacity-0 group-hover:opacity-50",
            )}
          />
        </>
      )}
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/70 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <li key={item.label}>
                <NavLink to={item.to} label={item.label} />
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <GetInTouch />
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-primary lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-background/60 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col border-l border-border bg-background"
            >
              <div className="flex h-16 items-center justify-between px-6">
                <Logo onClick={() => setOpen(false)} />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-primary"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <motion.ul
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
                }}
                className="flex flex-1 flex-col gap-1 px-6 pt-6"
              >
                {NAV.map((item) => (
                  <motion.li
                    key={item.label}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      show: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      activeProps={{ className: "text-accent-blue-light" }}
                      inactiveProps={{ className: "text-text-primary" }}
                      className="font-display block border-b border-border/50 py-4 text-2xl font-bold"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="border-t border-border p-6">
                <GetInTouch onClick={() => setOpen(false)} className="w-full" />
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
