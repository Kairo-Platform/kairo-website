import { renderRichText } from "./JobApplyButton";

export function JobIntro({ paragraphs }: { paragraphs: string[] }) {
  return (
    <section className="pt-12 lg:pt-16">
      <div className="container mx-auto px-4 lg:px-8 xl:px-16">
        <div className="flex flex-col gap-4 text-lg leading-relaxed sm:text-xl lg:text-2xl lg:leading-9">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-pretty">
              {renderRichText(paragraph)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobIntro;
