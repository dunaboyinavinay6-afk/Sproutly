"use client";

import { useState } from "react";

const STUDIO_EMAIL = "hello@sproutly.studio";

const PROJECTS = [
  "Custom web page",
  "Website",
  "Automation tool",
  "Not sure yet",
];

const fieldClass =
  "w-full rounded-lg border rule bg-bone px-4 py-3 text-[0.98rem] text-ink placeholder:text-ink-soft/70 transition-colors focus:border-evergreen focus-visible:outline-none";

export function ContactForm() {
  const [project, setProject] = useState(PROJECTS[0]);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = `Project enquiry: ${project}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${project}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border rule bg-bone p-6 sm:p-8"
      noValidate={false}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">
            Your name
          </span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jordan Lee"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">
            Email
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jordan@company.com"
            className={fieldClass}
          />
        </label>
      </div>

      <fieldset className="mt-5">
        <legend className="mb-2 text-sm font-semibold text-ink">
          What do you need?
        </legend>
        <div className="flex flex-wrap gap-2">
          {PROJECTS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setProject(p)}
              aria-pressed={project === p}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                project === p
                  ? "border-evergreen bg-evergreen text-on-green"
                  : "rule text-ink-soft hover:text-ink"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="mt-5 block">
        <span className="mb-1.5 block text-sm font-semibold text-ink">
          A little about the project
        </span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="What you are building, roughly when you need it, and anything else worth knowing."
          className={`${fieldClass} resize-y`}
        />
      </label>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-ink px-6 py-3.5 text-[0.98rem] font-semibold text-bone transition-colors duration-200 hover:bg-evergreen sm:w-auto sm:px-8"
      >
        Send the enquiry
      </button>

      <p
        className="mt-4 text-sm text-ink-soft"
        role="status"
        aria-live="polite"
      >
        {sent
          ? "Your email app should be opening with the message ready. If it does not, write to us directly at hello@sproutly.studio."
          : "This opens your email app with the details filled in. Nothing is sent until you press send there."}
      </p>
    </form>
  );
}
