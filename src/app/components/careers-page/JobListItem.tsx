import Link from "next/link";
import { Icon } from "@iconify/react";
import type { Job } from "@/app/data/jobs";

export function JobListItem({ job }: { job: Job }) {
  return (
    <Link
      href={`/careers/${job.slug}`}
      className="group flex items-center justify-between gap-6 border-b border-[#E0E0E0] px-4 py-8 last:border-b-0 transition-colors duration-200 ease-in-out hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="min-w-0 flex-1">
        <h3 className="text-balance text-xl font-medium leading-snug sm:text-2xl lg:text-[1.75rem]">
          {job.title}
        </h3>
        <p className="mt-1 text-pretty text-base font-medium leading-relaxed text-secondary sm:text-lg lg:text-xl">
          {job.tagline}
        </p>
      </div>
      <Icon
        icon="material-symbols:arrow-right-alt-rounded"
        className="size-8 shrink-0 text-foreground transition-transform duration-200 ease-in-out group-hover:translate-x-1"
        aria-hidden="true"
      />
      <span className="sr-only">View {job.title} role</span>
    </Link>
  );
}

export default JobListItem;
