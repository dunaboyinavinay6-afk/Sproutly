import { Reveal } from "../site/Reveal";
import { BrowserFrame } from "../site/BrowserFrame";

function Tag({ children, tone = "ink" }: { children: string; tone?: "ink" | "light" }) {
  return (
    <li
      className={
        tone === "light"
          ? "rounded-full border border-on-green/25 px-3 py-1 text-sm text-on-green/90"
          : "rounded-full border rule px-3 py-1 text-sm text-ink-soft"
      }
    >
      {children}
    </li>
  );
}

export function Services() {
  return (
    <section id="services" className="shell scroll-mt-24 py-24 sm:py-32">
      <Reveal>
        <div className="flex items-center gap-2.5 text-sm font-medium text-ink-soft">
          <span className="h-2 w-2 rounded-[3px] bg-evergreen" />
          Services
        </div>
        <h2 className="mt-5 max-w-[18ch] text-section font-bold text-ink">
          Three things, done properly.
        </h2>
        <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-ink-soft">
          No bloated retainers, no template factories. You pick what you need,
          we build exactly that.
        </p>
      </Reveal>

      {/* 01 — Custom web pages */}
      <Reveal>
        <article className="mt-16 grid items-center gap-10 border-t rule pt-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="font-display text-sm font-semibold tracking-[0.2em] text-evergreen">
              01
            </span>
            <h3 className="mt-3 text-[clamp(1.8rem,1rem+2vw,2.7rem)] font-bold leading-tight tracking-tight text-ink">
              Custom web pages
            </h3>
            <p className="mt-4 max-w-[46ch] text-[1.05rem] leading-relaxed text-ink-soft">
              A single page, engineered for one job: turning a visitor into a
              lead, a signup, or a sale. Fast to load, sharp on every screen,
              measured against real numbers.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              <Tag>Landing pages</Tag>
              <Tag>Campaign pages</Tag>
              <Tag>Microsites</Tag>
            </ul>
            <p className="mt-6 text-sm text-ink-soft">
              <span className="font-semibold text-ink">Best for</span> a launch,
              an ad campaign, or a product that needs its own spotlight.
            </p>
          </div>
          <BrowserFrame url="sproutly.agency/page">
            <div className="space-y-3.5 p-6">
              <div className="space-y-2">
                <div className="h-4 w-3/4 rounded bg-ink/85" />
                <div className="h-4 w-2/5 rounded bg-evergreen" />
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-bone-3" />
                <div className="h-1.5 w-4/5 rounded-full bg-bone-3" />
              </div>
              <div className="rounded-lg border rule bg-bone-2 p-3">
                <div className="h-2 w-1/3 rounded-full bg-bone-3" />
                <div className="mt-2 h-7 rounded-md border rule bg-bone" />
                <div className="mt-2 h-7 w-32 rounded-md bg-evergreen" />
              </div>
            </div>
          </BrowserFrame>
        </article>
      </Reveal>

      {/* 02 — Websites (the emphasised, drenched row) */}
      <Reveal>
        <article className="grain mt-12 overflow-hidden rounded-3xl bg-evergreen">
          <div className="grid items-center gap-10 p-9 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
            <div>
              <span className="font-display text-sm font-semibold tracking-[0.2em] text-on-green/70">
                02
              </span>
              <h3 className="mt-3 text-[clamp(1.8rem,1rem+2vw,2.7rem)] font-bold leading-tight tracking-tight text-on-green">
                Websites
              </h3>
              <p className="mt-4 max-w-[46ch] text-[1.05rem] leading-relaxed text-on-green/85">
                The complete thing. Many pages, a content system you can edit
                yourself, and an architecture that holds up as you grow. Designed
                and engineered as one.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                <Tag tone="light">Marketing sites</Tag>
                <Tag tone="light">Multi-page builds</Tag>
                <Tag tone="light">CMS and content</Tag>
              </ul>
              <p className="mt-6 text-sm text-on-green/75">
                <span className="font-semibold text-on-green">Best for</span> a
                business that has outgrown its old site and wants one built to
                last.
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                {["Home", "About", "Services", "Contact"].map((label, i) => (
                  <div
                    key={label}
                    className={`rounded-lg border border-on-green/15 bg-on-green/10 p-3 ${
                      i === 0 ? "col-span-2" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-on-green/80">
                        {label}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-on-green/40" />
                    </div>
                    <div className="mt-2.5 space-y-1.5">
                      <div className="h-1.5 w-full rounded-full bg-on-green/20" />
                      <div className="h-1.5 w-2/3 rounded-full bg-on-green/20" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </Reveal>

      {/* 03 — Custom automation tools (visual leads, breaks the rhythm) */}
      <Reveal>
        <article className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl border rule bg-bone-2 p-7 sm:p-9">
              <div className="flex items-center justify-between">
                <span className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                  Workflow
                </span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-evergreen">
                  <span className="h-1.5 w-1.5 rounded-full bg-evergreen" />
                  running
                </span>
              </div>
              <div className="mt-5 space-y-2.5">
                {[
                  { k: "Trigger", v: "New form submission" },
                  { k: "Step", v: "Enrich and tag the lead" },
                  { k: "Step", v: "Sync to your CRM" },
                  { k: "Done", v: "Notify the team" },
                ].map((node, i, arr) => (
                  <div key={node.v}>
                    <div className="flex items-center gap-3 rounded-lg border rule bg-bone px-4 py-3">
                      <span
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-md text-xs font-semibold ${
                          i === 0 || i === arr.length - 1
                            ? "bg-evergreen text-on-green"
                            : "bg-evergreen/12 text-evergreen"
                        }`}
                      >
                        {i === arr.length - 1 ? "✓" : i + 1}
                      </span>
                      <span className="text-sm font-medium text-ink">
                        {node.v}
                      </span>
                      <span className="ml-auto font-display text-[0.7rem] uppercase tracking-[0.12em] text-ink-soft">
                        {node.k}
                      </span>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="ml-[1.65rem] h-3 w-px bg-bone-3" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="font-display text-sm font-semibold tracking-[0.2em] text-evergreen">
              03
            </span>
            <h3 className="mt-3 text-[clamp(1.8rem,1rem+2vw,2.7rem)] font-bold leading-tight tracking-tight text-ink">
              Custom automation tools
            </h3>
            <p className="mt-4 max-w-[46ch] text-[1.05rem] leading-relaxed text-ink-soft">
              The work a website cannot do on its own. We build the internal
              tools, integrations, and workflows that handle the repetitive jobs,
              so your team stops doing them by hand.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              <Tag>Internal tools</Tag>
              <Tag>API integrations</Tag>
              <Tag>Workflow automation</Tag>
            </ul>
            <p className="mt-6 text-sm text-ink-soft">
              <span className="font-semibold text-ink">Best for</span> a team
              losing hours to copy-paste work that software should be doing.
            </p>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
