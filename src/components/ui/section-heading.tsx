import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  level?: "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  level = "h2",
}: SectionHeadingProps) {
  const Heading = level;

  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-cu-primary",
            align === "center" && "justify-center"
          )}
        >
          <span aria-hidden="true" className="inline-block h-px w-8 bg-cu-sand" />
          {eyebrow}
          {align === "center" && (
            <span aria-hidden="true" className="inline-block h-px w-8 bg-cu-sand" />
          )}
        </p>
      ) : null}
      <Heading className="text-h2 font-semibold tracking-[-0.018em] text-cu-text">
        {title}
      </Heading>
      {description ? (
        <p className="mt-5 text-lead text-cu-muted">{description}</p>
      ) : null}
    </div>
  );
}
