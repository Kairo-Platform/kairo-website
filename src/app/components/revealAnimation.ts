"use client";

import { useEffect, useRef, useState } from "react";

/** Hidden-state entrance direction. `fade` = opacity only. */
export type RevealAnimation = "fade" | "left" | "right" | "top" | "bottom";

export type RevealPosition = "left" | "right" | "top" | "bottom";

export function getDefaultTextAnimation(
  imagePosition: RevealPosition,
): RevealAnimation {
  switch (imagePosition) {
    case "top":
      return "bottom";
    case "bottom":
      return "top";
    case "left":
      return "right";
    case "right":
      return "left";
  }
}

export function getDefaultMediaAnimation(
  imagePosition: RevealPosition,
): RevealAnimation {
  return imagePosition;
}

function getHiddenAnimationClasses(animation: RevealAnimation) {
  switch (animation) {
    case "fade":
      return "opacity-0";
    case "left":
      return "-translate-x-8 opacity-0";
    case "right":
      return "translate-x-8 opacity-0";
    case "top":
      return "-translate-y-8 opacity-0";
    case "bottom":
      return "translate-y-8 opacity-0";
  }
}

export function getRevealAnimationClasses(
  animation: RevealAnimation,
  isVisible: boolean,
  base: string,
) {
  if (isVisible) {
    return `${base} translate-x-0 translate-y-0 opacity-100`;
  }

  return `${base} ${getHiddenAnimationClasses(animation)}`;
}

export const revealTransitionClass =
  "transition-all duration-[1200ms] ease-out motion-reduce:transition-none";

export const mediaRevealTransitionClass =
  "transition-all duration-[1200ms] ease-out delay-300 motion-reduce:transition-none";

export function useRevealOnScroll() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
