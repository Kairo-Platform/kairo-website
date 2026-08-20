export function CareersHeroSection() {
  return (
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden px-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/kairo-careers/kairo-careers-hero-image.webp')] bg-cover bg-center opacity-20"
      />
      <div className="relative z-10 container mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <h1 className="text-balance text-4xl font-medium tracking-normal leading-normal sm:text-5xl lg:text-6xl">
          Join us in building the future of financial operations.
        </h1>
        <p className="max-w-2xl text-pretty text-lg font-medium leading-relaxed text-secondary sm:text-xl">
          Make an impact by building smarter solutions for the future of finance.
        </p>
      </div>
    </section>
  );
}

export default CareersHeroSection;
