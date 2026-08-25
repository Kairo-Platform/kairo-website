import { ContentMediaBlock, Reveal } from "@/app/components";

const features = [
  {
    title: "Kairo Recon",
    heading: "AI-powered reconciliation and settlement operations system",
    description:
      "Detects suspicious patterns, tracks transactions, generates fraud alerts, manages investigation cases, and analyzes behavioral activities to identify and prevent fraudulent actions.",
    image: "/kairo-features/kairo-recon.webp",
    imagePosition: "right" as const,
  },
  {
    title: "Kairo Flow",
    heading: "Conversational transaction infrastructure",
    description: "Enables financial institutions to power transactions and operational workflows across chat, voice, messaging platforms, and AI-driven channels.",
    image: "/kairo-features/kairo-flow.webp",
    imagePosition: "left" as const,
  },
  {
    title: "Kairo Support",
    heading: "AI-powered operations support assistant",
    description: "Streamlines internal support through intelligent ticket routing, incident summarization, troubleshooting assistance, and fast operational knowledge retrieval.",
    image: "/kairo-features/kairo-support.webp",
    imagePosition: "right" as const,
  },
  {
    title: "Kairo Fraud",
    heading: "AI-powered fraud detection and investigation system",
    description:
      "Monitors suspicious patterns, triggers fraud alerts, manages investigation cases, traces transactions, and analyzes user behavior for risk intelligence.",
    image: "/kairo-features/kairo-fraud.webp",
    imagePosition: "left" as const,
  },
  {
    title: "Kairo Insights",
    heading: "Operational intelligence and business analytics tool",
    description: "Monitors revenue gaps, analyze transaction behavior, evaluate merchant performance, measure operational efficiency, and generate AI-powered business reports for smarter decision-making.",
    image: "/kairo-features/kairo-insights.webp",
    imagePosition: "right" as const,
  },
  {
    title: "Kairo Connect",
    heading: "Streamlines integration",
    description: "Kairo Connects streamlines integration between core banking, payment gateways, ERP systems, and other key tools—making business operations seamless and connected.",
    image: "/kairo-features/kairo-connect.webp",
    imagePosition: "left" as const,
  },
];

export const FeaturesSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto flex flex-col gap-16 px-4 lg:gap-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-pretty text-4xl font-medium leading-snug lg:text-5xl">
            <span className="text-accent">One platform.</span> Every financial
            operation handled
          </h2>
        </Reveal>

        <div className="flex flex-col gap-12 lg:gap-20">
          {features.map((feature) => (
            <ContentMediaBlock key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
