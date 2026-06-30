import Link from "next/link";

const sectionClassName = "mb-12 scroll-mt-24 lg:mb-20";

export function LegalPage({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex-1 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 bg-[url('/kairo-assets/kairo-logo-icon-large.webp')] bg-contain bg-top-right bg-no-repeat sm:-right-32 sm:-top-32 sm:h-96 sm:w-96 lg:h-112 lg:w-lg"
      />
      <div className="relative z-10 container mx-auto max-w-3xl px-4 py-16 lg:py-24">
        {children}
      </div>
    </main>
  );
}

export function LegalPageHeader({
  title,
  lastUpdated,
}: {
  title: string;
  lastUpdated: string;
}) {
  return (
    <header>
      <h1 className="text-4xl font-bold text-primary lg:text-5xl">{title}</h1>
      <p className="mt-3 text-text-03">{lastUpdated}</p>
    </header>
  );
}

export function LegalIntro({ children }: { children: React.ReactNode }) {
  return <div className="mt-8 flex flex-col gap-4">{children}</div>;
}

export function LegalParagraph({ children }: { children: React.ReactNode }) {
  return <p className="text-text-04">{children}</p>;
}

export function LegalTableOfContents({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  return (
    <nav aria-label="Table of contents" className="mt-10">
      <ol className="flex list-decimal flex-col gap-2 pl-5 text-text-04">
        {items.map(({ id, label }) => (
          <li key={id}>
            <Link
              href={`#${id}`}
              className="transition-colors duration-200 ease-in-out hover:text-primary hover:underline"
            >
              {label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={sectionClassName}>
      <h2 className="text-2xl font-bold text-primary lg:text-3xl">{title}</h2>
      <div className="mt-4 flex flex-col gap-4">{children}</div>
    </section>
  );
}

export function LegalSubsection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold text-text-02">{title}</h3>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="flex list-disc flex-col gap-2 pl-5 text-text-04">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function LegalKeyValueList({
  items,
}: {
  items: { key: string; value: string }[];
}) {
  return (
    <dl className="grid grid-cols-1 gap-y-4 border-y border-gray py-6 sm:grid-cols-[minmax(0,18rem)_1fr] sm:gap-x-8 sm:gap-y-4">
      {items.flatMap(({ key, value }) => [
        <dt key={`${key}-key`} className="font-bold text-text-04">
          {key}
        </dt>,
        <dd key={`${key}-value`} className="text-left text-text-04">
          {value}
        </dd>,
      ])}
    </dl>
  );
}

export function LegalContactBlock({
  lines,
}: {
  lines: { label: string; value: string }[];
}) {
  return (
    <div className="flex flex-col gap-2 text-text-04">
      {lines.map(({ label, value }) => (
        <p key={label}>
          <span className="font-medium text-text-02">{label}: </span>
          {label.toLowerCase() === "email" ? (
            <a
              href={`mailto:${value}`}
              className="text-accent transition-colors duration-200 ease-in-out hover:underline"
            >
              {value}
            </a>
          ) : (
            value
          )}
        </p>
      ))}
    </div>
  );
}
