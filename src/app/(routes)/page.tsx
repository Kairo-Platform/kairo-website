import type { Metadata } from "next";
import {
  BuiltForHowYouLiveSection,
  EverythingYouNeedSection,
  FaqSection,
  KairoLanguagesSection,
  LandingHeroSection,
  MoveSmarterSection,
} from "@/app/components/landing-page";

export const metadata: Metadata = {
  title: "Kairo | Money that moves the way you talk",
  description:
    "Send money, collect payments, and run your business from WhatsApp. Built for how Africans live, earn, and spend.",
};

export default function HomePage() {
  return (
    <main>
      <LandingHeroSection />
      <EverythingYouNeedSection />
      <KairoLanguagesSection />
      <BuiltForHowYouLiveSection />
      <FaqSection />
      <MoveSmarterSection />
    </main>
  );
}
