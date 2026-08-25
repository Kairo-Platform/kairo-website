"use client";

import { useEffect, useState } from "react";

const ITEM_HEIGHT = 56;
const VISIBLE_ITEMS = 5;
const VIEWPORT_HEIGHT = ITEM_HEIGHT * VISIBLE_ITEMS;
const CENTER_OFFSET = VIEWPORT_HEIGHT / 2 - ITEM_HEIGHT / 2;
const INTERVAL_MS = 2400;

function getItemOpacity(distance: number) {
  if (distance === 0) return 1;
  if (distance === 1) return 0.55;
  if (distance === 2) return 0.28;
  return 0.12;
}

type InstitutionScrollerProps = {
  items: string[];
};

export function InstitutionScroller({ items }: InstitutionScrollerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [items.length, prefersReducedMotion]);

  return (
    <div
      className="relative w-max max-w-max overflow-hidden"
      style={{ height: VIEWPORT_HEIGHT }}
      aria-live={prefersReducedMotion ? "off" : "polite"}
      aria-label="Financial institutions Kairo is built for"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-linear-to-b from-background to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-linear-to-t from-background to-transparent"
      />

      <ul
        className={prefersReducedMotion ? "" : "transition-transform duration-700 ease-in-out"}
        style={{
          transform: `translateY(${CENTER_OFFSET - activeIndex * ITEM_HEIGHT}px)`,
        }}
      >
        {items.map((institution, index) => {
          const distance = Math.abs(index - activeIndex);

          return (
            <li
              key={institution}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`flex items-start justify-start text-2xl font-semibold sm:text-3xl ${prefersReducedMotion ? "" : "transition-opacity duration-700 ease-in-out"}`}
              style={{
                height: ITEM_HEIGHT,
                opacity: getItemOpacity(distance),
              }}
            >
              {institution}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default InstitutionScroller;
