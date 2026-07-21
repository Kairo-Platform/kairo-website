"use client";

import Image from "next/image";
import {
  type RevealAnimation,
  getDefaultMediaAnimation,
  getDefaultTextAnimation,
  getRevealAnimationClasses,
  mediaRevealTransitionClass,
  revealTransitionClass,
  useRevealOnScroll,
} from "./revealAnimation";

export type SplitContentMediaPosition = "left" | "right" | "top" | "bottom";

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
          <h3 className={`text-pretty text-2xl font-medium leading-snug sm:text-4xl sm:leading-tight lg:text-6xl xl:text-7xl ${textColor}`}>
            {heading}
          </h3>
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-secondary sm:text-lg">{description}</p>
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
