import { Container } from "./container";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-cu-border pb-14 pt-28 sm:pt-32 lg:pb-20 lg:pt-40">
      <Container>
        <p className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-cu-primary">
          <span aria-hidden="true" className="inline-block h-px w-8 bg-cu-accent" />
          {eyebrow}
        </p>
        <h1 className="max-w-4xl text-h1 font-semibold text-cu-text">{title}</h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-lead text-cu-muted">{description}</p>
        ) : null}
      </Container>
    </header>
  );
}
