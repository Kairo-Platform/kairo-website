import { ContentMediaBlock } from "@/app/components";

const features = [
  {
    heading: "What Kairo helps you do",
    list: [
      "Detect unusual transaction behavior and correlate fraud signals across channels and systems.",
      "Trigger real-time alerts for suspicious activity and monitor risk patterns.",
      "Reduce manual fraud investigation with faster, smarter detection.",
    ],
    image: "/teams-assets/transaction-flow-4.svg",
    imagePosition: "right" as const,
  },
];

export const KairoFraudDetailsSection = () => {
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

export default KairoFraudDetailsSection;
