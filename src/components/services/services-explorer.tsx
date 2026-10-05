"use client";

import { useState, useRef } from "react";
import { BrainCircuit, MessagesSquare, Workflow, BarChart3, Code2, Layers, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

const serviceIcons: LucideIcon[] = [
  BrainCircuit,
  MessagesSquare,
  Workflow,
  BarChart3,
  Code2,
  Layers,
];

export function ServicesExplorer() {
  const [active, setActive] = useState(0);
  const listRef = useRef<Array<HTMLButtonElement | null>>([]);
  const ServiceIcon = serviceIcons[active] ?? Layers;
  const current = services[active];

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const next =
      e.key === "ArrowDown"
        ? (active + 1) % services.length
        : (active - 1 + services.length) % services.length;
    setActive(next);
    listRef.current[next]?.focus();
  };

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
      {/* Numbered service list. */}
      <ul
        role="listbox"
        aria-label="CU services"
        aria-orientation="vertical"
        className="flex flex-col divide-y divide-cu-border border-y border-cu-border"
        onKeyDown={onKeyDown}
      >
        {services.map((service, i) => {
          const isActive = i === active;
          const Icon = serviceIcons[i] ?? Layers;
          return (
            <li key={service.slug}>
              <button
                ref={(el) => {
                  listRef.current[i] = el;
                }}
                role="option"
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className="group flex w-full items-center gap-5 py-5 text-left transition-colors sm:py-6"
              >
                <span
                  className={cn(
                    "font-mono text-xs tracking-widest transition-colors",
                    isActive ? "text-cu-sand" : "text-cu-muted/70"
                  )}
                >
                  {service.number}
                </span>
                <span
                  className={cn(
                    "flex-1 text-lg font-medium tracking-[-0.01em] transition-colors sm:text-xl",
                    isActive
                      ? "text-cu-primary-dark"
                      : "text-cu-text/75 group-hover:text-cu-primary-dark"
                  )}
                >
                  {service.title}
                </span>
                <Icon
                  aria-hidden="true"
                  className={cn(
                    "h-5 w-5 shrink-0 transition-colors",
                    isActive ? "text-cu-primary" : "text-cu-muted/60"
                  )}
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    "h-8 w-[2px] transition-all duration-300",
                    isActive ? "bg-cu-primary" : "bg-transparent"
                  )}
                />
              </button>
            </li>
          );
        })}
      </ul>

      {/* Active service detail panel. */}
      <div className="cu-card relative overflow-hidden border border-cu-border bg-cu-surface-raised p-8 sm:p-10 lg:p-12">
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 h-full w-[3px] bg-cu-primary transition-transform duration-500"
        />
        <div key={current.slug} className="animate-[fadeSlide_0.45s_cubic-bezier(0.22,1,0.36,1)]">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs tracking-widest text-cu-sand">
              {current.number}
            </span>
            <ServiceIcon aria-hidden="true" className="h-7 w-7 text-cu-primary" strokeWidth={1.5} />
          </div>

          <h3 className="mt-6 text-h3 font-semibold text-cu-text">
            {current.title}
          </h3>
          <p className="mt-5 leading-relaxed text-cu-muted">
            {current.description}
          </p>

          <div className="mt-8 space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cu-primary">
              Capabilities
            </p>
            <ul className="grid grid-cols-1 gap-2">
              {current.capabilities.map((cap) => (
                <li
                  key={cap}
                  className="rounded-[3px] border border-cu-border bg-cu-bg px-3 py-1.5 text-xs text-cu-muted"
                >
                  {cap}
                </li>
              ))}
            </ul>
            {current.subCapabilities && current.subCapabilities.length > 0 && (
              <ul className="grid grid-cols-1 gap-2">
                {current.subCapabilities.map((cap) => (
                  <li
                    key={cap}
                    className="rounded-[3px] border border-cu-border bg-cu-surface-soft px-3 py-1.5 text-xs text-cu-muted"
                  >
                    {cap}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a
            href="/contact"
            className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-cu-primary-dark"
          >
            Discuss this service
            <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
