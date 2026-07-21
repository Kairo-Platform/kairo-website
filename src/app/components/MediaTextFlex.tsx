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

export type MediaTextPosition = "top" | "right" | "bottom" | "left";

export type MediaTextFlexProps = {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  /** Tailwind text color class, e.g. `text-accent` or `text-primary`. */
  titleColor?: string;
  imagePosition?: MediaTextPosition;
  textAnimation?: RevealAnimation;
  mediaAnimation?: RevealAnimation;
  className?: string;
};

const layoutClasses: Record<
  MediaTextPosition,
  { container: string; text: string; media: string }
> = {
  left: {
    container:
      "flex flex-col items-center justify-center gap-12 lg:flex-row",
    text: "max-w-xl text-center lg:text-left",
    media: "",
  },
  right: {
    container:
      "flex flex-col items-center justify-center gap-12 lg:flex-row",
    text: "max-w-xl text-center lg:text-left lg:order-1",
    media: "lg:order-2",
  },
  top: {
    container:
      "flex flex-col-reverse items-center justify-center gap-12",
    text: "max-w-xl text-center",
    media: "w-full",
  },
  bottom: {
    container: "flex flex-col items-center justify-center gap-12",
    text: "max-w-xl text-center",
    media: "w-full",
  },
};

export function MediaTextFlex({
  image,
  imageAlt,
  title,
  description,
  titleColor,
  imagePosition = "left",
  textAnimation,
  mediaAnimation,
  className = "",
}: MediaTextFlexProps) {
  const { ref, isVisible } = useRevealOnScroll();
  const layout = layoutClasses[imagePosition];
  const resolvedTextAnimation =
    textAnimation ?? getDefaultTextAnimation(imagePosition);
  const resolvedMediaAnimation =
    mediaAnimation ?? getDefaultMediaAnimation(imagePosition);

  return (
    <article
      ref={ref}
      className={`${layout.container} ${className}`.trim()}
    >
      <div
        className={`motion-reduce:translate-none motion-reduce:opacity-100 ${layout.media} ${getRevealAnimationClasses(resolvedMediaAnimation, isVisible, mediaRevealTransitionClass)}`}
      >
        <Image
          src={image}
          alt={imageAlt}
          width={500}
          height={500}
          className="h-auto w-full max-w-[500px] object-contain object-center"
        />
      </div>

      <div
        className={`motion-reduce:translate-none motion-reduce:opacity-100 ${layout.text} ${getRevealAnimationClasses(resolvedTextAnimation, isVisible, revealTransitionClass)}`}
      >
        <h3
          className={`mb-4 text-balance text-6xl font-medium leading-snug max-sm:text-4xl ${titleColor ?? ""}`.trim()}
        >
          {title}
        </h3>
        <p className="text-pretty text-lg font-medium leading-relaxed text-secondary">
          {description}
        </p>
      </div>
    </article>
  );
}

export default MediaTextFlex;
