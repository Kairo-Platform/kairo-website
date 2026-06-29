import { Icon } from "@iconify/react";
import { InstitutionScroller } from "@/app/components";

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
    <section className="py-24">
      <div className="container mx-auto flex flex-col items-center gap-12 px-4 lg:flex-row lg:items-center lg:gap-10">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold">
            Trusted By Modern Financial Operations Teams. Built for:
          </h2>
          <button
            type="button"
            className="mt-10 flex cursor-pointer items-center justify-center gap-2 rounded-3xl bg-accent px-4 py-2 font-medium text-white transition-colors duration-200 ease-in-out hover:bg-accent-hover"
          >
            Explore Kairo
            <Icon icon="material-symbols:chevron-right-rounded" />
          </button>
        </div>

        <InstitutionScroller items={financialInstitutions} />
      </div>
    </section>
  );
};

export default TrustedBySection;
