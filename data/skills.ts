export interface StackGroup {
  title: string;
  items: string[];
  featured?: boolean;
  description?: string;
}

export const skillBars: [string, number, string][] = [
  ["HTML/CSS", 100, "Expert"],
  ["JavaScript", 88, "Advanced"],
  ["TypeScript", 84, "Advanced"],
  ["React / Next.js", 80, "Proficient"],
  ["Tailwind CSS", 100, "Expert"],
  ["UI/UX Design", 70, "Proficient"],
];

export const stackGroups: StackGroup[] = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Styling",
    items: ["Tailwind CSS", "shadcn/ui", "Framer Motion"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vercel", "Figma", "VS Code"],
  },
  {
    title: "AI-Assisted Development",
    items: ["ChatGPT", "Claude", "Codex"],
    featured: true,
    description:
      "We use industry-leading AI tools to plan faster, catch errors earlier, and spend more time on the details that matter — so you get a better product in less time.",
  },
];

export const learning = ["Supabase", "React Native", "Node.js"];
