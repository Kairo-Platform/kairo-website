import { Icon } from "@iconify/react";
import { InstitutionScroller, Reveal } from "@/app/components";
import { businessMailto } from "@/app/constants/contact";

const financialInstitutions = [
  "Banks",
  "Microfinance Banks",
  "FinTechs",
  "Super Agents",
  "Aggregators",
  "Switches",
  "Payment Processors",
  "Government Collection Platforms",
];

export const TrustedBySection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto flex flex-col items-center gap-12 px-4 lg:flex-row lg:items-center lg:gap-16">
        <Reveal animation="left" className="max-w-xl text-center lg:text-left">
          <h2 className="text-balance text-3xl font-medium leading-snug lg:text-4xl">
            Trusted By Modern Financial Operations Teams. Built for:
          </h2>
          <a
            href={businessMailto("Explore Kairo")}
            className="cta-button mt-10"
          >
            Explore Kairo
            <Icon icon="material-symbols:chevron-right-rounded" aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal animation="right" className="w-full lg:flex-1">
          <InstitutionScroller items={financialInstitutions} />
        </Reveal>
      </div>
    </section>
  );
};

export default TrustedBySection;
