import { Icon } from "@iconify/react";

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
    <section className={`py-24 ${className}`.trim()}>
      <div className="container mx-auto flex flex-col items-center gap-12 px-4 lg:gap-20">
        <div className="max-w-xl lg:max-w-full">
          <h2 className="text-center text-5xl font-medium max-sm:text-2xl">
            {title}
          </h2>
          {subtitle && <p className="text-center text-xl font-medium text-secondary mt-3">{subtitle}</p>}
        </div>

        <div className={`grid grid-cols-1 gap-12 md:grid-cols-2 ${items.length > 4 ? "lg:grid-cols-3" : ""} lg:gap-20`}>
          {items.map((item) => (
            <article key={item.title} className="flex max-w-96 p-6 rounded-2xl flex-col gap-10 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                <Icon icon={item.icon} className="text-accent" />
              </span>

              <div>
                <h3 className="text-2xl font-medium">{item.title}</h3>
                <p className="font-medium text-secondary">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureCardsSection;
