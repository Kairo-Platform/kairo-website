import { Reveal } from "@/app/components";
import { StackedStepCards } from "../StackedStepCards";

const steps = [
  {
    title: "Sign up with your phone number",
    image: "/business-assets/kairo-whatsapp-signup-form.svg",
    textColor: "text-orange-dark-02",
    bgColor: "bg-orange/10",
  },
  {
    title: "Kairo introduces itself in WhatsApp",
    image: "/business-assets/kairo-chat-intro.svg",
    textColor: "text-purple",
    bgColor: "bg-purple-light",
  },
  {
    title: "Collect your first payment",
    image: "/business-assets/kairo-first-payment-received-chat.svg",
    textColor: "text-green",
    bgColor: "bg-green-light",
  },
  {
    title: "Everything else follows naturally",
    image: "/business-assets/kairo-ideal-chat-sample.svg",
    textColor: "text-green",
    bgColor: "bg-green-light",
  },
] as const;

export const UpAndRunningSection = () => {
  return (
    <section className="section-padding">
      <div className="flex flex-col items-center gap-12 lg:gap-16">
        <Reveal className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-balance text-3xl font-medium leading-snug sm:text-4xl lg:text-5xl">
            <span className="text-accent">Up and running</span> before your next
            order
          </h2>
        </Reveal>

        <div className="w-full bg-gray-02 py-10 lg:min-h-120 lg:pt-20">
          <StackedStepCards items={steps} />
        </div>
      </div>
    </section>
  );
};

export default UpAndRunningSection;
