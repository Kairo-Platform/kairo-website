import { FeatureCardsSection } from "../FeatureCardsSection";

const features = [
  {
    icon: "material-symbols:check-circle-outline",
    title: "Business wallet",
    description:
      "Receive payments, pay suppliers, and track every transaction. Your money, always in order.",
  },
  {
    icon: "stash:billing-info-light",
    title: "Invoicing",
    description:
      "Create a professional invoice in 30 seconds. Send it on WhatsApp. Get paid from the link.",
  },
  {
    icon: "material-symbols:store-outline-rounded",
    title: "Your storefront",
    description:
      "A clean product page for your business — photos, prices, and a buy button. Share the link anywhere.",
  },
  {
    icon: "mdi:email-outline",
    title: "Email & offers",
    description:
      "Build your customer list. Send promotions, new menu drops, restock alerts — directly to their inbox.",
  },
  {
    icon: "ix:support",
    title: "Customer support",
    description:
      "AI handles routine questions while you focus on the work. Escalates only when you’re needed.",
  },
  {
    icon: "ic:outline-whatsapp",
    title: "Pay via chat",
    description:
      "Customers order and pay right from WhatsApp or Telegram. No redirects, no confusion.",
  },
] as const;

export const EverythingInOnePlaceSection = () => {
  return <FeatureCardsSection title="Everything in one place" items={features} />;
};

export default EverythingInOnePlaceSection;
