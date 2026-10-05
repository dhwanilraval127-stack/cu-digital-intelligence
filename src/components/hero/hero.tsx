import Image from "next/image";
import { Button, ButtonArrow } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36"
      style={{ paddingTop: "calc(4.25rem + 80px)" }}
    >
      {/* Soft architectural backdrop. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #FCF9F5 0%, #F1EEE6 62%, #FCF9F5 100%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-12 lg:pb-24">
        {/* Left — text. */}
        <div className="order-1 max-w-2xl">
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-cu-primary">
            <span aria-hidden="true" className="inline-block h-px w-10 bg-cu-soft" />
            AI • Data • Automation • Engineering
          </p>

          <h1 className="text-display font-semibold text-cu-text">
            Technology built around your business.
          </h1>

          <p className="mt-7 max-w-xl text-lead text-cu-muted">
            We design and build intelligent systems, software, automation and
            data solutions around the way your business actually works.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/contact" variant="primary" size="lg">
              Start a conversation <ButtonArrow />
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Explore services
            </Button>
          </div>
        </div>

        {/* Right — hero visual (Business + AI = Growth). */}
        <div className="order-2 lg:pl-4">
          <div className="relative">
            <div
              aria-hidden="true"
              className="cu-grain absolute -inset-6 -z-10 rounded-[4px] bg-cu-surface/50 sm:-inset-8"
            />
            <div className="relative aspect-[1672/941] w-full overflow-hidden rounded-[4px] border border-cu-border">
              <Image
                src="/images/cu-hero-business-ai-growth.png"
                alt="Business and AI growing together — the CU logo inside a warm, architectural copper/bronze frame beside a refined data connection motif."
                fill
                priority
                sizes="(min-width: 1024px) 46vw, (min-width: 640px) 92vw, 100vw"
                style={{ objectFit: "cover", objectPosition: "62% center" }}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
