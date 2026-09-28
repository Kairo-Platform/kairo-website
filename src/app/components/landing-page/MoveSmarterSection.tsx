import { Icon } from "@iconify/react";
import Image from "next/image";
import { Reveal } from "@/app/components";
import { businessMailto } from "@/app/constants/contact";
import Link from "next/link";

export function MoveSmarterSection() {
  return (
    <section className="relative overflow-hidden pt-14 lg:pt-20 px-4 xl:px-0 bg-orange-02">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[url('/kairo-assets/kairo-logo-icon-large.webp')] bg-size-[auto_100%] bg-right bg-no-repeat opacity-90"
      />
      <div className="relative z-10 container mx-auto flex flex-wrap items-center justify-center gap-10 text-start lg:flex-nowrap lg:gap-20 xl:gap-24">
        <Reveal
          animation="left"
          className="flex w-full max-w-xl flex-col items-start max-lg:items-center max-lg:text-balance max-lg:text-center lg:w-1/2"
        >
          <h2 className="text-balance text-white text-3xl font-medium leading-snug sm:text-4xl lg:text-5xl">
            Move smarter.
            <br />
            Spend better.
            <br />
            Plan ahead.
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-lg font-medium leading-relaxed text-[#F5F5F5] lg:max-w-120">
            Join other individuals across Africa who stay ready and stay in
            control of their money on Kairo. Free to start.
          </p>
          <Link
            href={businessMailto("Start on WhatsApp with Kairo")}
            className="cta-button-black mt-8"
          >
            <Icon icon="ic:outline-whatsapp" width={16} height={16} />
            Start chatting
            <Icon
              icon="material-symbols:chevron-right-rounded"
              aria-hidden="true"
            />
          </Link>
        </Reveal>

        <Reveal
          animation="right"
          className="flex h-full w-full max-w-xl max-h-140 items-start justify-center overflow-y-hidden sm:max-h-160 lg:w-1/2 xl:max-h-220 lg:justify-end"
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
