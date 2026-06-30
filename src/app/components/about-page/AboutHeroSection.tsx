import { Icon } from "@iconify/react";
import { businessMailto } from "@/app/constants/contact";
import Image from "next/image";

export const AboutHeroSection = () => {
  return (
    <section className="relative flex flex-col min-h-max justify-start overflow-hidden py-16">
      <div className="relative z-10 container mx-auto flex flex-col gap-4 items-center max-w-3xl p-10 px-4 text-center">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium leading-16">
          Financial Intelligence for the <span className="text-accent">Next Billion</span>
        </h1>
        <p className="mt-6 text-secondary font-medium text-lg max-w-2xl">
          Kairo is building the future of financial operations for people, businesses, and institutions across emerging markets. We believe money should move the way people talk — naturally, instantly, and without friction.
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;
