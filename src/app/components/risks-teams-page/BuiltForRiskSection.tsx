import { Reveal } from "@/app/components";
import { StackedIconCards } from "../StackedIconCards";

const cards = [
  {
    icon: "ion:warning-outline",
    title: "Faster risk detection",
  },
  {
    icon: "iconamoon:eye-light",
    title: "Better oversight",
  },
  {
    icon: "iconamoon:eye-light",
    title: "Unified system visibility",
  },
  {
    icon: "fluent:sparkle-action-16-filled",
    title: "Smarter decisions",
  },
] as const;

export const BuiltForRiskSection = () => {
  return (
    <section className="section-padding">
      <div className="flex flex-col items-center gap-12 lg:gap-16">
        <Reveal className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-balance text-3xl font-medium leading-snug lg:text-6xl lg:leading-tight">
            Built for modern risk operations
          </h2>
        </Reveal>

        <div className="w-full py-10 lg:min-h-120 lg:pt-20">
          <StackedIconCards items={cards} />
        </div>
      </div>
    </section>
  );
};

export default BuiltForRiskSection;
