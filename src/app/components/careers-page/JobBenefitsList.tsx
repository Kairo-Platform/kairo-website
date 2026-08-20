import type { JobBenefit } from "@/app/data/jobs";

type JobBenefitsListProps = {
  title: string;
  items: JobBenefit[];
};

export function JobBenefitsList({ title, items }: JobBenefitsListProps) {
  return (
    <section className="pt-16 lg:pt-24">
      <div className="container mx-auto px-4 lg:px-8 xl:px-16">
        <h2 className="text-balance text-3xl font-semibold leading-snug sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        <ul className="mt-10 flex flex-col gap-6">
          {items.map((item) => (
            <li key={item.title} className="flex gap-5">
              <span
                aria-hidden="true"
                className="mt-2 h-5 w-5 shrink-0 bg-accent"
              />
              <div className="min-w-0">
                <h3 className="text-2xl font-medium leading-snug sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-pretty text-lg font-medium leading-relaxed text-text-04 sm:text-xl">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default JobBenefitsList;
