import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type LegalLayoutProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  lastUpdated: string;
  children: ReactNode;
};

export function LegalLayout({
  eyebrow,
  title,
  intro,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <>
      <Header />
      <main className="bg-bone">
        <section className="shell pb-10 pt-28 sm:pt-32">
          <div className="max-w-[62ch]">
            <div className="flex items-center gap-2.5 text-sm font-medium text-evergreen">
              <span className="h-2 w-2 rounded-[3px] bg-evergreen" />
              {eyebrow}
            </div>
            <h1 className="mt-5 text-[clamp(2.2rem,1rem+4vw,3.6rem)] font-bold leading-[1.05] tracking-tight text-ink">
              {title}
            </h1>
            {intro ? (
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                {intro}
              </p>
            ) : null}
            <p className="mt-6 text-sm text-ink-soft">
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        <section className="shell pb-24 sm:pb-28">
          <div className="legal-prose max-w-[62ch] border-t rule pt-10">
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
