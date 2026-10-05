import { Section } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { capabilities } from "@/lib/capabilities";

export function CapabilitiesSection() {
  return (
    <Section ariaLabel="Capabilities" className="bg-cu-surface/40">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cu-primary">
                Capabilities
              </p>
              <h2 className="mt-4 text-h2 font-semibold text-cu-text">
                A working toolkit, chosen for fit.
              </h2>
              <p className="mt-4 max-w-xl text-lead text-cu-muted">
                We do not build for the sake of a stack. Every tool is selected
                for how well it solves a real business problem.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {capabilities.map((cap, i) => (
                <Reveal key={cap} delay={i * 0.04}>
                  <div className="flex items-center gap-3 rounded-[4px] border border-cu-border bg-cu-bg px-4 py-3">
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cu-primary/10 text-cu-primary"
                    >
                      <span className="text-xs font-semibold">{i + 1}</span>
                    </span>
                    <span className="text-sm font-medium text-cu-text">{cap}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
