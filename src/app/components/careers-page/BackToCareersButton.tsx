"use client";

import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { markCareersScrollRestore } from "./careersScroll";

const buttonClassName =
  "inline-flex items-center justify-center gap-1 rounded-3xl border border-gray px-4 py-2 text-sm font-medium text-foreground transition-colors duration-200 ease-in-out hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent";

export function BackToCareersButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      className={buttonClassName}
      onClick={() => {
        markCareersScrollRestore();
        router.push("/careers", { scroll: false });
      }}
    >
      <Icon
        icon="material-symbols:chevron-left-rounded"
        className="size-5"
        aria-hidden="true"
      />
      Back to careers
    </button>
  );
}
