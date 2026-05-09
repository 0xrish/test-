import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border glass">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-display text-lg font-extrabold tracking-tight">
          Indi<span className="text-accent-blue-light">grand</span>
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                activeProps={{ className: "text-text-primary bg-white/5" }}
                inactiveProps={{ className: "text-text-muted" }}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-full px-4 py-2 text-sm transition-colors hover:text-text-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="hidden rounded-full bg-accent-blue px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-blue-light hover:text-background md:inline-flex"
        >
          Talk to us
        </Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-text-muted">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p>
            <span className="font-display font-extrabold text-text-primary">Indigrand</span> Technologies — Nagpur, India
          </p>
          <p>© {new Date().getFullYear()} Indigrand Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function PageTransition({ children, k }: { children: ReactNode; k: string }) {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={k}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex-1"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}

export function Layout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="flex min-h-screen flex-col bg-background text-text-primary">
      <Navbar />
      <PageTransition k={pathname}>
        <Outlet />
      </PageTransition>
      <Footer />
    </div>
  );
}
