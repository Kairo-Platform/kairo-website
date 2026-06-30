import { 
  AboutHeroSection, 
  OurVisionSection, 
  TheFutureSection, 
  WhatWeDoSection 
} from "@/app/components/about-page";

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <WhatWeDoSection />
      <OurVisionSection />
      <TheFutureSection />
    </main>
  )
}