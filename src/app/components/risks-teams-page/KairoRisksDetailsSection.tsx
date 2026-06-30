import { ContentMediaBlock } from "@/app/components";

const features = [
  {
    heading: "What Kairo helps you do",
    list: [
      "Monitor risk signals and behavioral anomalies in real time",
      "Surface exposure patterns across systems and transaction flows",
      "Improve decision-making with unified risk visibility",
    ],
    image: "/teams-assets/transaction-flow-3.svg",
    imagePosition: "right" as const,
  },
];

export const KairoRisksDetailsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto flex flex-col gap-16 px-4">
        {features.map((feature) => (
          <ContentMediaBlock key={feature.heading} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default KairoRisksDetailsSection;
