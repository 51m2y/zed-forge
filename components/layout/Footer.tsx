import Link from "next/link";
import { Github, Linkedin, MessageCircle } from "lucide-react";
import { Logo } from "@/components/shared/Logo";

const links = [
  ["Work", "/#work"],
  ["Services", "/#services"],
  ["About", "/#about"],
  ["Contact", "/#contact"]
];

export function Footer() {
  return (
    <footer className="border-t border-ff-border bg-ff-bg px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex text-ff-text">
            <Logo size="sm" />
          </Link>
          <p className="mt-4 text-sm text-ff-muted">Built in Lusaka, Zambia</p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-ff-border px-3 py-1 text-sm text-ff-text">
            <span className="pulse-dot" /> Available for new projects
          </p>
        </div>
        <div>
          <h2 className="font-heading text-sm font-semibold text-ff-text">Navigation</h2>
          <div className="mt-4 flex flex-col gap-3">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="text-sm text-ff-muted transition hover:text-ff-text">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-heading text-sm font-semibold text-ff-text">Social</h2>
          <div className="mt-4 flex items-center gap-4">
            <a
              href="https://github.com/51m2y"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="zed-forge on GitHub"
              className="focus-ring text-ff-muted transition hover:text-ff-text"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/chanda-simbaya-451947270"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="zed-forge on LinkedIn"
              className="focus-ring text-ff-muted transition hover:text-ff-text"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://wa.me/260976034685"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message zed-forge on WhatsApp"
              className="focus-ring text-ff-muted transition hover:text-ff-text"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-ff-border pt-6 text-xs text-ff-muted md:flex-row">
        <p>© 2026 zed-forge. All rights reserved.</p>
        <p>Built by zed-forge using Next.js, Tailwind CSS, and Vercel.</p>
      </div>
    </footer>
  );
}
