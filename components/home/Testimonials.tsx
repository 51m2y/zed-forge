"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "./SectionHeader";

export function Testimonials() {
  return (
    <section className="border-y border-ff-border bg-ff-surface/40 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Client Feedback" title="What clients say" />
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.person}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-lg border border-ff-border border-l-4 border-l-ff-blue bg-ff-surface p-6"
            >
              <blockquote className="font-heading text-lg italic leading-8 text-ff-text">“{item.quote}”</blockquote>
              <p className="mt-6 font-semibold text-ff-text">— {item.person}</p>
              <p className="mt-1 text-sm text-ff-muted">{item.role}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
