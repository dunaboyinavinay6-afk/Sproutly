import type { ReactNode } from "react";

type BrowserFrameProps = {
  url?: string;
  children: ReactNode;
  className?: string;
};

/** A code-drawn browser window. Carries the studio's voice without stock photos. */
export function BrowserFrame({
  url = "sproutly.agency",
  children,
  className = "",
}: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border rule bg-bone shadow-[0_2px_4px_oklch(24%_0.02_158/0.04),0_24px_60px_-28px_oklch(24%_0.02_158/0.28)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b rule bg-bone-2 px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-clay/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-bone-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-evergreen/60" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <span className="rounded-md bg-bone px-3 py-1 font-body text-xs text-ink-soft">
            {url}
          </span>
        </div>
        <div className="w-12" aria-hidden="true" />
      </div>
      <div className="bg-bone">{children}</div>
    </div>
  );
}
