"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { businessMailto } from "@/app/constants/contact";

const CYCLE_MS = 10000;

type HeroVariant = "business" | "personal";

function BusinessHeroContent() {
  return (
    <div className="relative h-full z-10 container mx-auto flex flex-wrap  justify-center gap-10 px-4 text-start lg:flex-nowrap lg:gap-24 xl:px-0">
      <div className="flex w-full max-w-xl flex-col items-start max-lg:items-center max-lg:text-balance max-lg:text-center lg:w-1/2">
        <h1 className="text-balance text-5xl font-medium leading-tight max-sm:text-3xl xl:max-w-lg xl:text-6xl">
          Collect Payment and <span className="text-accent">Grow</span> your
          Business
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-secondary lg:max-w-120">
          Kairo Business is not an app. It is a business assistant that lives in
          your chat.
        </p>
        <a
          href={businessMailto("Start on WhatsApp with Kairo Business")}
          className="cta-button mt-8"
        >
          <Icon icon="ic:baseline-whatsapp" aria-hidden="true" />
          Start on WhatsApp
        </a>
      </div>

      <div className="flex w-full max-w-xl items-center justify-center lg:h-full lg:w-1/2 lg:items-end lg:justify-end">
        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:h-full lg:max-w-none">
          <div className="hero-float absolute top-16 -left-16 z-10 max-lg:-left-2 max-lg:w-1/3">
            <Image
              src="/business-assets/wallet-balance.webp"
              alt="Business wallet balance card"
              width={220}
              height={180}
              priority
              className="hero-float-image h-auto w-[200px] max-lg:w-full"
            />
          </div>
          <div className="hero-float hero-float-delayed absolute -right-12 bottom-10 z-10 max-lg:-right-2 max-lg:w-1/3">
            <Image
              src="/business-assets/paid-20k.webp"
              alt="Payment received notification for 20,000 Naira"
              width={220}
              height={180}
              priority
              className="hero-float-image h-auto w-[200px] max-lg:w-full"
            />
          </div>
          <Image
            src="/business-assets/kairo-whatsapp-chat-new.webp"
            alt="Kairo Business WhatsApp chat showing payment and invoice conversation"
            width={480}
            height={720}
            priority
            className="relative z-0 mx-auto h-auto w-[85%] max-w-sm object-contain object-center lg:max-w-none"
          />
        </div>
      </div>
    </div>
  );
}

function PersonalHeroContent() {
  return (
    <div className="relative h-full z-10 container mx-auto flex flex-wrap justify-center gap-10 px-4 text-start lg:flex-nowrap lg:gap-20 xl:gap-24 xl:px-0">
      <div className="flex w-full max-w-xl flex-col items-start max-lg:items-center max-lg:text-balance max-lg:text-center lg:w-1/2">
        <h1 className="text-balance text-5xl font-medium italic leading-tight tracking-normal max-sm:text-3xl xl:text-6xl">
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

      <div className="flex w-full max-w-xl items-center justify-center lg:h-full lg:w-1/2 lg:items-end lg:justify-end">
        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:h-full lg:max-w-none">
          <div className="hero-float absolute -top-8 -left-8 z-10 max-lg:-left-2 max-lg:w-1/3">
            <Image
              src="/personal-assets/scan-icon.webp"
              alt="Snap to pay scan icon"
              width={160}
              height={150}
              priority
              className="hero-float-image h-auto w-[150px] max-lg:w-full"
            />
          </div>
          <div className="hero-float absolute top-1/2 -left-16 z-10 max-lg:-left-2 max-lg:w-1/3">
            <Image
              src="/personal-assets/whatsapp-logo-white-bg.webp"
              alt="WhatsApp logo"
              width={170}
              height={150}
              priority
              className="hero-float-image h-auto w-[160px] max-lg:w-full"
            />
          </div>
          <div className="hero-float hero-float-delayed absolute -right-12 bottom-6 z-10 max-lg:-right-2 max-lg:w-1/3">
            <Image
              src="/personal-assets/sent-20k.webp"
              alt="Money sent notification for 20,000 Naira"
              width={200}
              height={160}
              priority
              className="hero-float-image h-auto w-[180px] max-lg:w-full"
            />
          </div>
          <div className="mx-auto h-auto w-[85%] max-w-sm overflow-hidden rounded-bl-[4rem] lg:h-full lg:w-full lg:max-w-none">
            <Image
              src="/personal-assets/person-with-phone.webp"
              alt="Person using Kairo Personal on their phone"
              width={896}
              height={1200}
              priority
              quality={95}
              sizes="(max-width: 1024px) 85vw, 40vw"
              className="h-auto w-full object-contain object-center lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function LandingHeroSection() {
  const [variant, setVariant] = useState<HeroVariant>("business");
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(media.matches);

    const onChange = () => setReduceMotion(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const id = window.setInterval(() => {
      setVariant((current) =>
        current === "business" ? "personal" : "business",
      );
    }, CYCLE_MS);

    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] justify-center overflow-hidden py-20 max-lg:py-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/landing-page/hero-bg.webp')] bg-cover bg-center opacity-25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-radial from-orange/10 via-orange/5 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-radial from-orange/10 via-orange/5 to-transparent blur-3xl"
      />

      <div className="relative w-full">
        <div
          className={`h-full transition-opacity duration-1000 ease-in-out ${variant === "business" ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
            }`}
          aria-hidden={variant !== "business"}
        >
          <BusinessHeroContent />
        </div>
        <div
          className={`h-full transition-opacity duration-1000 ease-in-out ${variant === "personal" ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0"
            }`}
          aria-hidden={variant !== "personal"}
        >
          <PersonalHeroContent />
        </div>
      </div>
    </section>
  );
}

export default LandingHeroSection;
