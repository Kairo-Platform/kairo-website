import { Icon } from "@iconify/react";
import Image from "next/image";
import { Reveal } from "@/app/components";
import { businessMailto } from "@/app/constants/contact";

export const SpeedAndControlSection = () => {
  return (
    <section className="pt-24 px-4 lg:pl-20">
      <div className="flex flex-wrap items-center gap-12 lg:gap-16">
        <Reveal
          animation="left"
          className="mx-auto w-full max-w-xl lg:max-w-md xl:max-w-lg"
        >
          <h2 className="mb-4 text-balance text-3xl font-medium leading-snug lg:text-4xl">
            Power faster, smarter financial operations.
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-secondary">
            Automate workflows, reduce operational friction, and keep systems
            moving with Kairo.
          </p>
          <a
            href={businessMailto("Book a Kairo Operations demo")}
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
              src="/landing-page/dashboard-2.webp"
              alt="Kairo operations dashboard with workflow and monitoring views"
              width={900}
              height={600}
              className="hero-float-image h-auto w-full rounded-l-4xl object-contain object-center"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SpeedAndControlSection;
