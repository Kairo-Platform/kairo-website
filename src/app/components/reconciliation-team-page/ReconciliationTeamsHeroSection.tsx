import { businessMailto } from "@/app/constants/contact";
import { Icon } from "@iconify/react";
import Image from "next/image";

export const ReconciliationTeamsHeroSection = () => {
  return (
    <section className="relative flex min-h-[calc(100dvh-5rem)] justify-center overflow-hidden px-4 py-24 max-lg:py-10 sm:px-6 xl:px-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-radial from-orange/10 via-orange/5 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-24 h-96 w-96 rounded-full bg-radial from-orange/10 via-orange/5 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-radial from-orange/10 via-orange/5 to-transparent blur-3xl"
      />
      <div className="relative z-10 container mx-auto flex flex-wrap items-center justify-center gap-10 text-start lg:flex-nowrap lg:gap-20 xl:gap-24">
        <div className="flex w-full max-w-3xl flex-col items-start max-lg:items-center max-lg:text-center max-lg:text-balance lg:w-2/3">
          <span className="mb-2 text-lg font-medium text-accent">
            Reconciliation Teams
          </span>
          <h1 className="text-balance text-6xl font-medium tracking-normal leading-normal max-sm:text-4xl">
            Close books <span className="text-accent italic">faster.</span>{" "}
            Without spreadsheet chaos.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-secondary lg:max-w-120">
            Matching transactions across banks, ledgers, switches, and payment
            processors shouldn’t take days of manual work.
          </p>
          <a href={businessMailto("Book a Kairo Recon demo")} className="cta-button mt-8">
            Book a demo
            <Icon
              icon="material-symbols:chevron-right-rounded"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="flex w-full max-w-xl items-end justify-end lg:w-1/2">
          <div className="relative w-full">
            <div className="hero-float absolute top-1/2 -left-20 max-lg:-left-5 max-lg:w-1/3">
              <Image
                src="/teams-assets/transactions-card.webp"
                alt="Reconciliation transactions card"
                width={300}
                height={280}
                priority
                className="hero-float-image h-auto w-[300px] max-lg:w-full"
              />
            </div>

            <div className="w-full max-w-xl overflow-hidden rounded-[3rem] rounded-tr-none">
              <Image
                src="/teams-assets/team-1.webp"
                alt="Reconciliation team member reviewing transactions"
                width={700}
                height={900}
                priority
                className="h-auto w-full object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReconciliationTeamsHeroSection;
