import { Reveal } from "@/app/components/Reveal";

const values = [
  {
    title: "Think deeply. Build simply.",
    description:
      "We deal with complex systems, but complexity shouldn't automatically become complexity in the products we build. We look for clarity.",
  },
  {
    title: "Move with purpose.",
    description:
      "We don't believe in moving fast just for the sake of moving fast. We move quickly when the problem is understood, the decision is clear, and the work creates meaningful progress.",
  },
  {
    title: "Stay curious.",
    description:
      "Technology changes. Markets change. Problems evolve. We expect everyone at Kairo to keep learning, questioning, and exploring.",
  },
] as const;

export function HowWeWorkSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto flex flex-col gap-12 px-4 lg:gap-14">
        <Reveal>
          <h2 className="text-center text-balance text-4xl font-medium leading-snug lg:text-5xl xl:text-6xl">
            How we work
          </h2>
        </Reveal>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {values.map((value) => (
            <li key={value.title}>
              <Reveal animation="bottom" className="min-h-90 h-full">
                <article className="flex h-full flex-col justify-end rounded-2xl bg-gray-02 p-8 sm:p-9">
                  <h3 className="text-2xl font-medium leading-snug sm:text-3xl">
                    {value.title}
                  </h3>
                  <p className="mt-5 text-pretty text-lg font-medium leading-relaxed text-text-04">
                    {value.description}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HowWeWorkSection;
