import { Icon } from "@iconify/react";
import Image from "next/image";
import { Reveal } from "@/app/components";
import { businessMailto } from "@/app/constants/contact";

export const ReadyToSolveIssuesSection = () => {
  return (
    <section className="section-padding pb-0!">
      <div className="container mx-auto flex flex-col items-center gap-12 px-4 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
        <Reveal animation="left" className="w-full lg:max-w-md xl:max-w-lg">
          <h2 className="text-balance text-3xl font-medium leading-snug lg:text-4xl">
            Ready to resolve operational issues in real time?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-secondary">
            Your Financial Infrastructure Already Generates Operational Data.
            Kairo turns it into operational intelligence.
          </p>
          <a
            href={businessMailto("Explore Kairo Enterprise deployment")}
            className="cta-button mt-8"
          >
            Explore Enterprise Deployment
            <Icon icon="material-symbols:chevron-right-rounded" aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal animation="right" className="w-full lg:flex-1 max-h-200 overflow-hidden">
          <div className="hero-float mx-auto w-full max-w-2xl">
            <Image
              src="/landing-page/dashboard-2.svg"
              alt="Kairo enterprise dashboard preview with operational analytics and monitoring views"
              width={900}
              height={600}
              className="hero-float-image h-auto w-full rounded-2xl object-contain object-center"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ReadyToSolveIssuesSection;
