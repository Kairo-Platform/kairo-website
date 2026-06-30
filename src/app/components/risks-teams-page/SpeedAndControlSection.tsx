import { Icon } from "@iconify/react";
import Image from "next/image";
import { businessMailto } from "@/app/constants/contact";

export const SpeedAndControlSection = () => {
  return (
    <section className="pt-24 p-10 pb-0 pr-0 lg:pl-20 flex flex-wrap items-center gap-16">
      <div className="mx-auto lg:max-w-2xl lg:mb-10">
        <h2 className="text-3xl font-medium lg:text-6xl mb-4 text-balance">
        Make smarter risk decisions in real time.
        </h2>
        <p className="text-pretty text-lg">Detect anomalies early, monitor exposure, and strengthen operational visibility with Kairo.</p>
        <a
          href={businessMailto("Explore Kairo Enterprise deployment")}
          className="mt-10 w-max flex cursor-pointer items-center justify-center gap-2 rounded-3xl bg-accent px-4 py-2 font-medium text-white transition-colors duration-200 ease-in-out hover:bg-accent-hover"
        >
          Book a demo
          <Icon icon="material-symbols:chevron-right-rounded" />
        </a>
      </div>
      <div className="w-full lg:w-1/2 max-h-200 overflow-hidden">
        <Image
          src="/kairo-assets/kairo-logo-icon-large.webp"
          alt="Kairo Dashboard"
          width={200}
          height={500}
          className="object-contain object-center rounded-2xl w-full h-full"
        />
      </div>
    </section>
  )
}

export default SpeedAndControlSection;