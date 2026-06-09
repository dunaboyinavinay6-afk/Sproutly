import { Reveal } from "../site/Reveal";
import { BrowserFrame } from "../site/BrowserFrame";

export function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden">
      {/* Soft evergreen field, top-right — voice, not decoration for its own sake. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-48 h-[34rem] w-[34rem] rounded-full bg-evergreen/[0.07] blur-3xl"
      />

      <div className="shell relative pb-20 pt-14 sm:pt-20 lg:pb-28">
        <Reveal mode="load">
          <div className="flex items-center gap-2.5 text-sm font-medium text-ink-soft">
            <span className="h-2 w-2 rounded-[3px] bg-evergreen" />
            Web development studio
            <span className="mx-1 h-1 w-1 rounded-full bg-bone-3" />
            <span className="text-evergreen">Booking new projects</span>
          </div>
        </Reveal>

        <Reveal mode="load" delay={0.08}>
          <h1 className="mt-7 max-w-[16ch] text-mega font-extrabold text-ink">
            The web, and everything{" "}
            <span className="text-evergreen">running behind it.</span>
          </h1>
        </Reveal>

        <div className="mt-12 grid items-end gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <Reveal mode="load" delay={0.18}>
            <div>
              <p className="max-w-[44ch] text-lg leading-relaxed text-ink-soft">
                Sproutly builds custom web pages, complete websites, and the
                automation tools that take the busywork off your plate. Built
                right, shipped fast.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="rounded-full bg-ink px-7 py-3.5 text-[0.98rem] font-semibold text-bone transition-colors duration-200 hover:bg-evergreen"
                >
                  Start a project
                </a>
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-[0.98rem] font-semibold text-ink"
                >
                  See what we build
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal mode="load" delay={0.3}>
            <div className="relative">
              <BrowserFrame url="sproutly.agency/launch">
                <div className="space-y-4 p-6">
                  <div className="flex items-center justify-between">
                    <span className="h-2.5 w-2.5 rounded-[3px] bg-evergreen" />
                    <div className="flex gap-2">
                      <span className="h-1.5 w-7 rounded-full bg-bone-3" />
                      <span className="h-1.5 w-7 rounded-full bg-bone-3" />
                      <span className="h-1.5 w-7 rounded-full bg-bone-3" />
                    </div>
                  </div>
                  <div className="space-y-2 pt-3">
                    <div className="h-3.5 w-4/5 rounded bg-ink/85" />
                    <div className="h-3.5 w-3/5 rounded bg-evergreen" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-full rounded-full bg-bone-3" />
                    <div className="h-1.5 w-5/6 rounded-full bg-bone-3" />
                  </div>
                  <div className="h-7 w-28 rounded-full bg-evergreen" />
                  <div className="grid grid-cols-3 gap-2.5 pt-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="h-16 rounded-lg border rule bg-bone-2"
                      />
                    ))}
                  </div>
                </div>
              </BrowserFrame>

              {/* Automation chip — hints at the third service, overlapping the frame. */}
              <div className="absolute -bottom-7 -left-5 w-52 rounded-xl border rule bg-bone p-4 shadow-[0_18px_44px_-22px_oklch(24%_0.02_158/0.4)] sm:-left-9">
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-semibold uppercase tracking-[0.13em] text-ink-soft">
                    Automation
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-evergreen">
                    <span className="h-1.5 w-1.5 rounded-full bg-evergreen" />
                    live
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="flex flex-1 items-center">
                      <span className="h-7 flex-1 rounded-md bg-evergreen/12" />
                      {i < 2 && (
                        <span className="mx-1 h-px w-2.5 bg-bone-3" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-24 border-t rule pt-6">
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 font-display text-[0.95rem] font-medium text-ink-soft">
              <li className="text-ink-soft">What we make:</li>
              {["Custom web pages", "Websites", "Automation tools"].map(
                (item, i) => (
                  <li key={item} className="flex items-center gap-8">
                    <span className="text-ink">{item}</span>
                    {i < 2 && (
                      <span className="h-1 w-1 rounded-full bg-bone-3" />
                    )}
                  </li>
                ),
              )}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
