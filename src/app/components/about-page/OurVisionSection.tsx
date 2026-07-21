import { Reveal } from "@/app/components";

export const OurVisionSection = () => {
  return (
    <section className="bg-[#1A1A1A] py-24 text-white lg:py-32">
      <div className="container mx-auto flex flex-col gap-10 px-4 text-center">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-balance text-4xl font-medium leading-snug lg:text-6xl">
            Our Vision
          </h2>
        </Reveal>
        <Reveal animation="bottom" className="mx-auto max-w-5xl">
          <p className="text-pretty text-3xl font-medium leading-snug text-[#E0E0E0] lg:text-5xl lg:leading-tight">
            We envision a future where money moves as naturally as conversation,
            businesses operate with greater ease, and financial infrastructure is
            intelligent by default.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default OurVisionSection;
