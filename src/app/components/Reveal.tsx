"use client";

import {
  type RevealAnimation,
  getRevealAnimationClasses,
  revealTransitionClass,
  useRevealOnScroll,
} from "./revealAnimation";

type RevealProps = {
  children: React.ReactNode;
  animation?: RevealAnimation;
  className?: string;
};

export function Reveal({
  children,
  animation = "fade",
  className = "",
}: RevealProps) {
  const { ref, isVisible } = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className={`motion-reduce:translate-none motion-reduce:opacity-100 ${getRevealAnimationClasses(animation, isVisible, revealTransitionClass)} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export default Reveal;
