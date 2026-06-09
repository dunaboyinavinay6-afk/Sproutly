import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="border-t rule bg-bone-2">
      <div className="shell grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-xs">
          <Wordmark />
          <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-soft">
            A web development studio. We build custom pages, full websites, and
            the automation tools that run behind them.
          </p>
        </div>

        <nav aria-label="Sections">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">
            Studio
          </h2>
          <ul className="mt-4 space-y-2.5 text-[0.98rem]">
            {[
              { label: "Services", href: "#services" },
              { label: "Work", href: "#work" },
              { label: "Process", href: "#process" },
              { label: "Start a project", href: "#contact" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-ink transition-colors hover:text-evergreen"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">
            Get in touch
          </h2>
          <ul className="mt-4 space-y-2.5 text-[0.98rem]">
            <li>
              <a
                href="mailto:tejeshwar@sproutly.agency"
                className="text-ink transition-colors hover:text-evergreen"
              >
                tejeshwar@sproutly.agency
              </a>
            </li>
            <li className="text-ink-soft">Remote, working worldwide</li>
            <li className="text-ink-soft">Mon to Fri, 9 to 6</li>
          </ul>
        </div>
      </div>

      <div className="border-t rule">
        <div className="shell flex flex-col gap-4 py-6 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Sproutly. All rights reserved.</p>
          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            <a
              href="/sms-terms"
              className="transition-colors hover:text-evergreen"
            >
              SMS Terms
            </a>
            <a
              href="/privacy"
              className="transition-colors hover:text-evergreen"
            >
              Privacy
            </a>
            <span aria-hidden="true">Built right, shipped fast.</span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
