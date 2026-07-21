import { Reveal } from "@/app/components";
import { SplitContentMediaBlock } from "../SplitContentMediaBlock";
import type { SplitContentMediaBlockProps } from "../SplitContentMediaBlock";

const growthSteps: SplitContentMediaBlockProps[] = [
  {
    heading: "Tell Kairo who to invoice and for what",
    textColor: "text-orange-dark",
    textBg: "bg-orange/10",
    textAnimation: "fade",
    image: "/business-assets/kairo-whatsapp-chat-2.svg",
    imagePosition: "right" as const,
    imageBg: "bg-orange/4",
    mediaAnimation: "bottom",
  },
  {
    heading: "Customer pays from the link",
    textColor: "text-purple",
    textBg: "bg-purple-light",
    image: "/business-assets/kairo-whatsapp-chat-3.svg",
    imagePosition: "left" as const,
    imageBg: "bg-purple/4",
  },
  {
    heading: "Update your storefront by telling Kairo",
    textColor: "text-green",
    textBg: "bg-green-light",
    image: "/business-assets/kairo-whatsapp-chat-4.svg",
    imagePosition: "right" as const,
    imageBg: "bg-green/15",
  },
  {
    heading: "Send promotions to your customer list in one message",
    textColor: "text-yellow",
    textBg: "bg-yellow-light",
    image: "/business-assets/kairo-whatsapp-chat-5.svg",
    imagePosition: "left" as const,
    imageBg: "bg-yellow/4",
  },
];

export const CollectAndGrow = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto mb-12 px-4 lg:mb-16">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-medium leading-snug sm:text-4xl lg:text-5xl">
            Collect and <span className="text-accent">Grow</span>
          </h2>
          <p className="text-pretty text-lg font-medium leading-relaxed text-secondary sm:text-xl">
            Everything your business needs to collect money and grow, all from a
            WhatsApp conversation.
          </p>
        </Reveal>
      </div>

      <div className="mt-5 flex flex-col gap-12 lg:gap-24">
        {growthSteps.map((step) => (
          <SplitContentMediaBlock key={step.heading} {...step} />
        ))}
      </div>
    </section>
  );
};

export default CollectAndGrow;
