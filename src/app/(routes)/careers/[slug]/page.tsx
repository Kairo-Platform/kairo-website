import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  JobBenefitsList,
  JobClosingCta,
  JobDetailHeader,
  JobIntro,
  JobSectionList,
} from "@/app/components/careers-page";
import { getJobBySlug, getJobSlugs } from "@/app/data/jobs";

type JobDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getJobSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: JobDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return { title: "Role not found | Kairo" };
  }

  return {
    title: `${job.title} | Careers | Kairo`,
    description: job.tagline,
  };
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return (
    <main>
      <JobDetailHeader job={job} />
      <JobIntro paragraphs={job.intro} />

      {job.sections.map((section) => {
        if (section.type === "benefits") {
          return (
            <JobBenefitsList
              key={section.title}
              title={section.title}
              items={section.items}
            />
          );
        }

        return (
          <JobSectionList
            key={section.title}
            title={section.title}
            intro={section.intro}
            items={section.items}
            closing={section.closing}
          />
        );
      })}

      <JobClosingCta
        title={job.closing.title}
        body={job.closing.body}
        applyLabel={"Apply now"}
      />
    </main>
  );
}
