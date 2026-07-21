import { Reveal } from "@/app/components";

export const TheFutureSection = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto flex flex-col gap-10 px-4 text-center">
        <Reveal className="mx-auto max-w-4xl">
          <h2 className="text-balance text-4xl font-medium leading-snug lg:text-6xl">
            The Future is Conversational
          </h2>
        </Reveal>
        <Reveal animation="bottom" className="mx-auto max-w-5xl">
          <p className="text-pretty text-3xl font-medium leading-snug text-secondary lg:text-5xl lg:leading-tight">
            Every transaction tells a story. Every interaction generates
            intelligence. Every conversation can become infrastructure.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default TheFutureSection;
