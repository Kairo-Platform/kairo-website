import { ContentMediaBlock } from "@/app/components";

const features = [
  {
    heading: "What Kairo helps you do",
    list: [
      "Access complete transaction context from one place.",
      "Track payment status, failures, and settlement history in real time.",
      "Resolve customer complaints faster with fewer handoffs.",
      "Reduce escalation volume with intelligent operational insights.",
    ],
    image: "/teams-assets/transaction-flow-5.svg",
    imagePosition: "right" as const,
  },
  {
    heading: "Built for modern support operations",
    description:
      "From failed transfers to delayed settlements and transaction disputes, Kairo helps support teams respond with speed, clarity, and confidence.",
    image: "/teams-assets/transaction-flow-6.svg",
    imagePosition: "left" as const,
  },
];

export const KairoSupportDetailsSection = () => {
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

export default KairoSupportDetailsSection;
