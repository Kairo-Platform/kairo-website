import { businessMailto } from "@/app/constants/contact";
import { Icon } from "@iconify/react";
import Image from "next/image";

export const OperationsTeamsHeroSection = () => {
  return (
    <section className="relative flex min-h-[calc(100dvh-5rem)] justify-center overflow-hidden py-24 max-lg:py-10 px-10 xl:px-0">
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
      <div className="relative z-10 container mx-auto flex flex-wrap lg:flex-nowrap items-center justify-center gap-10 lg:gap-24  text-start">
        <div className="w-full max-w-2xl lg:w-2/3 flex flex-col items-start max-lg:items-center max-lg:text-center max-lg:text-balance">
          <span className="text-accent font-medium text-lg mb-2">Operations Teams</span>
          <h1 className="text-6xl font-medium max-sm:text-4xl">
            Keep financial operations running <span className="text-accent italic">smoothly</span>
          </h1>
          <p className="mt-6 text-secondary text-lg max-w-2xl lg:max-w-120 text-pretty">Streamlines your day-to-day operational workflows across transaction monitoring, exception handling, approvals, and process routing.</p>
          <a
            href={businessMailto("Book a demo")}
            className="mt-10 cursor-pointer flex items-center justify-center gap-2 rounded-3xl bg-accent px-4 py-2 font-medium text-white transition-colors duration-200 ease-in-out hover:bg-accent-hover"
          >
            Book a demo
            <Icon icon="material-symbols:chevron-right-rounded" />
          </a>
        </div>

        <div className="w-full max-w-xl lg:w-1/2 flex items-end justify-end">
          <div className="w-full relative">
            <div className="hero-float absolute top-1/2 -left-20 max-lg:-left-5 max-lg:w-1/3">
              <Image
                src="/teams-assets/transactions-card-2.svg"
                alt="Transactions card"
                width={300}
                height={280}
                priority
                className="hero-float-image h-auto w-[300px] max-lg:w-full"
              />
            </div>

            <div className="w-full max-w-xl overflow-hidden rounded-[3rem] rounded-tr-[0rem]">
              <Image
                src="/teams-assets/team-2.webp"
                alt="Person with phone"
                width={700}
                height={900}
                priority
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OperationsTeamsHeroSection;