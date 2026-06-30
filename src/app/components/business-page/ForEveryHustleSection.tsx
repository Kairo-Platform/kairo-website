import { Icon } from "@iconify/react";
import { InstitutionScroller } from "@/app/components";
import { businessMailto } from "@/app/constants/contact";

const hustles = [
  "Food vendors",
  "Fashion & beauty",
  "Traders & resellers",
  "Service providers",
];

export const ForEveryHustleSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto flex flex-col items-center gap-12 px-4 lg:flex-row lg:items-center lg:gap-20">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-5xl max-sm:text-2xl font-medium">
            For every kind of hustle
          </h2>
          <a
            href={businessMailto("Start free with Kairo Business")}
            className="mt-10 w-max flex cursor-pointer items-center justify-center gap-2 rounded-3xl border border-accent px-4 py-2 font-medium text-accent transition-colors duration-200 ease-in-out hover:bg-accent hover:text-white"
          >
            Start free today
            <Icon icon="material-symbols:chevron-right-rounded" />
          </a>
        </div>

        <InstitutionScroller items={hustles} />
      </div>
    </section>
  );
};

export default ForEveryHustleSection;
