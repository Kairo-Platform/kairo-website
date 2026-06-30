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
    <section className="py-24">
      <div className="container mx-auto flex flex-col gap-16 px-4">
        <h2 className="mb-4 text-balance text-3xl font-medium lg:text-6xl text-center">
          Built for modern risk operations
        </h2>
      </div>

      <div className="w-full py-10 lg:min-h-120 lg:pt-20">
        <StackedIconCards items={cards} />
      </div>
    </section>
  );
};

export default BuiltForRiskSection;
