import Link from "next/link";
import { Icon } from "@iconify/react";
import type { Job } from "@/app/data/jobs";
import { JobApplyButton } from "./JobApplyButton";

export function JobDetailHeader({ job }: { job: Job }) {
  return (
    <header className="pt-10 lg:pt-14">
      <div className="container mx-auto px-4 lg:px-8 xl:px-16">
        <Link
          href="/careers"
          className="inline-flex items-center justify-center gap-1 rounded-3xl border border-gray px-4 py-2 text-sm font-medium text-foreground transition-colors duration-200 ease-in-out hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent"
        >
          <Icon
            icon="material-symbols:chevron-left-rounded"
            className="size-5"
            aria-hidden="true"
          />
          Back to careers
        </Link>

        <div className="mt-12 flex flex-col gap-8 lg:mt-16 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl font-semibold tracking-normal leading-tight sm:text-5xl lg:text-6xl">
              {job.title}
            </h1>
            <p className="mt-3 text-pretty text-xl font-medium leading-snug text-secondary sm:text-2xl">
              {job.tagline}
            </p>
          </div>
          <JobApplyButton label={job.applyLabel} className="self-start" />
        </div>
      </div>
    </header>
  );
}

export default JobDetailHeader;
