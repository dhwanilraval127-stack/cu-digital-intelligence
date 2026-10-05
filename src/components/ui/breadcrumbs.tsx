import Link from "next/link";
import { breadcrumbSchema } from "@/lib/seo/structured-data";
import { cn } from "@/lib/utils";

export interface Crumb {
  name: string;
  path: string;
}

export function Breadcrumbs({
  items,
  className,
}: {
  items: Crumb[];
  className?: string;
}) {
  const jsonLd = breadcrumbSchema(items);

  return (
    <nav aria-label="Breadcrumb" className={cn("mb-10", className)}>
      <ol className="flex flex-wrap items-center gap-2 text-sm text-cu-muted">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="font-medium text-cu-text">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="cu-link hover:text-cu-primary">
                    {item.name}
                  </Link>
                  <span aria-hidden="true" className="text-cu-border-strong">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
