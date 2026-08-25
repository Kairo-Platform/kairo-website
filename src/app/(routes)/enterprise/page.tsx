import type { Metadata } from "next";
import {
  FeaturesSection,
  FlexibleDeploymentModelsSection,
  HeroSection,
  ReadyToSolveIssuesSection,
  StartSmallScaleWideSection,
  TrustedBySection,
} from "@/app/components/enterprise-page";

export const metadata: Metadata = {
  title: "Kairo Enterprise",
  description:
    "Operational Intelligence for Financial Institutions.",
};

export default function EnterprisePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <FlexibleDeploymentModelsSection />
      <StartSmallScaleWideSection />
      <ReadyToSolveIssuesSection />
    </>
  );
}
