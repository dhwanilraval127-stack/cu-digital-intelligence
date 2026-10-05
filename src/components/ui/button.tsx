import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-[3px] whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-cu-primary text-cu-background hover:bg-cu-primary-dark focus-visible:ring-cu-primary-dark",
  secondary:
    "bg-cu-surface text-cu-text border border-cu-border-strong hover:border-cu-secondary hover:bg-cu-surface-raised",
  ghost:
    "text-cu-primary hover:text-cu-primary-dark bg-transparent",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

interface ButtonProps {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ariaLabel,
}: ButtonProps) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const cls = cn(base, variants[variant], sizes[size], className);

  if (external) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

export function ButtonArrow() {
  return (
    <span aria-hidden="true" className="cu-arrow">
      →
    </span>
  );
}
