import { InstitutionScroller, Reveal } from "@/app/components";

const languages = [
  "Yoruba",
  "Hausa",
  "Igbo",
  "Pidgin",
  "Swahili",
  "Zulu",
  "French",
];

export function KairoLanguagesSection() {
  return (
    <section
      aria-labelledby="kairo-languages-heading"
      className="relative isolate mx-auto max-w-435 overflow-hidden rounded-[40px] bg-[#ff7b33] py-20 pb-36 lg:rounded-[100px] lg:py-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-[-9.5%] left-[33.3%] aspect-1220/1282 w-[70.1%] bg-[url('/landing-page/languages/glow-right.svg')] bg-contain bg-no-repeat mix-blend-screen" />
        <div className="absolute top-[30.7%] left-[-13.7%] aspect-square w-[44.7%] bg-[url('/landing-page/languages/glow-left.svg')] bg-contain bg-no-repeat mix-blend-screen" />
      </div>
      <div className="container mx-auto grid px-4 items-center gap-12 lg:min-h-269 lg:grid-cols-[minmax(0,512fr)_minmax(0,260fr)] lg:gap-24 xl:gap-50">
        <Reveal animation="left">
          <h2
            id="kairo-languages-heading"
            className="max-w-lg text-balance text-3xl leading-tight! font-medium tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl lg:leading-15!"
          >
            Built for how Africans actually talk, pay, and do business.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-7 font-medium tracking-[-0.03em] text-[#ffdac6] sm:text-xl lg:text-2xl lg:leading-8">
            Kairo understands the way you communicate and helps you get things
            done naturally.
          </p>
        </Reveal>
        <Reveal animation="right" className="min-w-0 pl-6 sm:pl-12 lg:pl-0">
          <InstitutionScroller items={languages} variant="languages" />
        </Reveal>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[6.66%] flex w-full translate-y-[31.35%]"
      >
        {Array.from({ length: 8 }, (_, index) => (
          <div
            key={index}
            className={`mr-[-2.7%] aspect-square w-[13.56%] shrink-0 bg-contain bg-no-repeat ${index % 2 ? "-scale-x-100 bg-[url('/landing-page/languages/voice-reflected.svg')]" : "bg-[url('/landing-page/languages/voice.svg')]"}`}
          />
        ))}
      </div>
    </section>
  );
}

export default KairoLanguagesSection;
