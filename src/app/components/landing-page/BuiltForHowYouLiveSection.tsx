import { Reveal } from "@/app/components";
import { StackedStepCards } from "@/app/components/StackedStepCards";

const steps = [
  {
    title: "Sign up with your BVN",
    image: "/landing-page/live-step-1.webp",
    textColor: "text-orange-dark-02",
    bgColor: "bg-orange/10",
  },
  {
    title: "Confirm your name and DOB",
    image: "/landing-page/live-step-2.webp",
    textColor: "text-purple",
    bgColor: "bg-purple-light",
  },
  {
    title: "Make your first deposit",
    image: "/landing-page/live-step-3.webp",
    textColor: "text-green",
    bgColor: "bg-green-light",
  },
  {
    title: "Everything else follows naturally",
    image: "/landing-page/live-step-4.webp",
    textColor: "text-[#C49200]",
    bgColor: "bg-[#FFFBF2]",
  },
] as const;

export function BuiltForHowYouLiveSection() {
  return (
    <section className="section-padding">
      <div className="flex flex-col items-center gap-12 lg:gap-16">
        <Reveal className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-balance text-3xl font-medium leading-snug sm:text-4xl lg:text-5xl">
            Built for the way you live, earn and spend.
          </h2>
        </Reveal>

        <div className="w-full bg-[#FCFBF9] pt-10 lg:pt-26">
          <StackedStepCards items={steps} />
        </div>
      </div>
    </section>
  );
}

export default BuiltForHowYouLiveSection;
