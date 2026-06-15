import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/work/CaseStudyLayout";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "ClientFlow CRM — Case Study | zed-forge",
  description: "A full SaaS CRM platform with lead management, Kanban pipeline, analytics dashboard, and command palette."
};

export default function Page() {
  return <CaseStudyLayout study={caseStudies.clientflow} />;
}
