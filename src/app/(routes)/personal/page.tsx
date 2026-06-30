import {
  KairoLanguagesSection,
  PersonalFeaturesSection,
  PersonalHeroSection,
  StartTalkingMoneySection,
  ThreeWordsSection
} from "@/app/components/personal-page";

export default function PersonalPage() {
  return (
    <main>
      <PersonalHeroSection />
      <PersonalFeaturesSection />
      <ThreeWordsSection />
      <KairoLanguagesSection />
      <StartTalkingMoneySection />
    </main>
  )
}