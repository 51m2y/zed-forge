import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/work/CaseStudyLayout";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "CarePoint Medical Center — Case Study | zed-forge",
  description: "A trust-focused healthcare website for a multi-specialty clinic in Roma, Lusaka."
};

export default function Page() {
  return <CaseStudyLayout study={caseStudies.carepoint} />;
}
