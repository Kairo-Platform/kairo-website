import { Icon } from "@iconify/react";
import Image from "next/image";
import { businessMailto } from "@/app/constants/contact";

export const StartTalkingMoneySection = () => {
  return (
    <section className="relative overflow-hidden bg-[#1A1A1A] pt-14 lg:pt-20 px-10 xl:px-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[url('/kairo-assets/kairo-logo-icon-large.webp')] bg-size-[auto_100%] bg-right bg-no-repeat"
      />
      <div className="relative z-10 container mx-auto flex flex-wrap items-center justify-center gap-10 text-start lg:flex-nowrap lg:gap-24">
        <div className="w-full max-w-xl lg:w-1/2 flex flex-col items-start max-lg:items-center max-lg:text-center max-lg:text-balance">
          <h2 className="text-5xl font-medium max-sm:text-2xl text-white">
            Start talking money today
          </h2>
          <p className="mt-6 text-secondary font-medium text-lg max-w-2xl lg:max-w-120">
            Join thousands of people who moved their finances to the chat. Free to start. Nothing to install.
          </p>
          <a
            href={businessMailto("Open a Kairo Business wallet")}
            className="mt-10 cursor-pointer flex items-center justify-center gap-2 rounded-3xl bg-accent px-4 py-2 font-medium text-white transition-colors duration-200 ease-in-out hover:bg-accent-hover"
          >
            Start on WhatsApp
            <Icon icon="material-symbols:chevron-right-rounded" />

          </a>
        </div>

        <div className="w-full h-full max-w-xl lg:w-1/2 flex items-end justify-end">
          <Image
            src="/personal-assets/kairo-whatsapp-start-onboarding.svg"
            alt="Kairo Whatsapp Chat"
            width={500}
            height={800}
            priority
            className="w-full h-full object-contain object-center"
          />
        </div>
      </div>
    </section>
  )
}

export default StartTalkingMoneySection;