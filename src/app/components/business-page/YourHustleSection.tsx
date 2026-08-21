import { Icon } from "@iconify/react";
import Image from "next/image";
import { Reveal } from "@/app/components";
import { businessMailto } from "@/app/constants/contact";

export const YourHustleSection = () => {
  return (
    <section className="relative overflow-hidden pt-14 lg:pt-20 px-10 xl:px-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[url('/kairo-assets/kairo-logo-icon-large.webp')] bg-size-[auto_100%] bg-right bg-no-repeat opacity-90"
      />
      <div className="relative z-10 container mx-auto flex flex-wrap items-center justify-center gap-10 text-start lg:flex-nowrap lg:gap-20 xl:gap-24">
        <Reveal
          animation="left"
          className="flex w-full max-w-xl flex-col items-start max-lg:items-center max-lg:text-center max-lg:text-balance lg:w-1/2"
        >
          <h2 className="text-balance text-3xl font-medium leading-snug sm:text-4xl lg:text-5xl">
            Your hustle deserves the right tools
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-lg font-medium leading-relaxed text-secondary lg:max-w-120">
            Join business owners across Africa who run their money on Kairo.
            Free to start.
          </p>
          <a
            href={businessMailto("Open a Kairo Business wallet")}
            className="cta-button mt-8"
          >
            Open your business wallet
            <Icon
              icon="material-symbols:chevron-right-rounded"
              aria-hidden="true"
            />
          </a>
        </Reveal>

        <Reveal
          animation="right"
          className="flex h-full w-full max-w-xl items-end justify-end lg:w-1/2"
        >
          <Image
            src="/business-assets/kairo-whatsapp-signup-form-2.webp"
            alt="Kairo Business signup form in WhatsApp"
            width={500}
            height={800}
            className="h-auto w-full object-contain object-center"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default YourHustleSection;
