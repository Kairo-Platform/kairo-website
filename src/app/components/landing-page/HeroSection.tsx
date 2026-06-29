import { Icon } from "@iconify/react";

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen justify-center overflow-hidden bg-[url('/landing-page/hero-bg-image.webp')] bg-cover bg-center py-24 pt-16">
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
      <div className="relative z-10 container mx-auto flex max-w-3xl flex-col items-center p-10 px-4 text-center">
        <h1 className="text-5xl font-bold">
          <span className="text-accent">Operational Intelligence </span>
          for Financial Institutions
        </h1>
        <p className="mt-6 text-text-03 text-lg max-w-2xl">
          Reduce operational leakage, eliminate manual reconciliation bottlenecks,
          and gain full visibility across your financial infrastructure.
        </p>
        <button
          type="button"
          className="mt-8 cursor-pointer flex items-center justify-center gap-2 rounded-3xl bg-accent px-4 py-2 font-medium text-white transition-colors duration-200 ease-in-out hover:bg-accent-hover"
        >
          Book a demo
          <Icon icon="material-symbols:chevron-right-rounded" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
