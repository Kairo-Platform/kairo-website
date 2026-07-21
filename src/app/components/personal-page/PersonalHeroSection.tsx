import { businessMailto } from "@/app/constants/contact";
import { Icon } from "@iconify/react";
import Image from "next/image";

export const PersonalHeroSection = () => {
  return (
    <section className="relative flex min-h-[calc(100dvh-5rem)] justify-center overflow-hidden py-24 max-lg:py-10 px-4 sm:px-6 xl:px-0">
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
        <div className="flex w-full max-w-xl flex-col items-start max-lg:items-center max-lg:text-center max-lg:text-balance lg:w-1/2">
          <h1 className="text-balance text-6xl font-medium italic tracking-normal leading-normal max-sm:text-4xl">
            Money <span className="text-accent">moves</span> the way you talk
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-secondary lg:max-w-120">
            Send money, pay bills, and buy from businesses, all from WhatsApp,
            your voice, or a quick snap of account details. No app. No learning
            curve.
          </p>
          <a
            href={businessMailto("Start on WhatsApp with Kairo Personal")}
            className="cta-button mt-8"
          >
            <Icon icon="ic:baseline-whatsapp" aria-hidden="true" />
            Start on WhatsApp
          </a>
        </div>

        <div className="flex w-full max-w-xl items-end justify-end lg:h-full lg:w-1/2">
          <div className="relative w-full">
            <div className="hero-float absolute -top-10 -left-10 max-lg:-left-5 max-lg:w-1/3">
              <Image
                src="/personal-assets/scan-icon.svg"
                alt="Snap to pay scan icon"
                width={200}
                height={180}
                priority
                className="hero-float-image h-auto w-[180px] max-lg:w-full"
              />
            </div>
            <div className="hero-float absolute top-1/2 -left-20 max-lg:-left-5 max-lg:w-1/3">
              <Image
                src="/personal-assets/whatsapp-logo-white-bg.svg"
                alt="WhatsApp logo"
                width={200}
                height={180}
                priority
                className="hero-float-image h-auto w-[200px] max-lg:w-full"
              />
            </div>
            <div className="hero-float hero-float-delayed absolute -right-20 bottom-8 max-lg:-right-5 max-lg:w-1/3">
              <Image
                src="/personal-assets/sent-20k.svg"
                alt="Money sent notification for 20,000 Naira"
                width={250}
                height={200}
                priority
                className="hero-float-image h-auto w-[250px] max-lg:w-full"
              />
            </div>
            <div className="w-full max-w-xl overflow-hidden rounded-bl-[5rem]">
              <Image
                src="/personal-assets/person-with-phone.webp"
                alt="Person using Kairo Personal on their phone"
                width={500}
                height={700}
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

export default PersonalHeroSection;
