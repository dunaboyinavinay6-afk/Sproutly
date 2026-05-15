"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "./Wordmark";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b rule bg-bone/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-[4.6rem] items-center justify-between">
        <a href="#top" aria-label="Sproutly, home" className="rounded">
          <Wordmark />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-[0.95rem] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-evergreen transition-all duration-300 ease-out-expo group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-[0.92rem] font-semibold text-bone transition-colors duration-200 hover:bg-evergreen sm:inline-block"
          >
            Start a project
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full border rule md:hidden"
          >
            <span className="relative block h-3.5 w-[18px]">
              <span
                className={`absolute left-0 block h-0.5 w-[18px] bg-ink transition-all duration-300 ease-out-expo ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-[18px] bg-ink transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-[18px] bg-ink transition-all duration-300 ease-out-expo ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t rule bg-bone transition-[max-height] duration-300 ease-out-expo md:hidden ${
          open ? "max-h-72" : "max-h-0 border-transparent"
        }`}
      >
        <nav aria-label="Mobile" className="shell flex flex-col gap-1 py-4">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2.5 font-display text-xl font-semibold tracking-tight text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-evergreen px-5 py-3 text-center font-semibold text-on-green"
          >
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}
