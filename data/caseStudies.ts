import { projects } from "./projects";

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  image: string;
  stack: string[];
  meta: { label: string; value: string }[];
  challenge: string[];
  approach: string[];
  features: { name: string; description: string }[];
  demonstrates: string;
  mockups: string[];
  next: string;
  liveUrl: string;
};

const bySlug = Object.fromEntries(projects.map((project) => [project.slug, project]));

export const caseStudies: Record<string, CaseStudy> = {
  "bella-vista": {
    slug: "bella-vista",
    title: "Bella Vista Restaurant",
    category: "Restaurant",
    tagline: "Modern African fusion restaurant website for Lusaka's dining scene.",
    image: bySlug["bella-vista"].image,
    stack: bySlug["bella-vista"].stack,
    meta: [
      { label: "Timeline", value: "2 weeks" },
      { label: "Type", value: "Business Website" },
      { label: "Status", value: "Complete — Live Demo" }
    ],
    challenge: [
      "Restaurant owners in Lusaka often have outdated or no web presence. This demo shows what a modern restaurant site looks like: one that builds trust, drives reservations, and reflects the quality of the food.",
      "The target client is a restaurant, cafe, lodge, or food business that needs customers to understand the atmosphere before they walk through the door."
    ],
    approach: [
      "Built as a Modern African Fusion brand, not a generic template.",
      "Localized with Lusaka address details and +260 WhatsApp contact patterns.",
      "Added menu filtering, reservation form, Instagram grid, press bar, and persistent dark mode."
    ],
    features: [
      ["Menu Filter", "Guests can browse categories quickly."],
      ["Reservation Form", "Clear path from interest to table booking."],
      ["Instagram Grid", "Makes the restaurant feel active and visual."],
      ["Dark Mode", "Premium dining mood across all pages."],
      ["WhatsApp CTA", "Local booking behavior built into the flow."],
      ["SVG Logo", "Brand detail without heavy assets."]
    ].map(([name, description]) => ({ name, description })),
    demonstrates:
      "Any restaurant, cafe, lodge, or food business in Lusaka can see exactly what their website could look like and want it immediately.",
    mockups: [
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80"
    ],
    next: "ironforge",
    liveUrl: bySlug["bella-vista"].liveUrl
  },
  ironforge: {
    slug: "ironforge",
    title: "IronForge Fitness",
    category: "Fitness & Wellness",
    tagline: "High-energy gym website built to convert visitors into members.",
    image: bySlug.ironforge.image,
    stack: bySlug.ironforge.stack,
    meta: [
      { label: "Timeline", value: "2 weeks" },
      { label: "Type", value: "Business Website" },
      { label: "Status", value: "Complete — Live Demo" }
    ],
    challenge: [
      "Gyms and fitness centers need websites that match the energy of their brand and convert visitors into members. Most gym sites in Lusaka are either outdated or non-existent.",
      "This concept gives a fitness business a digital presence that feels as strong as its facility."
    ],
    approach: [
      "Dark, high-energy design with electric orange accents.",
      "Goal quiz funnels visitors to the right membership plan.",
      "Countdown trial timer, transformation slider, and live-looking class capacity create momentum."
    ],
    features: [
      ["Goal Quiz", "Routes prospects to the right plan."],
      ["Countdown Timer", "Adds launch and trial urgency."],
      ["Before/After Slider", "Makes transformation outcomes tangible."],
      ["Class Schedule", "Shows a real operating rhythm."],
      ["Membership Toggle", "Compares plans without friction."],
      ["BMI Calculator", "Adds useful engagement."]
    ].map(([name, description]) => ({ name, description })),
    demonstrates:
      "Any gym, fitness center, sports club, or wellness brand in Zambia can see a premium version of their digital presence.",
    mockups: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80"
    ],
    next: "carepoint",
    liveUrl: bySlug.ironforge.liveUrl
  },
  carepoint: {
    slug: "carepoint",
    title: "CarePoint Medical Center",
    category: "Healthcare",
    tagline: "Trust-first healthcare website for a multi-specialty clinic in Roma.",
    image: bySlug.carepoint.image,
    stack: bySlug.carepoint.stack,
    meta: [
      { label: "Timeline", value: "2 weeks" },
      { label: "Type", value: "Business Website" },
      { label: "Status", value: "Complete — Live Demo" }
    ],
    challenge: [
      "Healthcare websites need to build immediate trust. Patients are anxious and need to feel they are in the right hands before they even book an appointment.",
      "This concept shows how private clinics and specialist practices can present care, credentials, and booking paths clearly."
    ],
    approach: [
      "Trust-first design with registration, insurance, and partner proof points.",
      "Accessibility controls target elderly patients and families.",
      "Emergency bar, symptom checker disclaimer, and local language cues show domain awareness."
    ],
    features: [
      ["Accessibility Bar", "Improves readability and confidence."],
      ["Emergency Bar", "Keeps urgent contact visible."],
      ["Symptom Checker", "Demonstrates guided triage with disclaimers."],
      ["Doctor Profiles", "Builds personal trust."],
      ["Insurance Ticker", "Answers payment questions early."],
      ["Appointment Booking", "Turns trust into action."]
    ].map(([name, description]) => ({ name, description })),
    demonstrates:
      "Any private clinic, dental practice, physiotherapy center, or specialist practice in Lusaka can see a ready-to-launch digital presence.",
    mockups: [
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80"
    ],
    next: "clientflow",
    liveUrl: bySlug.carepoint.liveUrl
  },
  clientflow: {
    slug: "clientflow",
    title: "ClientFlow CRM",
    category: "SaaS / Web Application",
    tagline: "Production-quality SaaS CRM demo for agency and startup pitches.",
    image: bySlug.clientflow.image,
    stack: bySlug.clientflow.stack,
    meta: [
      { label: "Timeline", value: "2 weeks" },
      { label: "Type", value: "SaaS Application" },
      { label: "Status", value: "Complete — Live Demo" }
    ],
    challenge: [
      "Agencies and startups pitching SaaS products need to demonstrate what their platform looks like before it is fully built.",
      "This demo shows that zed-forge can design and build production-quality web applications, not just websites."
    ],
    approach: [
      "Full Next.js App Router application with TypeScript throughout.",
      "Kanban pipeline, command palette, analytics, AI assistant mockup, and onboarding patterns signal serious product engineering.",
      "Loading, empty, and keyboard-friendly states make the product feel complete."
    ],
    features: [
      ["Kanban Pipeline", "Visual sales flow with clear stages."],
      ["Command Palette", "Fast navigation for power users."],
      ["AI Assistant", "Shows an intelligent support layer."],
      ["Analytics Dashboard", "Turns activity into decisions."],
      ["Lead Management", "Core CRM workflow for teams."],
      ["Onboarding Tour", "Makes complex software approachable."]
    ].map(([name, description]) => ({ name, description })),
    demonstrates:
      "We can build full SaaS applications, not just marketing sites. This is the project that separates zed-forge from typical website providers in Lusaka.",
    mockups: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
    ],
    next: "bella-vista",
    liveUrl: bySlug.clientflow.liveUrl
  }
};
