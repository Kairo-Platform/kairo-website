import {
  CareersHeroSection,
  HowWeWorkSection,
  OpenRolesSection,
} from "@/app/components/careers-page";

export const metadata = {
  title: "Careers | Kairo",
  description:
    "Join us in building the future of financial operations. Explore open roles at Kairo.",
};

export default function CareersPage() {
  return (
    <main>
      <CareersHeroSection />
      <HowWeWorkSection />
      <OpenRolesSection />
    </main>
  );
}
