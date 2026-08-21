import { Icon } from "@iconify/react";
import Image from "next/image";
import { Reveal } from "@/app/components";
import { businessMailto } from "@/app/constants/contact";

export const StartTalkingMoneySection = () => {
  return (
    <section className="relative overflow-hidden bg-[#1A1A1A] px-4 pt-14 sm:px-6 lg:pt-20 xl:px-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[url('/kairo-assets/kairo-logo-icon-large.webp')] bg-size-[auto_100%] bg-right bg-no-repeat opacity-90"
      />
      <div className="relative z-10 container mx-auto flex flex-wrap items-center justify-center gap-10 text-start lg:flex-nowrap lg:gap-20 xl:gap-24">
        <Reveal
          animation="left"
          className="flex w-full max-w-xl flex-col items-start max-lg:items-center max-lg:text-center max-lg:text-balance lg:w-1/2"
        >
          <h2 className="text-balance text-3xl font-medium leading-snug text-white sm:text-4xl lg:text-5xl">
            Start talking money today
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-lg font-medium leading-relaxed text-secondary lg:max-w-120">
            Join thousands of people who moved their finances to the chat. Free
            to start. Nothing to install.
          </p>
          <a
            href={businessMailto("Start on WhatsApp with Kairo Personal")}
            className="cta-button mt-8"
          >
            Start on WhatsApp
            <Icon
              icon="material-symbols:chevron-right-rounded"
              aria-hidden="true"
            />
          </a>
        </Reveal>

        <Reveal
          animation="right"
          className="flex h-full w-full max-w-xl items-end justify-end lg:w-1/2"
        >
          <Image
            src="/personal-assets/kairo-whatsapp-start-onboarding.webp"
            alt="Kairo Personal WhatsApp onboarding chat"
            width={500}
            height={800}
            className="h-auto w-full object-contain object-center"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default StartTalkingMoneySection;
