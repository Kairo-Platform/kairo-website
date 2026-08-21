import { ContentMediaBlock } from "@/app/components";

const features = [
  {
    heading: "What Kairo helps you do",
    list: [
      "Monitor transactions across systems in real time.",
      "Detect and manage operational exceptions faster.",
      "Automate workflow routing and escalation processes.",
    ],
    image: "/teams-assets/reconciliation-dashboard.webp",
    imagePosition: "right" as const,
  },
  {
    heading: "Built for modern financial operations",
    description:
      "From payment operations to settlement monitoring and internal process management, Kairo helps operations teams stay proactive, efficient, and in control.",
    image: "/teams-assets/transaction-flow-2.svg",
    imagePosition: "left" as const,
  },
];

export const KairoOperationsDetailsSection = () => {
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

export default KairoOperationsDetailsSection;
