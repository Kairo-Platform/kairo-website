import { ContentMediaBlock } from "@/app/components";

const features = [
  {
    heading: "What Kairo helps you do",
    list: [
      "Monitor infrastructure and transaction health in real time.",
      "Track financial flow across systems and payment rails.",
      "View operational performance metrics from one dashboard.",
      "Detect anomalies, delays, and operational risks faster.",
    ],
    image: "/teams-assets/kairo-dashboard-x.webp",
    imagePosition: "right" as const,
  },
  {
    heading: "Built for executive oversight",
    description:
      "From settlement activity to operational efficiency and system performance, Kairo helps executives make faster, data-driven decisions with confidence.",
    image: "/teams-assets/transaction-flow-7.webp",
    imagePosition: "left" as const,
  },
];

export const KairoExecutiveMonitoringDetailsSection = () => {
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

export default KairoExecutiveMonitoringDetailsSection;
