import { cn } from "@/lib/utils";

/**
 * Hand-built interface mockups (pure CSS/SVG — no images) representing
 * each concept project. They double as the visual proof of the work.
 */

function Frame({
  children,
  label,
  className,
}: {
  children: React.ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "overflow-hidden rounded-[4px] border border-cu-border bg-cu-bg shadow-[0_1px_2px_rgba(34,33,31,0.04)]",
        className
      )}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 border-b border-cu-border bg-cu-surface px-4 py-2.5">
        <span className="h-2 w-2 rounded-full border border-cu-border-strong" />
        <span className="h-2 w-2 rounded-full border border-cu-border-strong" />
        <span className="h-2 w-2 rounded-full border border-cu-border-strong" />
        <span className="ml-3 h-2 w-24 rounded-full bg-cu-border" />
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

/** Concept 01 — AI service desk: conversation triage */
export function ServiceDeskMockup() {
  return (
    <Frame label="Interface mockup of an AI service desk: a prioritised ticket queue beside an AI-drafted reply with an escalate-to-human action.">
      <div className="grid grid-cols-[1fr_1.2fr] gap-3 sm:gap-4">
        {/* Queue */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-cu-muted">
              Queue
            </span>
            <span className="rounded-full bg-cu-surface-soft px-2 py-0.5 text-[8px] font-semibold text-cu-primary">
              AI triaged
            </span>
          </div>
          {[{w: "w-4/5", tag: "Auto-resolved", tone: "bg-cu-surface-soft text-cu-primary" }, { w: "w-3/5", tag: "Draft ready", tone: "bg-cu-surface-soft text-cu-primary-dark" }, { w: "w-11/12", tag: "Escalated", tone: "bg-cu-primary/10 text-cu-primary" },
          ].map((r, i) => (
            <div key={i} className="rounded-[3px] border border-cu-border bg-cu-surface-raised p-2">
              <div className={cn("h-1.5 rounded-full bg-cu-border", r.w)} />
              <div className="mt-2 flex items-center justify-between">
                <div className="h-1.5 w-1/3 rounded-full bg-cu-border/70" />
                <span className={cn("rounded-full px-1.5 py-0.5 text-[7px] font-semibold", r.tone)}>
                  {r.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* Draft */}
        <div className="rounded-[3px] border border-cu-border bg-cu-surface-raised p-3">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 20 20" className="h-4 w-4 text-cu-primary" aria-hidden="true">
              <rect x="1" y="1" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M6 12.5 9 8l2.2 3L13 8.8l1.5 2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-cu-muted">
              AI draft
            </span>
          </div>
          <div className="mt-3 space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-cu-border" />
            <div className="h-1.5 w-5/6 rounded-full bg-cu-border" />
            <div className="h-1.5 w-2/3 rounded-full bg-cu-border" />
          </div>
          <div className="mt-4 flex gap-2">
            <span className="rounded-[3px] bg-cu-primary px-2.5 py-1 text-[8px] font-semibold text-cu-background">
              Send
            </span>
            <span className="rounded-[3px] border border-cu-border-strong px-2.5 py-1 text-[8px] font-semibold text-cu-text">
              Escalate to human
            </span>
          </div>
        </div>
      </div>
    </Frame>
  );
}

/** Concept 02 — Operations command view */
export function OperationsMockup() {
  return (
    <Frame label="Interface mockup of an operations dashboard consolidating five data sources into one live view with trend charts and status tiles.">
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {/* KPI tiles */}
        <div className="col-span-3 grid grid-cols-3 gap-2">
          {["Systems", "Alerts", "Throughput"].map((k, i) => (
            <div key={k} className="rounded-[3px] border border-cu-border bg-cu-surface-raised p-2">
              <p className="text-[8px] uppercase tracking-[0.14em] text-cu-muted">{k}</p>
              <div className="mt-1.5 flex items-end justify-between">
                <div className={cn("h-2 rounded-full", i === 0 ? "w-10 bg-cu-primary/70" : i === 1 ? "w-7 bg-cu-sand" : "w-8 bg-cu-primary/70")} />
                <svg viewBox="0 0 36 12" className="h-3 w-9 text-cu-primary" aria-hidden="true">
                  <path d="M1 10 8 7l6 2 7-5 6 3 7-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        {/* Main chart */}
        <div className="col-span-2 rounded-[3px] border border-cu-border bg-cu-surface-raised p-3">
          <div className="h-1.5 w-1/3 rounded-full bg-cu-border" />
          <svg viewBox="0 0 120 44" className="mt-2 h-16 w-full" aria-hidden="true">
            <rect x="4" y="26" width="9" height="16" rx="1" fill="#93452D" opacity="0.85" />
            <rect x="18" y="20" width="9" height="22" rx="1" fill="#93452D" opacity="0.7" />
            <rect x="32" y="30" width="9" height="12" rx="1" fill="#93452D" opacity="0.55" />
            <rect x="46" y="16" width="9" height="26" rx="1" fill="#C86B3F" opacity="0.8" />
            <rect x="60" y="22" width="9" height="20" rx="1" fill="#C86B3F" opacity="0.6" />
            <rect x="74" y="10" width="9" height="32" rx="1" fill="#C86B3F" opacity="0.85" />
            <rect x="88" y="18" width="9" height="24" rx="1" fill="#D98B60" opacity="0.9" />
            <rect x="102" y="12" width="9" height="30" rx="1" fill="#D98B60" opacity="0.7" />
          </svg>
        </div>
        {/* Status list */}
        <div className="space-y-1.5">
          {["Warehouse", "Fleet", "Support"].map((s, i) => (
            <div key={s} className="flex items-center justify-between rounded-[3px] border border-cu-border bg-cu-surface-raised px-2 py-1.5">
              <span className="text-[8px] font-medium text-cu-text">{s}</span>
              <span className={cn("h-1.5 w-1.5 rounded-full", i === 1 ? "bg-cu-sand" : "bg-cu-primary")} />
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/** Concept 03 — Document pipeline */
export function DocumentPipelineMockup() {
  return (
    <Frame label="Interface mockup of a document processing pipeline: documents flowing through extraction and validation into business systems.">
      <div className="grid grid-cols-4 items-center gap-2 sm:gap-3">
        {[
          { label: "Inbox", active: false },
          { label: "Extract", active: true },
          { label: "Validate", active: true },
          { label: "Systems", active: false },
        ].map((s, i) => (
          <div key={s.label} className="flex items-center gap-2">
            <div
              className={cn(
                "flex-1 rounded-[3px] border p-2 text-center",
                s.active
                  ? "border-cu-primary/30 bg-cu-surface-soft"
                  : "border-cu-border bg-cu-surface-raised"
              )}
            >
              <svg viewBox="0 0 20 20" className="mx-auto h-4 w-4 text-cu-primary" aria-hidden="true">
                <path d="M4 2h8l4 4v12H4z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M12 2v4h4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.1em] text-cu-text">
                {s.label}
              </p>
            </div>
            {i < 3 && (
              <svg viewBox="0 0 12 8" className="h-2 w-3 shrink-0 text-cu-border-strong" aria-hidden="true">
                <path d="M1 4h8M6 1l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        ))}
      </div>

    </Frame>
  );
}
