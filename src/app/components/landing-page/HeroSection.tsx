import { Icon } from "@iconify/react";
import { businessMailto } from "@/app/constants/contact";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] flex-col justify-center overflow-hidden bg-[url('/landing-page/hero-bg-image.webp')] bg-cover bg-center section-padding pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-transparent via-white/80 to-white"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-radial from-orange/10 via-orange/5 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-radial from-orange/10 via-orange/5 to-transparent blur-3xl"
      />
      <div className="relative z-10 container mx-auto flex max-w-200 flex-col items-center px-4 text-center">
        <h1 className="max-w-4xl text-pretty text-4xl font-medium max-sm:text-3xl lg:text-5xl xl:text-6xl">
          <span className="text-accent">Operational Intelligence </span>
          for Financial Institutions
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg font-medium leading-relaxed text-secondary">
          Reduce operational leakage, eliminate manual reconciliation bottlenecks,
          and gain full visibility across your financial infrastructure.
        </p>
        <a
          href={businessMailto("Book a Kairo demo")}
          className="cta-button mt-8"
        >
          Book a demo
          <Icon icon="material-symbols:chevron-right-rounded" aria-hidden="true" />
        </a>
      </div>
      <div className="hero-float relative z-10 mx-auto mt-10 w-full max-w-3xl px-4 lg:w-1/2">
        <Image
          src="/landing-page/dashboard-1.webp"
          alt="Kairo operational intelligence dashboard showing transaction monitoring and reconciliation insights"
          width={900}
          height={600}
          priority
          className="hero-float-image h-auto w-full rounded-2xl object-contain object-center"
        />
      </div>
    </section>
  );
};

export default HeroSection;
