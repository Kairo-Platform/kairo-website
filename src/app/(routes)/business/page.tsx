import {
  BusinessHeroSection,
  CollectAndGrow,
  EverythingInOnePlaceSection,
  ForEveryHustleSection,
  UpAndRunningSection,
  YourHustleSection
} from "../../components/business-page";

export const BusinessesPage = () => {
  return (
    <>
      <BusinessHeroSection />
      <main>
        <ForEveryHustleSection />
        <CollectAndGrow />
        <EverythingInOnePlaceSection />
        <UpAndRunningSection />
        <YourHustleSection />
      </main>
    </>
  )
}

export default BusinessesPage;
