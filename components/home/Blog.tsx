import { SectionHeader } from "./SectionHeader";

const articles = [
  ["Business", "Why Most Lusaka Businesses Still Don't Have a Website Worth Showing", "4 min read"],
  ["Development", "The AI-Assisted Workflow I Use to Ship Projects 3x Faster", "5 min read"],
  ["Portfolio", "What I Learned Building 4 Demo Sites in One Month", "6 min read"]
];

export function Blog() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Insights" title="Thinking out loud about web development and business" />
        <div className="grid gap-5 lg:grid-cols-3">
          {articles.map(([category, title, readTime]) => (
            <article key={title} className="rounded-lg border border-ff-border bg-ff-surface p-6 transition hover:border-ff-blue hover:bg-ff-surface-2">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-ff-cyan">{category}</span>
              <h3 className="mt-4 font-heading text-xl font-bold leading-7 text-ff-text">{title}</h3>
              <p className="mt-4 text-sm text-ff-muted">{readTime}</p>
              <a
                href="https://www.linkedin.com/in/chanda-simbaya-451947270"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex text-sm font-semibold text-ff-text hover:text-ff-cyan"
              >
                Read on LinkedIn ↗
              </a>
            </article>
          ))}
        </div>
        <a
          href="https://www.linkedin.com/in/chanda-simbaya-451947270"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-8 inline-flex text-sm font-semibold text-ff-cyan"
        >
          More on LinkedIn →
        </a>
      </div>
    </section>
  );
}
