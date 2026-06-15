export const skillBars = [
  ["HTML/CSS", 100, "Expert"],
  ["JavaScript", 88, "Advanced"],
  ["TypeScript", 84, "Advanced"],
  ["React / Next.js", 80, "Proficient"],
  ["Tailwind CSS", 100, "Expert"],
  ["UI/UX Design", 70, "Proficient"]
] as const;

export const stackGroups = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"]
  },
  {
    title: "Styling",
    items: ["Tailwind CSS", "shadcn/ui", "Framer Motion"]
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vercel", "Figma", "VS Code"]
  },
  {
    title: "AI-Assisted Development",
    items: ["ChatGPT", "Claude", "Codex"],
    featured: true,
    description: "We build with the best tools available — including AI. It means faster delivery, cleaner code, and more time focused on what actually makes your project stand out."
  }
];

export const learning = ["Supabase", "React Native", "Node.js"];
