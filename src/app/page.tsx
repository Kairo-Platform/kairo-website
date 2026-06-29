import { FeaturesSection, FlexibleDeploymentModelsSection, HeroSection, ReadyToSolveIssuesSection, StartSmallScaleWideSection, TrustedBySection } from "./components/landing-page";

export default function LandingPage() {
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
