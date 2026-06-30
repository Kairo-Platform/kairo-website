"use client";

import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";

const CARD_WIDTH = 320;
const CARD_HEIGHT = 320;
const STACK_VISIBLE_RATIO = 0.7;
const STACK_OVERLAP = CARD_WIDTH * (1 - STACK_VISIBLE_RATIO);
const STACK_STEP = CARD_WIDTH - STACK_OVERLAP;

export type StackedIconCardItem = {
  icon: string;
  title: string;
  textColor?: string;
  bgColor?: string;
  iconColor?: string;
  iconBgColor?: string;
};

export type StackedIconCardsProps = {
  items: readonly StackedIconCardItem[];
  className?: string;
};

function getVisibleCount(width: number) {
  if (width >= 1280) return 4;
  if (width >= 1024) return 3;
  return 1;
}

function getViewportWidth(visibleCount: number) {
  const gap = 40;

  if (visibleCount === 1) {
    return CARD_WIDTH + 80;
  }

  return visibleCount * CARD_WIDTH + (visibleCount - 1) * gap;
}

function StackedIconCard({
  icon,
  title,
  textColor = "text-primary",
  bgColor = "bg-gray",
  iconColor,
  iconBgColor = "bg-gray",
}: StackedIconCardItem) {
  const resolvedIconColor = iconColor ?? textColor;

  return (
    <article
      className={`flex h-80 w-80 shrink-0 flex-col justify-between rounded-2xl p-6 ${bgColor}`}
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-sm ${iconBgColor}`}
      >
        <Icon icon={icon} className={`text-2xl ${resolvedIconColor}`} aria-hidden />
      </div>
      <h3 className={`text-pretty text-2xl font-medium ${textColor}`}>
        {title}
      </h3>
    </article>
  );
}

function useStackedCardsReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}

function useVisibleCount() {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(getVisibleCount(window.innerWidth));
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  return visibleCount;
}

export function StackedIconCards({
  items,
  className = "",
}: StackedIconCardsProps) {
  const { ref, isInView } = useStackedCardsReveal();
  const visibleCount = useVisibleCount();
  const shouldAutoScroll = isInView && items.length > visibleCount;
  const stackWidth = CARD_WIDTH + (items.length - 1) * STACK_STEP;
  const viewportWidth = getViewportWidth(visibleCount);
  const displayItems = shouldAutoScroll ? [...items, ...items] : items;
  const transitionClass =
    "transition-all duration-[1200ms] ease-out motion-reduce:transition-none";

  return (
    <div
      ref={ref}
      className={`ml-auto w-full max-w-full ${className}`.trim()}
    >
      <div
        className={`relative ml-auto overflow-hidden ${transitionClass}`}
        style={{
          maxWidth: isInView ? viewportWidth : stackWidth,
          height: CARD_HEIGHT,
        }}
      >
        <div
          className={`flex h-full w-max ${isInView ? "gap-10" : ""} ${transitionClass} ${shouldAutoScroll ? "stacked-step-cards-track" : ""
            }`}
          style={
            shouldAutoScroll
              ? {
                ["--stacked-cards-scroll-distance" as string]: `-${(items.length * (CARD_WIDTH + 40)) / 2}px`,
              }
              : undefined
          }
        >
          {displayItems.map((item, index) => {
            const isStackedCard = !isInView && index < items.length;

            return (
              <div
                key={`${item.title}-${index}`}
                className={`shrink-0 ${transitionClass} ${isStackedCard && index > 0 ? "-ml-24" : ""
                  }`}
                style={{
                  zIndex: isStackedCard ? index : undefined,
                }}
              >
                <StackedIconCard {...item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StackedIconCards;
