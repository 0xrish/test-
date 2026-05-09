import { Outlet, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { Navbar } from "./Navbar";

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-text-muted">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p>
            <span className="font-display font-extrabold text-text-primary">Indigrand</span>{" "}
            Technologies — Nagpur, India
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
