import { ContentMediaBlock, Reveal } from "@/app/components";

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
    description:
      "Small businesses can create invoices, collect payments, manage storefronts, automate customer responses, send promotions, and receive business insights — all from conversations they already have every day. Kairo helps businesses collect properly and grow consistently.",
    image: "/what-we-do-assets/kairo-business.svg",
    imagePosition: "left" as const,
  },
  {
    heading: "Kairo enterprise",
    subheading: "Operational intelligence infrastructure for financial institutions",
    description:
      "Banks, finTechs, and payment processors use Kairo to automate reconciliation, detect fraud in real time, orchestrate transaction routing, manage operational risk, and power AI-driven financial support systems.",
    image: "/what-we-do-assets/kairo-enterprise.svg",
    imagePosition: "right" as const,
  },
];

export const WhatWeDoSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto flex flex-col gap-16 px-4 lg:gap-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-4xl font-medium leading-snug lg:text-5xl">
            What We Do
          </h2>
          <p className="mt-4 text-pretty text-lg font-medium leading-relaxed text-secondary">
            Kairo operates across three intelligent layers:
          </p>
        </Reveal>

        <div className="flex flex-col gap-12 lg:gap-20">
          {features.map((feature) => (
            <ContentMediaBlock key={feature.heading} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
