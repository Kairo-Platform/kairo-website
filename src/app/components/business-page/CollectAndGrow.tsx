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
    <section className="py-24">
      <div className="container mx-auto mb-16 px-4">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-3 text-5xl font-medium max-sm:text-2xl">
            Collect and <span className="text-accent">Grow</span>
          </h2>
          <p className="text-xl text-secondary font-medium">
            Everything your business needs to collect money and grow, all from a
            WhatsApp conversation.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-12 lg:gap-24 mt-5">
        {growthSteps.map((step) => (
          <SplitContentMediaBlock key={step.heading} {...step} />
        ))}
      </div>
    </section>
  );
};

export default CollectAndGrow;
