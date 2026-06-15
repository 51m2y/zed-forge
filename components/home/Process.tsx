"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "./SectionHeader";

const steps = [
  ["01", "Discovery", "We talk about your business, goals, and what you need. We ask the right questions so nothing gets built twice."],
  ["02", "Design & Plan", "We map out the structure, pages, and user flow before writing a single line of code."],
  ["03", "Build", "We build fast using a professional AI-assisted workflow, delivering clean, maintainable code on a clear timeline."],
  ["04", "Launch & Support", "We deploy, test across devices, and hand over everything you need to manage your site confidently."]
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="How We Work" title="A clear process. No surprises." />
        <div ref={containerRef} className="relative grid gap-5 lg:grid-cols-4">
          {/* Animated Dotted Line */}
          <div className="hidden lg:block absolute left-0 right-0 top-12 h-px z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.1 }}
              className="h-full w-full origin-left border-t border-dashed border-ff-border"
            />
          </div>

          {steps.map(([number, title, description], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="relative rounded-lg border border-ff-border bg-ff-bg p-6 z-10 transition hover:border-ff-blue hover:bg-ff-surface-2"
            >
              <div className="font-heading text-5xl font-bold text-ff-muted/40">{number}</div>
              <h3 className="mt-5 font-heading text-xl font-bold text-ff-text">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-ff-muted">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
