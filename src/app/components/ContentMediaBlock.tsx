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
import { Icon } from "@iconify/react";

export type ContentMediaPosition = "left" | "right" | "top" | "bottom";

export type ContentMediaBlockProps = {
  title?: string;
  heading: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: ContentMediaPosition;
  textAnimation?: RevealAnimation;
  mediaAnimation?: RevealAnimation;
  className?: string;
  list?: string[];
};

const layoutClasses: Record<
  ContentMediaPosition,
  { container: string; text: string; media: string }
> = {
  right: {
    container: "flex flex-col gap-8 lg:gap-14 lg:flex-row lg:items-center",
    text: "text-center lg:text-left",
    media: "lg:order-2",
  },
  left: {
    container: "flex flex-col gap-8 lg:gap-14 lg:flex-row lg:items-center",
    text: "text-center lg:text-left lg:order-2",
    media: "lg:order-1",
  },
  bottom: {
    container: "flex flex-col gap-8 lg:gap-14 items-center",
    text: "text-center max-w-2xl",
    media: "w-full",
  },
  top: {
    container: "flex flex-col-reverse gap-8 lg:gap-14 items-center",
    text: "text-center max-w-2xl",
    media: "w-full",
  },
};

export function ContentMediaBlock({
  title,
  heading,
  description,
  image,
  imageAlt,
  imagePosition = "right",
  textAnimation,
  mediaAnimation,
  className = "",
  list,
}: ContentMediaBlockProps) {
  const { ref, isVisible } = useRevealOnScroll();
  const layout = layoutClasses[imagePosition];
  const resolvedTextAnimation =
    textAnimation ?? getDefaultTextAnimation(imagePosition);
  const resolvedMediaAnimation =
    mediaAnimation ?? getDefaultMediaAnimation(imagePosition);

  return (
    <article ref={ref} className={`${layout.container} ${className}`.trim()}>
      <div
        className={`motion-reduce:translate-none motion-reduce:opacity-100 flex flex-1 flex-col gap-4 text-balance ${layout.text} ${getRevealAnimationClasses(resolvedTextAnimation, isVisible, revealTransitionClass)}`}
      >
        {title ? (
          <p className="font-medium text-accent">{title}</p>
        ) : null}
        <h3 className="text-2xl font-medium lg:text-5xl">{heading}</h3>
        {description && <p className="text-base text-secondary lg:text-lg">{description}</p>}
        {list && (
          <ul className="flex flex-col gap-4">
            {list.map((item) => (
              <li className="flex lg:text-2xl items-center gap-2" key={item}>
                <Icon icon="material-symbols:check-circle-outline" className="text-accent shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div
        className={`motion-reduce:translate-none motion-reduce:opacity-100 flex flex-1 ${layout.media} ${getRevealAnimationClasses(resolvedMediaAnimation, isVisible, mediaRevealTransitionClass)}`}
      >
        <div
          className={`relative aspect-4/3 w-full max-h-96 overflow-hidden rounded-2xl p-6 ${image ? "" : "bg-gray "}`}
        >
          {image ? (
            <Image
              src={image}
              alt={imageAlt ?? heading}
              fill
              className="rounded-2xl object-contain object-center"
            />
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default ContentMediaBlock;
