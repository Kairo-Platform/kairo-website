export const AboutHeroSection = () => {
  return (
    <section className="relative flex flex-col justify-start overflow-hidden py-16">
      <div className="relative z-10 container mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 text-center">
        <h1 className="text-balance text-4xl font-medium tracking-normal leading-normal lg:text-5xl xl:text-6xl">
          Financial Intelligence for the{" "}
          <span className="text-accent">Next Billion</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg font-medium leading-relaxed text-secondary">
          Kairo is building the future of financial operations for people,
          businesses, and institutions across emerging markets. We believe money
          should move the way people talk — naturally, instantly, and without
          friction.
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;
