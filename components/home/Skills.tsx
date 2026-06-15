"use client";

import { motion } from "framer-motion";
import { learning, skillBars, stackGroups } from "@/data/skills";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section className="border-y border-ff-border bg-ff-surface/40 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Technical Skills" title="The tools we build with" />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            {skillBars.map(([name, value, level]) => (
              <div key={name}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-ff-text">{name}</span>
                  <span className="text-ff-muted">{level}</span>
                </div>
                <div className="h-2 rounded-full bg-ff-border">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${value}%` }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-gradient-to-r from-ff-blue to-ff-cyan"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {stackGroups.map((group) => (
              <div key={group.title} className={`rounded-lg border bg-ff-surface p-5 ${group.featured ? "border-ff-blue shadow-glow" : "border-ff-border"}`}>
                <h3 className="font-heading text-sm font-bold text-ff-text">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-ff-border bg-ff-bg px-3 py-1 font-mono text-xs text-ff-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="rounded-lg border border-ff-border bg-ff-surface p-5 sm:col-span-2">
              <span className="text-sm text-ff-muted">Currently learning: </span>
              <span className="text-sm font-medium text-ff-text">{learning.join(" · ")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
