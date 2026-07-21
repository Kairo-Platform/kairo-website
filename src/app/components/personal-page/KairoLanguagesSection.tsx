import { Icon } from "@iconify/react";
import { InstitutionScroller, Reveal } from "@/app/components";
import { businessMailto } from "@/app/constants/contact";

const languages = [
  "Yoruba",
  "Igbo",
  "Hausa",
  "Pidgin",
  "English",
  "French",
  "Swahili",
];

export const KairoLanguagesSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto flex flex-col items-center gap-12 px-4 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
        <Reveal animation="left" className="max-w-xl text-center lg:text-left">
          <h2 className="text-balance text-3xl font-medium leading-snug sm:text-4xl lg:text-5xl">
            Kairo was built for how Africans actually talk.
          </h2>
          <a
            href={businessMailto("Start free with Kairo Personal")}
            className="cta-button-outline mt-8"
          >
            Start free today
            <Icon
              icon="material-symbols:chevron-right-rounded"
              aria-hidden="true"
            />
          </a>
        </Reveal>

        <Reveal animation="right" className="w-full lg:flex-1">
          <InstitutionScroller items={languages} />
        </Reveal>
      </div>
    </section>
  );
};

export default KairoLanguagesSection;
