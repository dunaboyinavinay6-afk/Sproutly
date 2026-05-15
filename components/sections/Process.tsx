import { Reveal } from "../site/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Discovery",
    body: "We learn the business, the audience, and what done actually means. You leave this step with a fixed scope and a fixed price, before a line of code exists.",
    gives: "Fixed scope and quote",
  },
  {
    n: "02",
    title: "Design",
    body: "You see the real thing in a real browser, not a flat picture of it. We shape layout, type, and motion together until it feels right.",
    gives: "A working design, in-browser",
  },
  {
    n: "03",
    title: "Build",
    body: "Engineered properly: fast, accessible, and yours to own outright. No locked platforms, no rented page builders, no surprise dependencies.",
    gives: "Production code you own",
  },
  {
    n: "04",
    title: "Launch and support",
    body: "We ship it, watch the numbers in the first weeks, and stay on hand. Where it helps, automation keeps doing the work long after launch day.",
    gives: "A live site, and a studio on call",
  },
];

export function Process() {
  return (
    <section id="process" className="shell scroll-mt-24 py-24 sm:py-32">
      <Reveal>
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-2.5 text-sm font-medium text-ink-soft">
              <span className="h-2 w-2 rounded-[3px] bg-evergreen" />
              Process
            </div>
            <h2 className="mt-5 max-w-[16ch] text-section font-bold text-ink">
              Four steps. No mystery.
            </h2>
          </div>
          <p className="max-w-[46ch] self-end text-lg leading-relaxed text-ink-soft">
            Most agency work goes wrong in the gap between the quote and the
            result. We close that gap by deciding scope, price, and look before
            the build starts.
          </p>
        </div>
      </Reveal>

      <ol className="mt-14">
        {STEPS.map((step, i) => (
          <Reveal key={step.n} delay={i * 0.04}>
            <li className="grid grid-cols-[auto_1fr] gap-x-6 border-t rule py-9 sm:grid-cols-[7rem_1fr] sm:gap-x-10 sm:py-11">
              <span className="font-display text-[clamp(2.6rem,1.4rem+3vw,4.4rem)] font-bold leading-none text-evergreen">
                {step.n}
              </span>
              <div className="grid gap-x-12 gap-y-3 lg:grid-cols-[1fr_1.3fr]">
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {step.title}
                </h3>
                <div>
                  <p className="text-[1.05rem] leading-relaxed text-ink-soft">
                    {step.body}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                    <span aria-hidden="true" className="text-evergreen">
                      &rarr;
                    </span>
                    {step.gives}
                  </p>
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
