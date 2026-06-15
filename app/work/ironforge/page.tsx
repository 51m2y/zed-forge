import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/work/CaseStudyLayout";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "IronForge Fitness — Case Study | zed-forge",
  description: "A premium gym website for Lusaka's Rhodespark area."
};

export default function Page() {
  return <CaseStudyLayout study={caseStudies.ironforge} />;
}
