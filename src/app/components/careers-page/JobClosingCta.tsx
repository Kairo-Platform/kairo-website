import { JobApplyButton } from "./JobApplyButton";

type JobClosingCtaProps = {
  title: string;
  body: string;
  applyLabel: string;
};

export function JobClosingCta({ title, body, applyLabel }: JobClosingCtaProps) {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 lg:px-8 xl:px-16">
        <h2 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        <p className="mt-4 max-w-3xl text-pretty text-lg leading-relaxed sm:text-xl lg:text-2xl lg:leading-10">
          {body}
        </p>
        <JobApplyButton label={applyLabel} className="mt-8" />
      </div>
    </section>
  );
}

export default JobClosingCta;
