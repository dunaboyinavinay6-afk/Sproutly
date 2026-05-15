import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm bone surfaces — never pure #fff, tinted toward the brand hue.
        bone: "oklch(98.6% 0.006 95)",
        "bone-2": "oklch(96.3% 0.009 92)",
        "bone-3": "oklch(93.2% 0.013 90)",
        // Warm near-black ink — tinted, never pure #000.
        ink: "oklch(24% 0.02 158)",
        "ink-soft": "oklch(45% 0.022 158)",
        // The committed brand color: a deep evergreen, not SaaS-mint.
        evergreen: "oklch(52% 0.132 158)",
        "evergreen-deep": "oklch(33% 0.095 158)",
        "evergreen-bright": "oklch(63% 0.15 156)",
        // Warm clay — minor support accent only.
        clay: "oklch(70% 0.115 52)",
        // Soft warm white for type on evergreen fills.
        "on-green": "oklch(96.5% 0.022 120)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        mega: ["clamp(3.2rem, 1.1rem + 8.4vw, 8rem)", { lineHeight: "0.96", letterSpacing: "-0.03em" }],
        hero: ["clamp(2.6rem, 1rem + 6.2vw, 5.6rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        section: ["clamp(2rem, 1rem + 3.4vw, 3.6rem)", { lineHeight: "1.06", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        shell: "82rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
