import { Reveal } from "../site/Reveal";
import { BrowserFrame } from "../site/BrowserFrame";

function Bar({ w, tone = "soft" }: { w: string; tone?: "soft" | "ink" | "green" }) {
  const c =
    tone === "ink" ? "bg-ink/85" : tone === "green" ? "bg-evergreen" : "bg-bone-3";
  return <div className={`h-2 rounded-full ${c} ${w}`} />;
}

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 bg-bone-2 py-24 sm:py-32">
      <div className="shell">
        <Reveal>
          <div className="flex items-center gap-2.5 text-sm font-medium text-ink-soft">
            <span className="h-2 w-2 rounded-[3px] bg-evergreen" />
            Work
          </div>
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-[20ch] text-section font-bold text-ink">
              What a Sproutly build looks like.
            </h2>
            <p className="max-w-[34ch] text-[0.98rem] leading-relaxed text-ink-soft">
              Representative builds across the three things we make. Yours would
              be designed from scratch.
            </p>
          </div>
        </Reveal>

        {/* Featured build */}
        <Reveal>
          <article className="group mt-14">
            <BrowserFrame url="sproutly.studio/case/landing">
              <div className="grid gap-0 sm:grid-cols-[1.3fr_1fr]">
                <div className="space-y-4 p-7 sm:p-9">
                  <Bar w="w-2/3" tone="ink" />
                  <Bar w="w-1/2" tone="green" />
                  <div className="space-y-1.5 pt-1">
                    <div className="h-1.5 w-full rounded-full bg-bone-3" />
                    <div className="h-1.5 w-5/6 rounded-full bg-bone-3" />
                    <div className="h-1.5 w-2/3 rounded-full bg-bone-3" />
                  </div>
                  <div className="flex gap-2 pt-1">
                    <div className="h-8 w-28 rounded-full bg-evergreen" />
                    <div className="h-8 w-24 rounded-full border rule" />
                  </div>
                </div>
                <div className="border-t rule bg-bone-2 p-7 sm:border-l sm:border-t-0 sm:p-9">
                  <div className="space-y-2.5">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 rounded-lg border rule bg-bone p-2.5"
                      >
                        <span className="h-6 w-6 shrink-0 rounded-md bg-evergreen/15" />
                        <div className="flex-1 space-y-1.5">
                          <div className="h-1.5 w-3/4 rounded-full bg-bone-3" />
                          <div className="h-1.5 w-1/2 rounded-full bg-bone-3" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </BrowserFrame>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <span className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-evergreen">
                  Custom web page
                </span>
                <h3 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-ink">
                  A conversion-focused landing page
                </h3>
              </div>
              <p className="max-w-[40ch] text-[0.98rem] leading-relaxed text-ink-soft">
                One clear message, one clear action, and a build tuned for
                sub-second loads on a phone.
              </p>
            </div>
          </article>
        </Reveal>

        {/* Two supporting builds */}
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <Reveal>
            <article>
              <BrowserFrame url="sproutly.studio/case/site">
                <div className="p-6">
                  <div className="flex items-center justify-between border-b rule pb-3">
                    <span className="h-2.5 w-2.5 rounded-[3px] bg-evergreen" />
                    <div className="flex gap-2">
                      {[0, 1, 2, 3].map((i) => (
                        <span
                          key={i}
                          className="h-1.5 w-6 rounded-full bg-bone-3"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2 pt-4">
                    <Bar w="w-1/2" tone="ink" />
                    <div className="h-1.5 w-3/4 rounded-full bg-bone-3" />
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="h-14 rounded-lg border rule bg-bone-2"
                      />
                    ))}
                  </div>
                </div>
              </BrowserFrame>
              <div className="mt-5">
                <span className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-evergreen">
                  Website
                </span>
                <h3 className="mt-1.5 font-display text-xl font-bold tracking-tight text-ink">
                  A multi-page marketing site
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                  Editable content, a clear structure, and room to add pages
                  without a rebuild.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article>
              <BrowserFrame url="app.sproutly.studio/ops">
                <div className="flex gap-0">
                  <div className="w-1/4 space-y-2 border-r rule bg-bone-2 p-4">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`h-2 rounded-full ${
                          i === 0 ? "bg-evergreen" : "bg-bone-3"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex-1 space-y-3 p-5">
                    <div className="grid grid-cols-3 gap-2">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="rounded-md border rule bg-bone-2 p-2"
                        >
                          <div className="h-1.5 w-2/3 rounded-full bg-bone-3" />
                          <div className="mt-1.5 h-3 w-1/2 rounded bg-ink/80" />
                        </div>
                      ))}
                    </div>
                    <div className="flex h-16 items-end gap-1.5 rounded-md border rule bg-bone-2 p-3">
                      {[40, 65, 50, 80, 60, 92, 70].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}%` }}
                          className="flex-1 rounded-sm bg-evergreen/70"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </BrowserFrame>
              <div className="mt-5">
                <span className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-evergreen">
                  Automation tool
                </span>
                <h3 className="mt-1.5 font-display text-xl font-bold tracking-tight text-ink">
                  An internal operations dashboard
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                  One screen for the numbers a team checks daily, fed
                  automatically instead of by hand.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
