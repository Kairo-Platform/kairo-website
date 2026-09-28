"use client";

import { useEffect, useRef, useState } from "react";

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
  variant?: "default" | "languages";
};

export function InstitutionScroller({ items, variant = "default" }: InstitutionScrollerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(variant === "languages" ? 2 : 0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let intersecting = false;
    const update = () => setIsInView(intersecting && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      intersecting = entry.isIntersecting;
      update();
    }, { threshold: 0 });
    observer.observe(element);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !isInView || items.length < 2) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [items.length, prefersReducedMotion, isInView]);

  if (variant === "languages") {
    return (
      <div ref={ref} className="relative h-91 w-full overflow-hidden lg:h-128" aria-label="Languages Kairo understands">
        <ul className="relative h-full [--language-step:52px] lg:[--language-step:76px]">
          {items.map((language, index) => {
            const slot = (index - activeIndex + 2 + items.length) % items.length;
            const active = slot === 2;
            return (
              <li
                key={language}
                className={`absolute inset-x-0 top-0 flex h-13 items-center text-3xl leading-tight tracking-[-0.02em] lg:h-15 lg:text-5xl ${slot === items.length - 1 ? "" : "transition-[transform,color,opacity] duration-700 ease-in-out motion-reduce:transition-none"} ${active ? "font-semibold text-white" : slot === 1 || slot === 3 || slot === 4 ? "font-medium text-[#bf5014]/77" : "font-medium text-orange/65"}`}
                style={{ transform: `translateY(calc(${slot} * var(--language-step)))` }}
              >
                {language}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div
      ref={ref}
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
