import { Icon } from "@iconify/react";
import Image from "next/image";
import { businessMailto } from "@/app/constants/contact";

export const BusinessHeroSection = () => {
  return (
    <section className="relative flex min-h-[calc(100dvh-5rem)] justify-center overflow-hidden pt-24 max-lg:pt-10 px-10 xl:px-0">
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
        <div className="w-full max-w-xl lg:w-1/2 flex flex-col items-start max-lg:items-center max-lg:text-center max-lg:text-balance">
          <h1 className="text-6xl font-medium max-sm:text-2xl xl:max-w-lg">
            Collect Payment and <span className="text-accent">Grow</span> your Business
          </h1>
          <p className="mt-6 text-secondary text-lg max-w-2xl lg:max-w-120">
            Kairo Business is not an app. It is a business assistant that lives in your chat.
          </p>
          <a
            href={businessMailto("Start on WhatsApp with Kairo Business")}
            className="cta-button mt-8"
          >
            <Icon icon="ic:baseline-whatsapp" aria-hidden="true" />
            Start on WhatsApp
          </a>
        </div>

        <div className="flex w-full max-w-xl items-end justify-end lg:h-full lg:w-1/2">
          <div className="relative w-full">
            <div className="hero-float absolute top-20 -left-20 max-lg:-left-5 max-lg:w-1/3">
              <Image
                src="/business-assets/wallet-balance.svg"
                alt="Business wallet balance card"
                width={250}
                height={200}
                priority
                className="hero-float-image h-auto w-[250px] max-lg:w-full"
              />
            </div>
            <div className="hero-float hero-float-delayed absolute -right-20 bottom-8 max-lg:-right-5 max-lg:w-1/3">
              <Image
                src="/business-assets/paid-20k.svg"
                alt="Payment received notification for 20,000 Naira"
                width={250}
                height={200}
                priority
                className="hero-float-image h-auto w-[250px] max-lg:w-full"
              />
            </div>
            <Image
              src="/business-assets/kairo-whatsapp-chat-new.webp"
              alt="Kairo Business WhatsApp chat showing payment and invoice conversation"
              width={500}
              height={700}
              priority
              className="h-auto w-full object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHeroSection;
