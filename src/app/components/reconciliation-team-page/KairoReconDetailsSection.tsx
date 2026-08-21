import { ContentMediaBlock } from "@/app/components";

const features = [
  {
    heading: "What Kairo helps you do",
    list: [
      "Automate reconciliation across rails and systems.",
      "Spot mismatches and exceptions in real time.",
      "Reduce manual work and keep audit-ready records.",
    ],
    image: "/teams-assets/reconciliation-dashboard.webp",
    imagePosition: "right" as const,
  },
  {
    heading: "Built for modern financial operations",
    description:
      "Kairo gives operations teams real-time visibility and control across financial infrastructure.",
    image: "/teams-assets/transaction-flow.svg",
    imagePosition: "left" as const,
  },
];

export const KairoReconDetailsSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto flex flex-col gap-12 px-4 lg:gap-20">
        {features.map((feature) => (
          <ContentMediaBlock key={feature.heading} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default KairoReconDetailsSection;
