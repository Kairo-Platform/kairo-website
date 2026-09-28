import { Icon } from "@iconify/react";
import Link from "next/link";
import { Reveal } from "@/app/components";
import { businessMailto } from "@/app/constants/contact";
import { StackedStepCards } from "@/app/components/StackedStepCards";

const steps = [
  {
    title: "Sign up with your BVN",
    image: "/landing-page/how-it-works/step-1.webp",
    badgeColor: "bg-[#f4e9ff] text-[#8650bf]",
    phoneWidth: 235,
    phoneHeight: 439,
    imageStyle: {
      height: "128.24%",
      left: "-59.2%",
      top: "-12.33%",
      width: "320.25%",
    },
  },
  {
    title: "Confirm your name and DOB",
    image: "/landing-page/how-it-works/step-2.webp",
    badgeColor: "bg-[#fff0e8] text-orange",
    phoneWidth: 255,
    phoneHeight: 479,
    imageStyle: {
      height: "127.81%",
      left: "-58.77%",
      top: "-12.04%",
      width: "319.39%",
    },
  },
  {
    title: "Make your first deposit",
    image: "/landing-page/how-it-works/step-3.webp",
    badgeColor: "bg-[#ddf5da] text-[#00bf06]",
    phoneWidth: 245,
    phoneHeight: 463,
    imageStyle: {
      height: "129.44%",
      left: "-62.33%",
      top: "-12.81%",
      width: "326.04%",
    },
  },
  {
    title: "Everything else follows naturally",
    image: "/landing-page/how-it-works/step-4.webp",
    badgeColor: "bg-[#c9dcf5] text-[#3d7ebf]",
    phoneWidth: 259,
    phoneHeight: 495,
    imageStyle: {
      height: "128.04%",
      left: "-62.47%",
      top: "-12.48%",
      width: "327.12%",
    },
  },
] as const;

export function BuiltForHowYouLiveSection() {
  return (
    <section
      className="bg-[#fffcfa] py-20 lg:py-30"
      aria-labelledby="how-it-works-heading"
    >
      <div className="container mx-auto px-4">
        <Reveal className="flex flex-col gap-6 md:flex-row justify-center items-center md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-lg leading-7 font-medium tracking-[-0.03em] text-orange  max-md:text-center">
              How it works
            </p>
            <h2
              id="how-it-works-heading"
              className="max-w-170  max-md:text-center text-balance text-3xl leading-tight font-medium tracking-[-0.02em] text-[#1a1a1a] sm:text-4xl lg:text-5xl lg:leading-15"
            >
              Get Kairo running in minutes.
            </h2>
          </div>
          <Link
            href={businessMailto("Start chatting with Kairo")}
            className="inline-flex h-11 w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-orange pr-5 pl-3.5 text-[15px] leading-5 font-medium tracking-[-0.01em] text-white transition-[translate,background-color,box-shadow] duration-300 ease-out hover:bg-orange-dark hover:shadow-lg hover:shadow-orange/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange motion-safe:hover:translate-x-1 motion-safe:hover:-translate-y-1 motion-reduce:transition-none sm:mb-2"
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
        <StackedStepCards items={steps} className="mt-16 lg:mt-25" />
      </div>
    </section>
  );
}

export default BuiltForHowYouLiveSection;
