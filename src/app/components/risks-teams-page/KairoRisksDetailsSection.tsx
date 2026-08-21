import { ContentMediaBlock } from "@/app/components";

const features = [
  {
    heading: "What Kairo helps you do",
    list: [
      "Monitor risk signals and behavioral anomalies in real time.",
      "Surface exposure patterns across systems and transaction flows.",
      "Improve decision-making with unified risk visibility.",
    ],
    image: "/teams-assets/transaction-flow-3.webp",
    imagePosition: "right" as const,
  },
];

export const KairoRisksDetailsSection = () => {
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

export default KairoRisksDetailsSection;
