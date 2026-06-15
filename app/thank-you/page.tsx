import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { projects } from "@/data/projects";

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="grid min-h-screen place-items-center px-4 py-28 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-2xl text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-ff-green text-3xl font-bold text-black">✓</div>
          <h1 className="mt-6 font-heading text-5xl font-extrabold text-ff-text">Brief received.</h1>
          <p className="mt-5 text-lg leading-8 text-ff-muted">Thanks for reaching out. We&apos;ll review your project details and reply within 24 hours via WhatsApp or email.</p>
          <p className="mt-8 text-sm text-ff-muted">While you wait — explore the work:</p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {projects.map((project) => (
              <Link key={project.slug} href={`/work/${project.slug}`} className="rounded-full border border-ff-border bg-ff-surface px-4 py-2 text-sm text-ff-text hover:border-ff-blue">
                {project.name}
              </Link>
            ))}
          </div>
          <Link href="/" className="mt-8 inline-flex rounded-md border border-ff-border px-5 py-3 text-sm font-semibold text-ff-text hover:bg-ff-surface-2">
            ← Back to zed-forge
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
