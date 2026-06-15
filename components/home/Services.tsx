import { services } from "@/data/services";
import { SectionHeader } from "./SectionHeader";

export function Services() {
  return (
    <section id="services" className="border-y border-ff-border bg-ff-surface/40 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="What We Build" title="Digital solutions for every stage of your business" />
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.name} className="relative rounded-lg border border-ff-border bg-ff-surface p-6 transition hover:border-ff-blue hover:bg-ff-surface-2">
                {service.badge ? <span className="absolute right-5 top-5 rounded-full border border-ff-blue/40 px-3 py-1 text-xs text-ff-cyan">{service.badge}</span> : null}
                <Icon className="text-ff-blue" size={28} />
                <h3 className="mt-6 font-heading text-2xl font-bold text-ff-text">{service.name}</h3>
                <p className="mt-4 leading-7 text-ff-muted">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.examples.map((example) => (
                    <span key={example} className="rounded-full border border-ff-border px-3 py-1 text-xs text-ff-muted">
                      {example}
                    </span>
                  ))}
                </div>
                <a href="/#contact" className="mt-8 inline-flex text-sm font-semibold text-ff-text hover:text-ff-cyan">
                  {service.cta} →
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
