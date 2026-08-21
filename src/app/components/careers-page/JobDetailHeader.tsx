import type { Job } from "@/app/data/jobs";
import { BackToCareersButton } from "./BackToCareersButton";
import { JobApplyButton } from "./JobApplyButton";

export function JobDetailHeader({ job }: { job: Job }) {
  return (
    <header className="pt-10 lg:pt-14">
      <div className="container mx-auto px-4 lg:px-8 xl:px-16">
        <BackToCareersButton />

        <div className="mt-12 flex flex-col gap-8 lg:mt-16 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl font-semibold tracking-normal leading-tight sm:text-5xl lg:text-6xl">
              {job.title}
            </h1>
            <p className="mt-3 text-pretty text-xl font-medium leading-snug text-secondary sm:text-2xl">
              {job.tagline}
            </p>
          </div>
          <JobApplyButton
            label={job.applyLabel}
            href={job.applicationUrl}
            className="self-start"
          />
        </div>
      </div>
    </header>
  );
}

export default JobDetailHeader;
