export type Project = {
  slug: "bella-vista" | "ironforge" | "carepoint" | "clientflow";
  category: string;
  filter: string[];
  name: string;
  description: string;
  features: string[];
  stack: string[];
  image: string;
  accent: string;
  liveUrl: string;
  badge?: string;
};

export const projects: Project[] = [
  {
    slug: "bella-vista",
    category: "Restaurant",
    filter: ["Websites", "Business Solution"],
    name: "Bella Vista",
    description:
      "A modern African fusion restaurant website for Lusaka's dining scene. Full menu system, table reservations, gallery, and a brand story built to attract real customers.",
    features: ["Menu System", "Reservation System", "Mobile Responsive", "Dark Mode"],
    stack: ["HTML", "CSS", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    accent: "#C9A84C",
    liveUrl: "https://bella-vista-restaurant-pearl.vercel.app/"
  },
  {
    slug: "ironforge",
    category: "Fitness & Wellness",
    filter: ["Websites", "Business Solution"],
    name: "IronForge Fitness",
    description:
      "A premium gym website for Lusaka's Rhodespark area. Membership plans, trainer profiles, class schedules, and a goal quiz that funnels visitors into the right plan.",
    features: ["Membership Plans", "Class Schedule", "Trainer Profiles", "Goal Quiz"],
    stack: ["HTML", "CSS", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    accent: "#FF4D00",
    liveUrl: "https://ironforge-fitness-gamma.vercel.app/"
  },
  {
    slug: "carepoint",
    category: "Healthcare",
    filter: ["Websites", "Business Solution"],
    name: "CarePoint Medical Center",
    description:
      "A trust-focused healthcare website for a multi-specialty clinic in Roma, Lusaka. Doctor profiles, appointment booking, symptom checker, and patient portal mockup.",
    features: ["Appointment Booking", "Doctor Directory", "Symptom Checker", "Accessibility"],
    stack: ["HTML", "CSS", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    accent: "#1B5E8C",
    liveUrl: "https://carepoint-medical.vercel.app/"
  },
  {
    slug: "clientflow",
    category: "SaaS / Web Application",
    filter: ["SaaS", "Dashboard", "Business Solution"],
    name: "ClientFlow CRM",
    description:
      "A full SaaS CRM platform with lead management, Kanban pipeline, analytics dashboard, AI assistant mockup, and command palette.",
    features: ["Sales Pipeline", "Analytics", "AI Insights", "Command Palette"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    accent: "#2563EB",
    liveUrl: "https://clientflow-crm-five.vercel.app/",
    badge: "Most Complex"
  }
];

export const filters = ["All", "Websites", "SaaS", "Dashboard", "Business Solution"];
