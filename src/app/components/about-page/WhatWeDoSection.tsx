import { ContentMediaBlock } from "@/app/components";

const features = [
  {
    heading: "Kairo personal",
    subheading: "Conversational payments for everyday people.",
    description:
      "Users can send money, pay bills, shop, and complete transactions using simple natural language through WhatsApp, voice, or chat in English, Yoruba, Hausa, Pidgin, Igbo, Twi, Swahili, and more.",
    image: "/what-we-do-assets/kairo-personal.svg",
    imagePosition: "right" as const,
  },
  {
    heading: "Kairo business",
    subheading: "An AI-powered business assistant built inside WhatsApp.",
    description: "Small businesses can create invoices, collect payments, manage storefronts, automate customer responses, send promotions, and receive business insights — all from conversations they already have every day. Kairo helps businesses collect properly and grow consistently",
    image: "/what-we-do-assets/kairo-business.svg",
    imagePosition: "left" as const,
  },
  {
    heading: "Kairo enterprise",
    subheading: "Operational intelligence infrastructure for financial institutions",
    description: "Banks, finTechs, and payment processors use Kairo to automate reconciliation, detect fraud in real time, orchestrate transaction routing, manage operational risk, and power AI-driven financial support systems.",
    image: "/what-we-do-assets/kairo-enterprise.svg",
    imagePosition: "right" as const,
  },
];

export const WhatWeDoSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto flex flex-col gap-16 px-4">
        <div className="mx-auto max-w-3xl text-center lg:mb-10">
          <h2 className="text-4xl font-medium leading-14 lg:text-5xl">
            What We Do
          </h2>
          <p className="text-secondary text-lg font-medium mt-4">Kairo operates across three intelligent layers:</p>
        </div>

        <div className="flex flex-col gap-6 lg:gap-20">
          {features.map((feature) => (
            <ContentMediaBlock key={feature.heading} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
