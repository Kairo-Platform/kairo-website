import { FeatureCardsSection } from "../FeatureCardsSection";

const features = [
  {
    icon: "lucide:send",
    title: "Send & receive money",
    description:
      "Transfer to anyone — by name, number, or account. Kairo resolves the details so you don’t have to hunt for account numbers.",
  },
  {
    icon: "material-symbols:store-outline-rounded",
    title: "Shop from local businesses",
    description:
      "Kairo businesses list their products on the platform. Browse, pick, and pay without leaving the chat.",
  },
  {
    icon: "ion:receipt-outline",
    title: "Pay bills instantly",
    description:
      "Sign up with your business name and phone. Your wallet is ready immediately — no forms, no waiting.",
  },
  {
    icon: "fluent:scan-camera-20-regular",
    title: "Snap to pay",
    description:
      "Take a photo of any account slip or invoice. Kairo reads the details and prepares the transfer — you just confirm.",
  },
] as const;

export const PersonalFeaturesSection = () => {
  return <FeatureCardsSection title="Features" subtitle="From splitting a dinner bill to buying from a local vendor, all from the chat you’re already in." items={features} />;
};

export default PersonalFeaturesSection;
