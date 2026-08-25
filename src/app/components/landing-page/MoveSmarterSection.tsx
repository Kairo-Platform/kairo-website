import { Icon } from "@iconify/react";
import Image from "next/image";
import { Reveal } from "@/app/components";
import { businessMailto } from "@/app/constants/contact";

export function MoveSmarterSection() {
  return (
    <section className="relative overflow-hidden pt-14 lg:pt-20 px-4 xl:px-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[url('/kairo-assets/kairo-logo-icon-large.webp')] bg-size-[auto_100%] bg-right bg-no-repeat opacity-90"
      />
      <div className="relative z-10 container mx-auto flex flex-wrap items-center justify-center gap-10 text-start lg:flex-nowrap lg:gap-20 xl:gap-24">
        <Reveal
          animation="left"
          className="flex w-full max-w-xl flex-col items-start max-lg:items-center max-lg:text-balance max-lg:text-center lg:w-1/2"
        >
          <h2 className="text-balance text-3xl font-medium leading-snug sm:text-4xl lg:text-5xl">
            Move smarter.
            <br />
            Spend better.
            <br />
            Plan ahead.
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-lg font-medium leading-relaxed text-secondary lg:max-w-120">
            Join other individuals across Africa who stay ready and stay in
            control of their money on Kairo. Free to start.
          </p>
          <a
            href={businessMailto("Start on WhatsApp with Kairo")}
            className="cta-button mt-8"
          >
            Start on WhatsApp
            <Icon
              icon="material-symbols:chevron-right-rounded"
              aria-hidden="true"
            />
          </a>
        </Reveal>

        <Reveal
          animation="right"
          className="flex h-full w-full max-w-xl items-start justify-end overflow-y-hidden lg:w-1/2 lg:max-h-220"
        >
          <Image
            src="/landing-page/move-smarter-phone.webp"
            alt="Kairo chat confirming a transfer and showing a successful transaction receipt"
            width={500}
            height={900}
            className="h-auto w-full max-w-md object-contain object-top lg:max-w-xl lg:w-full"
            sizes="(max-width: 1024px) 90vw, 560px"
            quality={90}
          />
        </Reveal>
      </div>
    </section>
  );
}

export default MoveSmarterSection;
