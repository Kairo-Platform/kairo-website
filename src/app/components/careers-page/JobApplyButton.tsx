import type { ReactNode } from "react";

/** Renders text with optional **bold** markers. */
export function renderRichText(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

export function JobApplyButton({
  label = "Apply for this role",
  href,
  className = "",
}: {
  label?: string;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-button shrink-0 ${className}`.trim()}
    >
      {label}
    </a>
  );
}
