"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const CARD_WIDTH = 320;
const CARD_GAP = 40;

export type StackedStepCardItem = {
  title: string;
  image: string;
  badgeColor: string;
  phoneWidth: number;
  phoneHeight: number;
  imageStyle: CSSProperties;
};

export type StackedStepCardsProps = {
  items: readonly StackedStepCardItem[];
  className?: string;
};

export function StackedStepCards({
  items,
  className = "",
}: StackedStepCardsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [availableWidth, setAvailableWidth] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const intersection = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0, rootMargin: "0px" },
    );
    const resize = new ResizeObserver(([entry]) => {
      setAvailableWidth(entry.contentRect.width);
    });
    intersection.observe(element);
    resize.observe(element);
    return () => {
      intersection.disconnect();
      resize.disconnect();
    };
  }, []);

  if (!items.length) return null;

  // Fit every step into a centered row on desktop; keep the moving stack on mobile.
  const cardWidth =
    availableWidth >= 976
      ? Math.min(
          CARD_WIDTH,
          (availableWidth - (items.length - 1) * CARD_GAP) / items.length,
        )
      : Math.min(CARD_WIDTH, availableWidth || CARD_WIDTH);
  const expandedWidth =
    items.length * cardWidth + (items.length - 1) * CARD_GAP;
  const shouldAutoScroll = availableWidth > 0 && expandedWidth > availableWidth;
  const displayItems = shouldAutoScroll ? [...items, ...items] : items;
  const stackWidth = cardWidth + (items.length - 1) * cardWidth * 0.7;
  const transition =
    "transition-[max-width,gap,margin,opacity] duration-1200 ease-out motion-reduce:transition-none";

  return (
    <div ref={ref} className={`mx-auto w-full max-w-350 ${className}`}>
      <div
        className={`relative mx-auto overflow-hidden ${transition}`}
        style={{ maxWidth: isInView ? expandedWidth : stackWidth }}
      >
        <div
          className={`flex w-max ${transition} ${shouldAutoScroll && isInView ? "stacked-step-cards-track motion-reduce:animate-none" : ""}`}
          style={
            {
              gap: isInView ? CARD_GAP : 0,
              "--stacked-cards-scroll-distance": `-${items.length * (cardWidth + CARD_GAP)}px`,
            } as CSSProperties
          }
        >
          {displayItems.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              aria-hidden={index >= items.length ? true : undefined}
              className={`relative flex h-154.25 shrink-0 flex-col items-center bg-[#fffcfa] ${transition}`}
              style={{
                width: cardWidth,
                marginLeft: !isInView && index > 0 ? -cardWidth * 0.3 : 0,
                zIndex: !isInView ? index : undefined,
              }}
            >
              <span
                className={`flex size-12.5 items-center justify-center rounded-full text-xl leading-7.5 font-medium tracking-[-0.03em] ${item.badgeColor}`}
              >
                {String((index % items.length) + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-12 w-full max-w-73 px-2 text-center text-2xl leading-[1.3] font-medium tracking-[-0.02em] text-[#1a1a1a] xl:text-3xl">
                {item.title}
              </h3>
              <div
                className="absolute top-56 mx-auto max-w-[90%] overflow-hidden"
                style={{
                  width: item.phoneWidth,
                  aspectRatio: `${item.phoneWidth} / ${item.phoneHeight}`,
                }}
              >
                <Image
                  src={item.image}
                  alt={`Kairo on WhatsApp: ${item.title}`}
                  width={4000}
                  height={3000}
                  sizes="850px"
                  className="pointer-events-none absolute max-w-none"
                  style={item.imageStyle}
                />
                <div
                  className="pointer-events-none absolute inset-0 max-h-98.25 bg-linear-to-b from-transparent from-85% to-[#fffcfa] to-100%"
                  aria-hidden="true"
                />
              </div>
              {index % items.length < items.length - 1 && (
                <div
                  className={`pointer-events-none absolute top-0 -right-5 h-154.25 w-0.75 ${transition} ${isInView ? "opacity-100" : "opacity-0"}`}
                  aria-hidden="true"
                >
                  <Image
                    src="/landing-page/how-it-works/divider.svg"
                    alt=""
                    width={617}
                    height={3}
                    className="absolute top-0 left-0 origin-top-left rotate-90"
                    style={{ width: 617, height: 3, maxWidth: "none" }}
                  />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StackedStepCards;
