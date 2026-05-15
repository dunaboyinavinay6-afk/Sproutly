import { Reveal } from "../site/Reveal";
import { ContactForm } from "../site/ContactForm";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-bone py-24 sm:py-28">
      <div className="shell">
        <div className="grain overflow-hidden rounded-3xl bg-evergreen px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Reveal>
              <div>
                <div className="flex items-center gap-2.5 text-sm font-medium text-on-green/70">
                  <span className="h-2 w-2 rounded-[3px] bg-on-green" />
                  Start a project
                </div>
                <h2 className="mt-5 max-w-[14ch] text-[clamp(2.2rem,1rem+4vw,4rem)] font-bold leading-[1.04] tracking-tight text-on-green">
                  Let&rsquo;s build something.
                </h2>
                <p className="mt-5 max-w-[42ch] text-lg leading-relaxed text-on-green/85">
                  Tell us what you need. You will hear back within one working
                  day, with honest next steps and no hard sell.
                </p>

                <div className="mt-9 space-y-4 border-t border-on-green/20 pt-8">
                  <a
                    href="mailto:hello@sproutly.studio"
                    className="block font-display text-xl font-bold tracking-tight text-on-green underline decoration-on-green/30 underline-offset-4 transition-colors hover:decoration-on-green"
                  >
                    hello@sproutly.studio
                  </a>
                  <ul className="space-y-1.5 text-[0.98rem] text-on-green/80">
                    <li>Replies within one working day</li>
                    <li>Fixed scope and price before any build</li>
                    <li>Remote, working with teams worldwide</li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
