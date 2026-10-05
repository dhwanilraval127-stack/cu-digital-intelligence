import { Container } from "@/components/ui/container";
import { Button, ButtonArrow } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-sm tracking-widest text-cu-sand">404</p>
      <h1 className="mt-4 text-h1 font-semibold text-cu-text">
        This page doesn&rsquo;t exist.
      </h1>
      <p className="mt-5 max-w-md text-lead text-cu-muted">
        The link may be old or the address mistyped. The page you were after
        might still be one click away.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button href="/" variant="primary" size="lg">
          Back to home <ButtonArrow />
        </Button>
        <Button href="/contact" variant="secondary" size="lg">
          Contact us
        </Button>
      </div>
    </Container>
  );
}
