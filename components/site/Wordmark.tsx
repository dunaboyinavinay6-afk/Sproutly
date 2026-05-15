type WordmarkProps = {
  tone?: "ink" | "light";
  className?: string;
};

export function Wordmark({ tone = "ink", className = "" }: WordmarkProps) {
  const text = tone === "light" ? "text-on-green" : "text-ink";
  const stem = tone === "light" ? "oklch(96.5% 0.022 120)" : "oklch(33% 0.095 158)";

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M16 28V14"
          stroke={stem}
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M16 17C16 17 14.8 9 7.5 8.6C7.5 8.6 7 16.2 16 17Z"
          fill="oklch(52% 0.132 158)"
        />
        <path
          d="M16 13.6C16 13.6 17.2 5 25 5.5C25 5.5 25.6 14 16 13.6Z"
          fill="oklch(63% 0.15 156)"
        />
      </svg>
      <span
        className={`font-display text-[1.32rem] font-bold tracking-[-0.03em] ${text}`}
      >
        Sproutly
      </span>
    </span>
  );
}
