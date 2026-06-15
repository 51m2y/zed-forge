"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ZedForgeBadge } from "@/components/shared/ZedForgeBadge";
import { CaseStudy } from "@/data/caseStudies";

export function CaseStudyLayout({ study }: { study: CaseStudy }) {
  return (
    <>
      <Navbar />
      <main id="main" className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-6xl">
          <Link href="/#work" className="focus-ring inline-flex items-center gap-2 rounded-md text-sm text-ff-muted hover:text-ff-text">
            <ArrowLeft size={16} /> Back to Work
          </Link>
          <header className="mt-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ff-cyan">{study.category}</p>
            <h1 className="mt-4 font-heading text-5xl font-extrabold text-ff-text sm:text-6xl">{study.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ff-muted">{study.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {study.stack.map((item) => (
                <span key={item} className="rounded-full border border-ff-border bg-ff-surface px-3 py-1 font-mono text-xs text-ff-muted">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-md bg-ff-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                View Live Demo <ExternalLink size={15} />
              </a>
              <a
                href="https://github.com/51m2y"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-md border border-ff-border px-4 py-2 text-sm font-semibold text-ff-text"
              >
                View on GitHub <ExternalLink size={15} />
              </a>
            </div>
          </header>
          <div className="relative mt-10 min-h-[360px] overflow-hidden rounded-lg border border-ff-border shadow-glow">
            <Image src={study.image} alt={`${study.title} hero screenshot`} fill className="object-cover" priority />
          </div>
          <section className="mt-8 grid gap-4 md:grid-cols-3">
            {study.meta.map((item) => (
              <div key={item.label} className="rounded-lg border border-ff-border bg-ff-surface p-5">
                <p className="text-sm text-ff-muted">{item.label}</p>
                <p className="mt-2 font-heading text-lg font-bold text-ff-text">{item.value}</p>
              </div>
            ))}
          </section>
          <section className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="font-heading text-3xl font-bold text-ff-text">The Challenge</h2>
            <div className="space-y-4 text-base leading-8 text-ff-muted">
              {study.challenge.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
          <section className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="font-heading text-3xl font-bold text-ff-text">The Approach</h2>
            <ul className="space-y-3 text-base leading-8 text-ff-muted">
              {study.approach.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          </section>
          <section className="mt-16">
            <h2 className="font-heading text-3xl font-bold text-ff-text">Key Features</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {study.features.map((feature) => (
                <div key={feature.name} className="rounded-lg border border-ff-border bg-ff-surface p-5">
                  <h3 className="font-heading font-bold text-ff-text">{feature.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-ff-muted">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mt-16 rounded-lg border border-ff-blue/40 bg-ff-blue/10 p-6">
            <h2 className="font-heading text-2xl font-bold text-ff-text">What This Demonstrates</h2>
            <p className="mt-3 leading-7 text-ff-muted">{study.demonstrates}</p>
          </section>
          <section className="mt-16">
            <h2 className="font-heading text-3xl font-bold text-ff-text">Screenshots / Mockups</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {study.mockups.map((image, index) => (
                <div key={image} className="relative min-h-64 overflow-hidden rounded-lg border border-ff-border">
                  <Image src={image} alt={`${study.title} mockup ${index + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </section>
          <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ff-border pt-8 sm:flex-row sm:items-center">
            <ZedForgeBadge />
            <Link href={`/work/${study.next}`} className="focus-ring rounded-md border border-ff-border px-4 py-2 text-sm font-semibold text-ff-text hover:bg-ff-surface-2">
              Next project →
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
