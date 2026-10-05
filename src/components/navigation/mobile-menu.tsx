"use client";

import { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/ui/logo";
import { primaryNav } from "./nav-links";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export function MobileMenu({ open, onOpenChange, triggerRef }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    if (!panel) return;

    const focusables = Array.from(
      panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    const focusTimer = window.setTimeout(() => first?.focus(), 30);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onOpenChange(false);
        return;
      }

      if (event.key === "Tab" && focusables.length > 0) {
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    panel.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      panel.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onOpenChange]);

  const close = useCallback(() => {
    onOpenChange(false);
    window.setTimeout(() => triggerRef.current?.focus(), 30);
  }, [onOpenChange, triggerRef]);

  return (
    <div
      id="mobile-menu-panel"
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-[10000] lg:hidden",
        "h-[100dvh] overflow-hidden",
        "transition-[opacity,visibility] duration-200",
        open ? "visible opacity-100" : "pointer-events-none invisible opacity-0"
      )}
      style={{ backgroundColor: "var(--cu-bg)", isolation: "isolate" }}
    >
      <div className="h-[100dvh] overflow-y-auto overscroll-contain bg-cu-bg">
        <div
          className="flex items-center justify-between border-b border-cu-border px-5 sm:px-8"
          style={{ height: "var(--header-h)" }}
        >
          <Link
            href="/"
            aria-label="CU Digital Intelligence — home"
            onClick={close}
            className="flex min-w-0 items-center"
          >
            <Logo />
          </Link>
          <div className="h-10 w-10 shrink-0" aria-hidden="true" />
        </div>

        <div className="px-5 pb-12 pt-8 sm:px-8">
          <nav aria-label="Mobile primary navigation">
            <ul>
              {primaryNav.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "block border-b border-cu-border py-5 text-[clamp(1.8rem,8vw,2.5rem)] font-semibold leading-none tracking-[-0.025em] transition-colors duration-200",
                        active ? "text-cu-primary" : "text-cu-text hover:text-cu-primary"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link
            href="/contact"
            onClick={close}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-[3px] bg-cu-primary px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-cu-primary-dark"
          >
            Start a conversation <span aria-hidden="true" className="cu-arrow">→</span>
          </Link>

          <div className="mt-10 border-t border-cu-border pt-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cu-muted">
              AI • Data • Automation • Engineering
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
