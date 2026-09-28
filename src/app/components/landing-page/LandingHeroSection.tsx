import Image from "next/image";
import { Icon } from "@iconify/react";
import { Instrument_Sans } from "next/font/google";
import { businessMailto } from "@/app/constants/contact";
import Reveal from "../Reveal";
import Link from "next/link";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

export function LandingHeroSection() {
  return (
    <section
      className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden bg-[#fffcfa]"
      aria-labelledby="landing-hero-heading"
    >
      <div
        className="pointer-events-none absolute -top-33.5 left-0 h-310.25 w-[max(100%,1862px)] bg-[url('/landing-page/hero/grid.webp')] bg-cover bg-center bg-no-repeat opacity-8 mix-blend-multiply"
        aria-hidden="true"
      />
      <div className="relative w-full overflow-hidden mb-[6%]">
        <div className="relative container mx-auto grid min-h-[clamp(640px,42.48vw,734px)] grid-cols-1 px-4 lg:grid-cols-[680fr_710fr]">
          <div className="z-10 pt-12 min-[480px]:pt-16 lg:pt-[clamp(120px,11.63vw,201px)] lg:pb-25 flex flex-col max-lg:items-center max-lg:text-center">
            <Reveal animation="bottom">
              <h1
                id="landing-hero-heading"
                className={`${instrumentSans.className} m-0 max-w-170 text-[38px] leading-[1.207]! font-medium tracking-[-0.04em] text-[#1a1a1a] min-[480px]:text-[clamp(38px,6vw,52px)] lg:text-[clamp(40px,3.357vw,58px)] text-pretty`}
              >
                Move money and <span className="text-accent">grow</span> your
                business, all in one place.
              </h1>
            </Reveal>
            <Reveal animation="bottom" className="delay-150">
              <p className="mt-4.5 max-w-xl text-base text-pretty leading-6.5 font-medium tracking-[-0.03em] text-secondary min-[480px]:text-lg min-[480px]:leading-7">
                Send money, pay bills, and buy from businesses, all from
                WhatsApp, your voice, or a quick snap of account details. No
                app. No learning curve.
              </p>
            </Reveal>
            <Reveal animation="bottom" className="delay-300">
              <Link
                href={businessMailto("Start chatting with Kairo")}
                className="mt-7 inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-[36px] bg-orange py-3 pr-5 pl-3.5 text-[15px] leading-5 font-medium tracking-[-0.01em] text-white transition-[translate,scale,background-color,box-shadow] duration-300 ease-out hover:bg-orange-dark hover:shadow-lg hover:shadow-orange/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange motion-safe:hover:translate-x-1 motion-safe:hover:-translate-y-1 motion-safe:active:scale-98 motion-reduce:transition-none lg:mt-12.25"
              >
                <Icon
                  icon="ic:outline-whatsapp"
                  width={20}
                  height={20}
                  aria-hidden="true"
                />
                <span>Start chatting</span>
              </Link>
            </Reveal>
          </div>
          <div className="relative mx-auto mt-12 -mb-22.5 aspect-[735.186/857] w-full max-w-150 self-start min-[480px]:-mb-40 lg:mx-0 lg:mt-22.5 lg:-mb-75 lg:w-[calc(100%+25px)] lg:max-w-none">
            <div
              className="absolute top-[8.73%] left-[9.47%] h-[76.31%] w-[81.07%] rotate-[-13.85deg] rounded-3xl bg-[#ffe2d2] bg-[linear-gradient(180deg,#fffcfa33,#fff3ec33)]"
              aria-hidden="true"
            />
            <div className="relative left-[19.72%] aspect-441/857 w-[59.985%] overflow-hidden motion-safe:animate-[hero-float_6s_ease-in-out_infinite]">
              <Image
                src="/landing-page/hero/invoice-phone.webp"
                alt="Kairo WhatsApp conversation creating an invoice and sharing a payment link"
                width={4000}
                height={3000}
                sizes="(max-width: 767px) 190vw, (max-width: 1023px) 1470px, 90vw"
                priority
                className="absolute top-[-12.51%] left-[-64.62%] h-[128.53%] w-[333.33%] max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingHeroSection;
