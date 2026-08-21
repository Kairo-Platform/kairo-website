"use client";

import { useLayoutEffect } from "react";
import { consumeCareersScrollPosition } from "./careersScroll";

/** Restores careers page scroll after "Back to careers" navigation. */
export function CareersScrollRestore() {
  useLayoutEffect(() => {
    const y = consumeCareersScrollPosition();
    if (y == null) return;

    window.scrollTo({ top: y, behavior: "auto" });
  }, []);

  return null;
}
