"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/shared/Logo";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  ["Home", "hero"],
  ["Work", "work"],
  ["Services", "services"],
  ["About", "about"],
  ["Contact", "contact"]
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [shortcutText, setShortcutText] = useState("Ctrl+K");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      setShortcutText(isMac ? "⌘K" : "Ctrl+K");
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -55% 0px" }
    );
    links.forEach(([, id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const openSearch = () => {
    const event = new KeyboardEvent("keydown", {
      key: "k",
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });
    document.dispatchEvent(event);
  };

  const nav = (
    <>
      {links.map(([label, id]) => (
        <a
          key={id}
          href={`/#${id}`}
          onClick={() => setOpen(false)}
          className={cn(
            "focus-ring relative rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:text-ff-text dark:hover:text-ff-text",
            active === id ? "text-ff-text" : "text-ff-muted"
          )}
        >
          {active === id && (
            <motion.span
              layoutId="nav-active-pill"
              className="absolute inset-0 rounded-md bg-ff-surface-2"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative z-10">{label}</span>
        </a>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled ? "border-b border-ff-border bg-ff-bg/80 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring rounded-md text-ff-text" aria-label="zed-forge home">
          <Logo showTagline size="md" />
        </Link>
        <nav className="hidden items-center gap-5 md:flex">{nav}</nav>
        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={openSearch}
            className="focus-ring mr-1 flex items-center gap-2 rounded-md border border-ff-border bg-ff-surface px-3 py-1.5 text-xs text-ff-muted transition hover:border-ff-blue hover:text-ff-text"
            aria-label="Open command palette"
          >
            <Search size={13} />
            <span>Search</span>
            <kbd className="pointer-events-none inline-flex h-4 select-none items-center gap-0.5 rounded border border-ff-border bg-ff-surface-2 px-1 font-mono text-[9px] font-medium text-ff-muted">
              {shortcutText}
            </kbd>
          </button>
          <ThemeToggle />
          <a
            href="/#contact"
            className="focus-ring rounded-md bg-ff-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Start a Project →
          </a>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={openSearch}
            className="focus-ring rounded-md p-2 text-ff-text"
            aria-label="Search"
          >
            <Search size={22} />
          </button>
          <button
            onClick={() => setOpen((value) => !value)}
            className="focus-ring rounded-md p-2 text-ff-text"
            aria-label="Open menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="fixed inset-x-0 top-16 min-h-[calc(100vh-4rem)] border-t border-ff-border bg-ff-bg/95 p-6 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-4 text-lg">{nav}</nav>
            <div className="mt-8 flex items-center justify-between border-t border-ff-border pt-6">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setOpen(false);
                    openSearch();
                  }}
                  className="focus-ring flex items-center gap-2 rounded-md border border-ff-border bg-ff-surface px-3 py-2 text-sm text-ff-muted transition hover:border-ff-blue hover:text-ff-text"
                >
                  <Search size={16} />
                  <span>Search</span>
                </button>
                <ThemeToggle />
              </div>
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md bg-ff-blue px-4 py-2 text-sm font-semibold text-white"
              >
                Start a Project →
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
