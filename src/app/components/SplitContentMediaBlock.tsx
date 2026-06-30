"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type SplitContentMediaPosition = "left" | "right" | "top" | "bottom";

/** Hidden-state entrance direction. `fade` = opacity only. */
export type RevealAnimation = "fade" | "left" | "right" | "top" | "bottom";

export type SplitContentMediaBlockProps = {
  heading: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: SplitContentMediaPosition;
  textAnimation?: RevealAnimation;
  mediaAnimation?: RevealAnimation;
  textColor?: string;
  textBg?: string;
  imageBg?: string;
  className?: string;
};

function getImageBg(textBg: string, imageBg?: string) {
  if (imageBg) return imageBg;

  if (textBg.startsWith("bg-")) {
    return `${textBg}/40`;
  }

  return "bg-gray/40";
}

function getHorizontalOrder(imagePosition: SplitContentMediaPosition) {
  if (imagePosition === "left") {
    return { text: "lg:order-2", media: "lg:order-1" };
  }

  return { text: "lg:order-1", media: "lg:order-2" };
}

function getVerticalOrder(imagePosition: SplitContentMediaPosition) {
  if (imagePosition === "top") {
    return { text: "order-2", media: "order-1" };
  }

  return { text: "order-1", media: "order-2" };
}

function getDefaultTextAnimation(
  imagePosition: SplitContentMediaPosition,
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

function getDefaultMediaAnimation(
  imagePosition: SplitContentMediaPosition,
): RevealAnimation {
  return imagePosition;
}

function getHiddenAnimationClasses(animation: RevealAnimation) {
  switch (animation) {
    case "fade":
      return "opacity-4";
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

function getRevealAnimationClasses(
  animation: RevealAnimation,
  isVisible: boolean,
  base: string,
) {
  if (isVisible) {
    return `${base} translate-x-0 translate-y-0 opacity-100`;
  }

  return `${base} ${getHiddenAnimationClasses(animation)}`;
}

const revealTransitionClass =
  "transition-all duration-[1200ms] ease-out motion-reduce:transition-none";
const mediaRevealTransitionClass =
  "transition-all duration-[1200ms] ease-out delay-300 motion-reduce:transition-none";

function useRevealOnScroll() {
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

export function SplitContentMediaBlock({
  heading,
  description,
  image,
  imageAlt,
  imagePosition = "right",
  textAnimation,
  mediaAnimation,
  textColor = "text-primary",
  textBg = "bg-gray",
  imageBg,
  className = "",
}: SplitContentMediaBlockProps) {
  const { ref, isVisible } = useRevealOnScroll();
  const resolvedTextAnimation =
    textAnimation ?? getDefaultTextAnimation(imagePosition);
  const resolvedMediaAnimation =
    mediaAnimation ?? getDefaultMediaAnimation(imagePosition);
  const isVertical =
    imagePosition === "top" || imagePosition === "bottom";
  const horizontalOrder = getHorizontalOrder(imagePosition);
  const verticalOrder = getVerticalOrder(imagePosition);
  const resolvedImageBg = getImageBg(textBg, imageBg);

  const textPaddingClass =
    imagePosition === "left"
      ? "lg:pl-8 lg:pr-[max(1rem,calc((100vw-72rem)/2+1rem))]"
      : imagePosition === "right"
        ? "lg:pl-[max(1rem,calc((100vw-72rem)/2+1rem))] lg:pr-8"
        : "px-4 lg:px-[max(1rem,calc((100vw-72rem)/2+1rem))]";

  const mediaPaddingClass =
    imagePosition === "left"
      ? "lg:pl-[max(1rem,calc((100vw-72rem)/2+1rem))] lg:pr-0 lg:justify-end"
      : imagePosition === "right"
        ? "lg:pl-0 lg:pr-[max(1rem,calc((100vw-72rem)/2+1rem))] lg:justify-start"
        : "px-4 lg:px-[max(1rem,calc((100vw-72rem)/2+1rem))]";

  return (
    <article
      ref={ref}
      className={`flex w-full overflow-visible ${isVertical ? "flex-col" : "flex-col lg:flex-row lg:items-center"
        } ${className}`.trim()}
    >
      <div
        className={`flex w-full items-center py-12 sm:py-14 lg:w-1/2 lg:min-h-88 lg:py-16 ${textBg} ${textPaddingClass} ${isVertical ? verticalOrder.text : horizontalOrder.text
          }`}
      >
        <div
          className={`mx-auto w-full max-w-xl motion-reduce:translate-none motion-reduce:opacity-100 ${getRevealAnimationClasses(resolvedTextAnimation, isVisible, revealTransitionClass)} ${imagePosition === "left" && !isVertical
            ? "lg:mr-0 lg:ml-auto lg:text-right"
            : imagePosition === "right" && !isVertical
              ? "lg:mr-auto lg:ml-0 lg:text-left"
              : "text-center lg:text-left"
            }`}
        >
          <h3 className={`text-2xl font-medium text-pretty sm:text-4xl lg:text-7xl ${textColor}`}>
            {heading}
          </h3>
          {description ? (
            <p className="mt-4 text-base text-secondary sm:text-lg">{description}</p>
          ) : null}
        </div>
      </div>

      <div
        className={`flex items-stretch py-0 lg:w-1/2 lg:min-h-126 ${isVertical ? verticalOrder.media : horizontalOrder.media
          } ${mediaPaddingClass}`}
      >
        <div
          className={`flex w-full max-w-xl items-stretch lg:max-w-none lg:w-[80%]`}
        >
          <div
            className={`relative w-full overflow-hidden rounded-2xl ${resolvedImageBg} min-h-80 sm:min-h-96 lg:min-h-126`}
          >
            {image ? (
              <div className={`absolute inset-x-0 top-[20%] bottom-0 flex justify-center overflow-hidden motion-reduce:translate-none motion-reduce:opacity-100 ${getRevealAnimationClasses(resolvedMediaAnimation, isVisible, mediaRevealTransitionClass)}`}>
                <div className="relative h-[115%] w-[80%]">
                  <Image
                    src={image}
                    alt={imageAlt ?? heading}
                    fill
                    className="object-contain object-top"
                  />
                </div>
              </div>
            ) : (
              <div className="absolute inset-x-0 top-[20%] flex justify-center">
                <div className="h-48 w-[70%] rounded-xl bg-white/30" />
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default SplitContentMediaBlock;
