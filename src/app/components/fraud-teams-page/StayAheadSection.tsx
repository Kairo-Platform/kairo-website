import { Icon } from "@iconify/react";
import Image from "next/image";
import { businessMailto } from "@/app/constants/contact";

export const StayAheadSection = () => {
  return (
    <section className="pt-24 p-10 pb-0 pr-0 lg:pl-20 flex flex-wrap items-center gap-16">
      <div className="mx-auto lg:max-w-2xl lg:mb-10">
        <h2 className="text-3xl font-medium lg:text-6xl mb-4 text-balance">
        Stay ahead of fraudulent activity.
        </h2>
        <p className="text-pretty text-lg">Monitor threats, detect suspicious behavior, and respond faster with Kairo.</p>
        <a
          href={businessMailto("Book a demo")}
          className="mt-10 w-max flex cursor-pointer items-center justify-center gap-2 rounded-3xl bg-accent px-4 py-2 font-medium text-white transition-colors duration-200 ease-in-out hover:bg-accent-hover"
        >
          Book a demo
          <Icon icon="material-symbols:chevron-right-rounded" />
        </a>
      </div>
      <div className="w-full lg:w-1/2 max-h-200 overflow-hidden">
        <Image
          src="/landing-page/dashboard-2.svg"
          alt="Kairo Dashboard"
          width={500}
          height={500}
          className="object-contain object-center rounded-2xl w-full h-full"
        />
      </div>
    </section>
  )
}

export default StayAheadSection;