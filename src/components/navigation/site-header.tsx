"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/ui/logo";
import { Button, ButtonArrow } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";
import { primaryNav } from "./nav-links";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);


  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300",
          scrolled || menuOpen
            ? "border-b border-cu-border bg-cu-bg/95 shadow-[0_1px_0_rgba(34,33,31,0.03)] backdrop-blur-sm"
            : "border-b border-transparent bg-cu-bg/90 lg:bg-transparent"
        )}
      >
        <div
          className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
          style={{ height: "var(--header-h)" }}
        >
          {/* BRAND */}
          <Link
  href="/"
  aria-label="CU Digital Intelligence — home"
  className="flex min-w-0 shrink-0 items-center"
>
  <Logo priority />
</Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Primary"
            className="hidden lg:block"
          >
            <ul className="flex items-center gap-9">
              {primaryNav.map((item) => {
                const active =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "cu-link text-sm font-medium transition-colors",
                        active
                          ? "text-cu-primary"
                          : "text-cu-text hover:text-cu-primary"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <Button
              href="/contact"
              variant="primary"
              ariaLabel="Start a conversation with CU Digital Intelligence"
            >
              Start a conversation <ButtonArrow />
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            ref={mobileMenuButtonRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu-panel"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((value) => !value)}
            className="relative z-[70] flex h-10 w-10 items-center justify-center rounded-[3px] text-cu-primary lg:hidden"
          >
            <span
              aria-hidden="true"
              className="relative block h-5 w-6"
            >
              <span
                className={cn(
                  "absolute left-0 top-0 h-[1.5px] w-6 bg-current transition-transform duration-300",
                  menuOpen && "top-[9px] rotate-45"
                )}
              />

              <span
                className={cn(
                  "absolute left-0 top-[9px] h-[1.5px] w-6 bg-current transition-opacity duration-200",
                  menuOpen && "opacity-0"
                )}
              />

              <span
                className={cn(
                  "absolute left-0 top-[18px] h-[1.5px] w-6 bg-current transition-transform duration-300",
                  menuOpen && "top-[9px] -rotate-45"
                )}
              />
            </span>
          </button>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onOpenChange={setMenuOpen}
        triggerRef={mobileMenuButtonRef}
      />
    </>
  );
}