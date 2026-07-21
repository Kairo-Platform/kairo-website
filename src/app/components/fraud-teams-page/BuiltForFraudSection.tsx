import { Reveal } from "@/app/components";
import { StackedIconCards } from "../StackedIconCards";

const cards = [
  {
    icon: "ion:warning-outline",
    title: "Faster fraud detection",
    textColor: "text-white",
    iconColor: "text-[#CBCBCB]",
    iconBgColor: "bg-[#3B3B3B]",
    bgColor: "bg-[#1A1A1A]",
  },
  {
    icon: "icons8:support",
    title: "Reduced operational risk",
    textColor: "text-white",
    iconColor: "text-[#CBCBCB]",
    iconBgColor: "bg-[#3B3B3B]",
    bgColor: "bg-[#1A1A1A]",
  },
  {
    icon: "iconamoon:eye-light",
    title: "Better cross-system visibility",
    textColor: "text-white",
    iconColor: "text-[#CBCBCB]",
    iconBgColor: "bg-[#3B3B3B]",
    bgColor: "bg-[#1A1A1A]",
  },
  {
    icon: "ix:support",
    title: "Improved fraud response efficiency",
    textColor: "text-white",
    iconColor: "text-[#CBCBCB]",
    iconBgColor: "bg-[#3B3B3B]",
    bgColor: "bg-[#1A1A1A]",
  },
] as const;

export const BuiltForFraudSection = () => {
  return (
    <section className="section-padding bg-black">
      <div className="flex flex-col items-center gap-12 lg:gap-16">
        <Reveal className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-balance text-3xl font-medium leading-snug text-white lg:text-6xl lg:leading-tight">
            Built for modern fraud operations
          </h2>
        </Reveal>

        <div className="w-full py-10 lg:min-h-120 lg:pt-20">
          <StackedIconCards items={cards} />
        </div>
      </div>
    </section>
  );
};

export default BuiltForFraudSection;
