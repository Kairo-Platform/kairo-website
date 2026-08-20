import { renderRichText } from "./JobApplyButton";

type JobSectionListProps = {
  title: string;
  intro?: string;
  items: string[];
  closing?: string;
};

export function JobSectionList({
  title,
  intro,
  items,
  closing,
}: JobSectionListProps) {
  const introLines = intro?.split("\n").filter(Boolean) ?? [];

  return (
    <section className="pt-16 lg:pt-24">
      <div className="container mx-auto px-4 lg:px-8 xl:px-16">
        <h2 className="text-balance text-3xl font-semibold leading-snug sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        {introLines.length > 0 ? (
          <div className="mt-6 flex flex-col gap-2 text-lg leading-relaxed sm:text-xl lg:text-2xl lg:leading-10">
            {introLines.map((line, index) => (
              <p key={index} className="text-pretty">
                {renderRichText(line)}
              </p>
            ))}
          </div>
        ) : null}

        {items.length > 0 ? (
          <ul className="mt-6 list-disc space-y-2 pl-6 text-lg font-medium leading-relaxed sm:text-xl lg:text-2xl lg:leading-10">
            {items.map((item) => (
              <li key={item} className="text-pretty pl-1">
                {renderRichText(item)}
              </li>
            ))}
          </ul>
        ) : null}

        {closing ? (
          <p className="mt-6 text-pretty text-lg font-semibold leading-relaxed sm:text-xl lg:text-2xl lg:leading-10">
            {renderRichText(closing)}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export default JobSectionList;
