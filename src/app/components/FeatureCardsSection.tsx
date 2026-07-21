import { Icon } from "@iconify/react";
import { Reveal } from "@/app/components/Reveal";

export type FeatureCardItem = {
  icon: string;
  title: string;
  description: string;
};

export type FeatureCardsSectionProps = {
  title: string;
  subtitle?: string;
  items: readonly FeatureCardItem[];
  className?: string;
};

export function FeatureCardsSection({
  title,
  subtitle,
  items,
  className = "",
}: FeatureCardsSectionProps) {
  return (
    <section className={`section-padding ${className}`.trim()}>
      <div className="container mx-auto flex flex-col items-center gap-12 px-4 lg:gap-16">
        <Reveal className="max-w-xl lg:max-w-3xl">
          <h2 className="text-center text-balance text-3xl font-medium leading-snug sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 text-center text-pretty text-lg font-medium leading-relaxed text-secondary sm:text-xl">
              {subtitle}
            </p>
          ) : null}
        </Reveal>

        <ul
          className={`grid grid-cols-1 gap-8 md:grid-cols-2 ${items.length > 4 ? "lg:grid-cols-3" : "lg:grid-cols-2"} lg:gap-12 xl:gap-16`}
        >
          {items.map((item) => (
            <li key={item.title}>
              <Reveal animation="bottom">
                <article className="flex max-w-96 flex-col gap-8 rounded-2xl p-6 transition-transform duration-300 ease-in-out motion-reduce:transition-none hover:scale-[1.02] motion-reduce:hover:scale-100 hover:shadow-md">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <Icon
                      icon={item.icon}
                      className="text-accent"
                      aria-hidden="true"
                    />
                  </span>

                  <div>
                    <h3 className="text-2xl font-medium leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-pretty font-medium leading-relaxed text-secondary">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FeatureCardsSection;
