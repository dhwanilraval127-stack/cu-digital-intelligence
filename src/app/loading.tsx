export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Loading">
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 animate-pulse rounded-full bg-cu-primary-dark" />
        <span className="h-2 w-2 animate-pulse rounded-full bg-cu-primary [animation-delay:150ms]" />
        <span className="h-2 w-2 animate-pulse rounded-full bg-cu-sand [animation-delay:300ms]" />
      </div>
    </div>
  );
}
