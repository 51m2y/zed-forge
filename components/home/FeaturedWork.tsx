"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { filters, projects } from "@/data/projects";
import { SectionHeader } from "./SectionHeader";
import { cn } from "@/lib/utils";

export function FeaturedWork() {
  const [active, setActive] = useState("All");

  const visible = active === "All" ? projects : projects.filter((project) => project.filter.includes(active));

  return (
    <section id="work" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Selected Work" title="Projects built to impress clients and win business" />
        
        {/* Animated Filter Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-1.5 rounded-lg border border-ff-border bg-ff-surface/40 p-1 mx-auto max-w-max">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className="focus-ring relative rounded-md px-4 py-2 text-sm font-medium transition-colors"
            >
              {active === filter && (
                <motion.div
                  layoutId="active-filter-tab"
                  className="absolute inset-0 rounded-md bg-ff-blue"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className={cn(
                "relative z-10 transition-colors duration-200",
                active === filter ? "text-white" : "text-ff-muted hover:text-ff-text"
              )}>
                {filter}
              </span>
            </button>
          ))}
        </div>

        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <motion.article
                layout
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="group overflow-hidden rounded-lg border border-ff-border bg-ff-surface transition hover:border-ff-blue"
                style={{ boxShadow: `0 0 0 1px transparent, 0 0 50px ${project.accent}11` }}
              >
                <div className={`grid gap-0 lg:grid-cols-5 ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative min-h-72 overflow-hidden lg:col-span-2">
                    <Image src={project.image} alt={`${project.name} project preview`} fill className="object-cover transition duration-500 group-hover:scale-[1.02]" />
                  </div>
                  <div className="relative p-6 sm:p-8 lg:col-span-3">
                    {project.badge ? <span className="absolute right-6 top-6 rounded-full bg-[#C9A84C] px-3 py-1 text-xs font-bold text-black">{project.badge}</span> : null}
                    <p className="text-sm font-medium" style={{ color: project.accent }}>
                      {project.category}
                    </p>
                    <h3 className="mt-3 font-heading text-3xl font-bold text-ff-text">{project.name}</h3>
                    <p className="mt-4 max-w-2xl leading-7 text-ff-muted">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span key={feature} className="rounded-full border border-ff-border bg-ff-bg px-3 py-1 text-xs text-ff-muted">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs text-ff-muted">
                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring rounded-md bg-ff-blue px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
                      >
                        Live Demo ↗
                      </a>
                      <Link href={`/work/${project.slug}`} className="focus-ring rounded-md border border-ff-border px-4 py-2 text-sm font-semibold text-ff-text hover:bg-ff-surface-2">
                        Case Study →
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
