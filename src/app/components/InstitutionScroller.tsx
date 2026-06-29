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

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [items.length]);

  return (
    <div
      className="relative w-full max-w-lg overflow-hidden"
      style={{ height: VIEWPORT_HEIGHT }}
      aria-live="polite"
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
        className="transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateY(${CENTER_OFFSET - activeIndex * ITEM_HEIGHT}px)`,
        }}
      >
        {items.map((institution, index) => {
          const distance = Math.abs(index - activeIndex);

          return (
            <li
              key={institution}
              className="flex items-start justify-start text-2xl font-semibold transition-opacity duration-700 ease-in-out sm:text-3xl"
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
