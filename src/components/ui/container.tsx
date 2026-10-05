import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}

export function Section({
  className,
  children,
  id,
  ariaLabel,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
  ariaLabel?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("py-16 sm:py-20 lg:py-28", className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
