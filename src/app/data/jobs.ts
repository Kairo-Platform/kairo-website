import jobsData from "./jobs.json";

export type JobBenefit = {
  title: string;
  description: string;
};

export type JobSection =
  | {
      type: "list";
      title: string;
      intro?: string;
      items: string[];
      closing?: string;
    }
  | {
      type: "benefits";
      title: string;
      items: JobBenefit[];
    };

export type Job = {
  slug: string;
  title: string;
  tagline: string;
  applyLabel: string;
  intro: string[];
  sections: JobSection[];
  closing: {
    title: string;
    body: string;
  };
};

const jobs = jobsData as Job[];

export function getJobs(): Job[] {
  return jobs;
}

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}

export function getJobSlugs(): string[] {
  return jobs.map((job) => job.slug);
}
