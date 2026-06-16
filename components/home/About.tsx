import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

const values = ["Speed without shortcuts", "Local market, global standards", "Honest communication", "Results over aesthetics"];

export function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="About zed-forge" title="Built in Lusaka. Built for Lusaka." />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-7 text-ff-muted">
            <p className="text-lg text-ff-text">We&apos;re zed-forge — a web development studio based in Lusaka, Zambia.</p>
            <p>We started zed-forge with a straightforward belief: businesses in Zambia deserve websites and digital tools that match the quality available anywhere in the world.</p>
            <p>Too many local businesses are either paying too much for too little, or going without a digital presence entirely.</p>
            <p>zed-forge exists to change that.</p>
            <p>We build everything from simple business websites to full SaaS platforms — using modern tools, clean code, and a workflow refined across every project we ship.</p>
            <div className="rounded-lg border border-ff-blue/50 bg-ff-blue/10 p-5 text-ff-text">
              We build with the best tools available — including AI. It means faster delivery, cleaner code, and more time focused on what actually makes your project stand out.
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="rounded-lg border border-ff-border bg-ff-surface p-4 text-sm text-ff-text">
                  {value}
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[480px] overflow-hidden rounded-lg border border-ff-border shadow-glow">
            <Image src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80" alt="Developer workspace with laptop and code editor" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
