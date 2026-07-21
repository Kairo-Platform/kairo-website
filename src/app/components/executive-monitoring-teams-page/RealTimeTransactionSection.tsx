import { Icon } from "@iconify/react";
import Image from "next/image";
import { Reveal } from "@/app/components";
import { businessMailto } from "@/app/constants/contact";

export const RealTimeTransactionSection = () => {
  return (
    <section className="pt-24 pr-0 pl-4 sm:pl-6 lg:pl-20">
      <div className="flex flex-wrap items-center gap-12 lg:gap-16">
        <Reveal
          animation="left"
          className="mx-auto w-full max-w-xl lg:max-w-2xl"
        >
          <h2 className="mb-4 text-balance text-3xl font-medium leading-snug lg:text-6xl lg:leading-tight">
            See your financial operations in real time.
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-secondary">
            Monitor performance, track system health, and gain operational
            clarity with Kairo.
          </p>
          <a
            href={businessMailto("Book a Kairo Executive Monitoring demo")}
            className="cta-button mt-8"
          >
            Book a demo
            <Icon
              icon="material-symbols:chevron-right-rounded"
              aria-hidden="true"
            />
          </a>
        </Reveal>

        <Reveal
          animation="right"
          className="w-full max-h-200 overflow-hidden lg:w-1/2 lg:flex-1"
        >
          <div className="hero-float mx-auto w-full max-w-2xl">
            <Image
              src="/landing-page/dashboard-2.svg"
              alt="Kairo executive dashboard with real-time operational performance views"
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

export default RealTimeTransactionSection;
