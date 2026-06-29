import Image from "next/image";

export type ContentMediaPosition = "left" | "right" | "top" | "bottom";

export type ContentMediaBlockProps = {
  title?: string;
  heading: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: ContentMediaPosition;
  className?: string;
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
  className = "",
}: ContentMediaBlockProps) {
  const layout = layoutClasses[imagePosition];

  return (
    <article className={`${layout.container} ${className}`.trim()}>
      <div className={`flex flex-1 flex-col gap-4 text-balance ${layout.text}`}>
        {title ? (
          <p className="font-medium text-accent">{title}</p>
        ) : null}
        <h3 className="text-2xl font-bold lg:text-3xl">{heading}</h3>
        <p className="text-base text-secondary lg:text-lg">{description}</p>
      </div>

      <div className={`flex flex-1 ${layout.media}`}>
        <div className={`relative aspect-4/3 w-full p-6 overflow-hidden rounded-2xl max-h-96 ${image ? "" : "bg-gray "}`}>
          {image ? (
            <Image
              src={image}
              alt={imageAlt ?? heading}
              fill
              className="object-contain object-center rounded-2xl"
            />
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default ContentMediaBlock;
