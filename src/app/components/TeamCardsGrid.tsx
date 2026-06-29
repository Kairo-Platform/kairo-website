import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export type TeamCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
  buttonLabel?: string;
  className?: string;
};

export function TeamCard({
  title,
  description,
  image,
  href,
  buttonLabel = "Learn more",
  className = "",
}: TeamCardProps) {
  return (
    <article
      className={`group relative min-h-90 overflow-hidden rounded-2xl border border-gray transition-transform duration-300 ease-in-out hover:scale-[1.02] ${className}`.trim()}
    >
      <Image
        src={image}
        alt=""
        fill
        aria-hidden="true"
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-black/85 via-black/45 to-black/10"
      />

      <div className="relative flex h-full min-h-90 flex-col justify-end p-6">
        <div className="w-full">
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-white text-pretty lg:text-base">{description}</p>
          <Link
            href={href}
            className="mt-4 inline-flex items-center gap-1 font-medium text-accent transition-colors duration-200 ease-in-out hover:text-accent-hover"
          >
            {buttonLabel}
            <Icon icon="material-symbols:chevron-right-rounded" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export type TeamCardsGridProps = {
  items: TeamCardProps[];
  className?: string;
};

export function TeamCardsGrid({ items, className = "" }: TeamCardsGridProps) {
  return (
    <ul className={`grid grid-cols-1 gap-6 lg:gap-14 md:grid-cols-2 ${className}`.trim()}>
      {items.map((item) => (
        <li key={item.title}>
          <TeamCard {...item} />
        </li>
      ))}
    </ul>
  );
}

export default TeamCardsGrid;
