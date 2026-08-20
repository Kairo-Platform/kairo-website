import { Reveal } from "@/app/components/Reveal";
import { getJobs } from "@/app/data/jobs";
import { JobListItem } from "./JobListItem";

export function OpenRolesSection() {
  const jobs = getJobs();

  return (
    <section className="pb-24 pt-8 lg:pb-32 lg:pt-10">
      <div className="container mx-auto flex max-w-5xl flex-col gap-12 px-4 lg:gap-16">
        <Reveal>
          <h2 className="text-center text-balance text-4xl font-medium leading-snug lg:text-5xl xl:text-6xl">
            Open roles
          </h2>
        </Reveal>

        <Reveal animation="bottom">
          <div className="rounded-xl bg-gray-02 px-4 py-6 sm:px-8 sm:py-10 lg:px-14 lg:py-14">
            <ul>
              {jobs.map((job) => (
                <li key={job.slug} className="border-b border-[#E0E0E0] last:border-b-0">
                  <JobListItem job={job} />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default OpenRolesSection;
