"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const reduced = useReducedMotion();
  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="hero" className="hero-grid relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: reduced ? 0 : 0.1 }}
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        <motion.div
          variants={item}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-ff-border bg-ff-surface/70 px-4 py-2 text-sm text-ff-text backdrop-blur"
        >
          <span className="pulse-dot" /> Available for new projects
        </motion.div>
        <motion.h1 variants={item} className="mt-8 font-heading text-5xl font-extrabold leading-[1.03] text-ff-text sm:text-6xl lg:text-7xl">
          We design and build modern websites and web applications for growing businesses in Lusaka.
        </motion.h1>
        <motion.p variants={item} className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-ff-muted">
          We&apos;re zed-forge, a web development studio based in Lusaka, Zambia. We work with local businesses to design and build websites, web applications, and SaaS platforms that look world-class and actually drive results.
        </motion.p>
        <motion.div variants={item} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#work" className="focus-ring rounded-md bg-ff-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
            See Our Work
          </a>
          <a href="#contact" className="focus-ring rounded-md border border-ff-border bg-ff-surface px-5 py-3 text-sm font-semibold text-ff-text transition hover:border-ff-blue hover:bg-ff-surface-2">
            Start a Project →
          </a>
        </motion.div>
        <motion.p variants={item} className="mt-6 text-sm text-ff-muted">
          4 projects shipped · 3 industries served · Lusaka-based, globally capable
        </motion.p>
      </motion.div>
    </section>
  );
}
