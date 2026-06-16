"use client";

import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { cn } from "@/lib/utils";

const SERVICE_ID  = "service_98jelub";
const TEMPLATE_ID = "template_we38vxr";
const PUBLIC_KEY  = "fLqd5qS0BGupo6R-z";

const projectTypes = ["Business Website", "Web Application", "SaaS Platform", "Something Else"];
const scopes       = ["Small business site", "Growing business project", "Custom web application", "Full SaaS product", "Not sure yet"];
const timelines    = ["As soon as possible", "Within 1 month", "1-3 months", "Just exploring"];
const sources      = ["LinkedIn", "WhatsApp", "Referral", "Google", "Other"];

const contactItems = [
  {
    href: "mailto:chandasimbaya8@gmail.com",
    icon: Mail,
    label: "chandasimbaya8@gmail.com",
    ariaLabel: "Email zed-forge",
  },
  {
    href: "https://wa.me/260976034685",
    icon: MessageCircle,
    label: "+260 976 034 685",
    ariaLabel: "Message zed-forge on WhatsApp",
  },
  {
    href: "tel:+260976034685",
    icon: Phone,
    label: "+260 976 034 685",
    ariaLabel: "Call zed-forge",
  },
  {
    href: "https://github.com/51m2y",
    icon: Github,
    label: "github.com/51m2y",
    ariaLabel: "zed-forge on GitHub",
  },
  {
    href: "https://www.linkedin.com/in/chanda-simbaya-451947270",
    icon: Linkedin,
    label: "linkedin.com/in/chanda-simbaya",
    ariaLabel: "zed-forge on LinkedIn",
  },
] as const;

function Field({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={cn("block text-sm font-medium text-ff-text", className)}>
      {label}
      <span className="mt-2 block">{children}</span>
    </label>
  );
}

const inputClass =
  "focus-ring w-full rounded-md border border-ff-border bg-ff-bg px-3 py-3 text-sm text-ff-text outline-none transition placeholder:text-ff-muted";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const router  = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      window.setTimeout(() => router.push("/thank-you"), 2000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-ff-border bg-ff-surface/40 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Let's build something for your business"
          sub="Based in Lusaka. Working with businesses across Zambia."
        />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-lg border border-ff-border bg-ff-surface p-6">
            {status === "success" ? (
              <div className="flex min-h-[420px] items-center justify-center text-center">
                <div>
                  <div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-full bg-ff-green text-xl font-bold text-black">
                    ✓
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-ff-text">
                    Brief received!
                  </h3>
                  <p className="mt-3 max-w-md text-ff-muted">
                    We&apos;ll reply within 24 hours via WhatsApp or email.
                  </p>
                </div>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={submit}
                className="grid gap-4 sm:grid-cols-2"
              >
                <Field label="Full Name">
                  <input
                    suppressHydrationWarning
                    required
                    className={inputClass}
                    name="name"
                  />
                </Field>
                <Field label="Email">
                  <input
                    suppressHydrationWarning
                    required
                    type="email"
                    className={inputClass}
                    name="email"
                  />
                </Field>
                <Field label="WhatsApp Number">
                  <input
                    suppressHydrationWarning
                    pattern="^\+?260[0-9 ]{9,}$"
                    className={inputClass}
                    name="whatsapp"
                    placeholder="+260..."
                  />
                </Field>
                <Field label="Project Type">
                  <select
                    suppressHydrationWarning
                    required
                    className={inputClass}
                    name="project_type"
                    defaultValue=""
                  >
                    <option value="" disabled>Select one</option>
                    {projectTypes.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Project Scope">
                  <select
                    suppressHydrationWarning
                    required
                    className={inputClass}
                    name="scope"
                    defaultValue=""
                  >
                    <option value="" disabled>Select scope</option>
                    {scopes.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Timeline">
                  <select
                    suppressHydrationWarning
                    required
                    className={inputClass}
                    name="timeline"
                    defaultValue=""
                  >
                    <option value="" disabled>Select timing</option>
                    {timelines.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </Field>
                <Field
                  label="Tell us about your project"
                  className="sm:col-span-2"
                >
                  <textarea
                    suppressHydrationWarning
                    required
                    className={`${inputClass} min-h-32`}
                    name="message"
                  />
                </Field>
                <Field
                  label="How did you find us?"
                  className="sm:col-span-2"
                >
                  <select
                    suppressHydrationWarning
                    className={inputClass}
                    name="source"
                    defaultValue=""
                  >
                    <option value="" disabled>Select source</option>
                    {sources.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </Field>

                {status === "error" && (
                  <p className="text-sm text-red-500 sm:col-span-2">
                    Something went wrong. Please try WhatsApp or email directly.
                  </p>
                )}

                <button
                  suppressHydrationWarning
                  type="submit"
                  disabled={status === "sending"}
                  className="focus-ring rounded-md bg-ff-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
                >
                  {status === "sending" ? "Sending..." : "Send Project Brief →"}
                </button>
              </form>
            )}
          </div>

          <aside className="rounded-lg border border-ff-border bg-ff-surface p-6">
            <h3 className="font-heading text-2xl font-bold text-ff-text">
              Direct contact
            </h3>
            <div className="mt-6 space-y-3">
              {contactItems.map(({ href, icon: Icon, label, ariaLabel }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ariaLabel}
                  className="group flex items-center gap-3 text-ff-muted transition hover:text-ff-text"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-md border border-ff-border bg-ff-surface transition group-hover:border-ff-blue group-hover:bg-ff-surface-2">
                    <Icon size={16} className="transition group-hover:text-ff-blue" />
                  </span>
                  <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
            <a
              href="https://wa.me/260976034685?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20zed-forge."
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe5d]"
            >
              <MessageCircle size={16} />
              Message us on WhatsApp
            </a>
            <div className="mt-8 border-t border-ff-border pt-6">
              <p className="text-sm leading-6 text-ff-muted">
                Pricing is tailored to your project. Get in touch for a free quote.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
