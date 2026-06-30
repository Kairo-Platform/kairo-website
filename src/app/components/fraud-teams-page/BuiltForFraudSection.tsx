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
    <section className="py-24 bg-black">
      <div className="container mx-auto flex flex-col gap-16 px-4">
        <h2 className="mb-4 text-balance text-3xl font-medium lg:text-6xl text-center text-white">
          Built for modern fraud operations
        </h2>
      </div>

      <div className="w-full py-10 lg:min-h-120 lg:pt-20">
        <StackedIconCards items={cards} />
      </div>
    </section>
  );
};

export default BuiltForFraudSection;
