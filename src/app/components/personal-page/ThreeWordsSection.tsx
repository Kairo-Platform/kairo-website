import { Reveal } from "@/app/components";
import { MediaTextFlex } from "../MediaTextFlex";

export const ThreeWordsSection = () => {
  return (
    <section className="bg-accent/10 pt-24">
      <div className="container mx-auto flex flex-col items-center gap-12 px-4 lg:gap-16">
        <Reveal className="max-w-xl lg:max-w-3xl">
          <h2 className="text-center text-balance text-3xl font-medium leading-snug sm:text-4xl lg:text-5xl">
            Three words and your money{" "}
            <span className="text-accent">moves</span>
          </h2>
        </Reveal>

        <MediaTextFlex
          image="/personal-assets/send-whatsapp-message.webp"
          imageAlt="WhatsApp chat showing a plain-language money request"
          title="Say what you want"
          description="Type it, say it, or snap a photo of the account details. Kairo understands plain language — even in Yoruba, Pidgin, Hausa, or Igbo."
          imagePosition="left"
          titleColor="text-[#BF9000]"
        />
      </div>

      <div className="w-full bg-[#F2FCFB] pt-24">
        <div className="container mx-auto flex flex-col items-center gap-12 px-4 lg:gap-16">
          <MediaTextFlex
            image="/personal-assets/receive-whatsapp-message.webp"
            imageAlt="WhatsApp chat showing Kairo confirmation before sending money"
            title="Kairo confirms"
            description="Before anything moves, Kairo shows you a clear summary — recipient, amount, and source. One tap to confirm or simply say “yes.”"
            imagePosition="right"
            titleColor="text-[#00C2A8]"
          />
        </div>
      </div>

      <div className="w-full bg-[#FBF8FF] pt-24">
        <div className="container mx-auto flex flex-col items-center gap-12 px-4 lg:gap-16">
          <MediaTextFlex
            image="/personal-assets/done-transaction-on-whatsapp.webp"
            imageAlt="WhatsApp chat showing a completed transaction receipt"
            title="Done in seconds"
            description="Money sent. Bill paid. Receipt in your chat. Everything tracked automatically so you always know where your money went."
            imagePosition="left"
            titleColor="text-[#8650BF]"
          />
        </div>
      </div>
    </section>
  );
};

export default ThreeWordsSection;
