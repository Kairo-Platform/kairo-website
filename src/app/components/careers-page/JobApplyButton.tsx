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
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <button type="button" className={`cta-button shrink-0 ${className}`.trim()}>
      {label}
    </button>
  );
}
