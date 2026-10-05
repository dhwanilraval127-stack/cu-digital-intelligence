"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/container";
import { Button, ButtonArrow } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log server-side-safe digest only; never expose stack traces to users.
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-sm tracking-widest text-cu-sand">Error</p>
      <h1 className="mt-4 text-h1 font-semibold text-cu-text">
        Something went wrong on our side.
      </h1>
      <p className="mt-5 max-w-md text-lead text-cu-muted">
        An unexpected error occurred. It has been noted — please try again.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button href="/" variant="primary" size="lg">
          Back to home <ButtonArrow />
        </Button>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center gap-2 rounded-[3px] border border-cu-border-strong bg-cu-surface px-7 py-3.5 text-[15px] font-medium text-cu-text transition-colors hover:border-cu-primary"
        >
          Try again
        </button>
      </div>
    </Container>
  );
}
