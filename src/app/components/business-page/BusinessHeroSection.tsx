import { Icon } from "@iconify/react"
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
          <h1 className="text-6xl font-medium max-sm:text-2xl">
            Collect Payment and <span className="text-accent">Grow</span> your Business
          </h1>
          <p className="mt-6 text-secondary text-lg max-w-2xl lg:max-w-120">
            Kairo Business is not an app. It is a business assistant that lives in your chat.
          </p>
          <a
            href={businessMailto("Start on WhatsApp with Kairo Business")}
            className="mt-10 cursor-pointer flex items-center justify-center gap-2 rounded-3xl bg-accent px-4 py-2 font-medium text-white transition-colors duration-200 ease-in-out hover:bg-accent-hover"
          >
            <Icon icon="ic:baseline-whatsapp" />
            Start on Whatsapp
          </a>
        </div>

        <div className="w-full lg:h-full max-w-xl lg:w-1/2 flex items-end justify-end">
          <div className="w-full relative">
            <div className="hero-float absolute top-20 -left-20 max-lg:-left-5 max-lg:w-1/3">
              <Image
                src="/business-assets/wallet-balance.svg"
                alt="Wallet Balance"
                width={250}
                height={200}
                priority
                className="hero-float-image h-auto w-[250px] max-lg:w-full"
              />
            </div>
            <div className="hero-float hero-float-delayed absolute -right-20 bottom-8 max-lg:-right-5 max-lg:w-1/3">
              <Image
                src="/business-assets/paid-20k.svg"
                alt="Alert of paid 20k"
                width={250}
                height={200}
                priority
                className="hero-float-image h-auto w-[250px] max-lg:w-full"
              />
            </div>
            <Image
              src="/business-assets/kairo-whatsapp-chat.svg"
              alt="Kairo Whatsapp Chat"
              width={500}
              height={700}
              priority
              className="w-full h-full object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessHeroSection;