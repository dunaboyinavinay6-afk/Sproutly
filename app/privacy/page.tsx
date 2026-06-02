import type { Metadata } from "next";
import { LegalLayout } from "@/components/site/LegalLayout";

const SUPPORT_EMAIL = "tejeshwar@sproutly.agency";
const LAST_UPDATED = "June 2, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy — Sproutly",
  description:
    "How Sproutly collects, uses, and protects your information, including phone numbers and SMS opt-in data.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="Sproutly keeps data collection minimal and uses what we collect only to respond to you. This policy explains what we gather and how we handle it."
      lastUpdated={LAST_UPDATED}
    >
      <h2>Information we collect</h2>
      <p>
        We collect only the information you give us directly: the email address
        and project details you submit through our contact form, and — when you
        call our toll-free number — the phone number you call from, so we can
        send you a reply.
      </p>

      <h2>How we use your information</h2>
      <p>
        We use your information to respond to your inquiries, send the SMS reply
        you triggered by calling us, and follow up about the work you asked
        about. We do not use it for unrelated marketing.
      </p>

      <h2>SMS and phone numbers</h2>
      <p>
        Mobile phone numbers and SMS consent are used solely to send the reply
        messages described in our <a href="/sms-terms">SMS Messaging Terms</a>.
        We do <strong>not</strong> sell, rent, or share your phone number or
        opt-in data with third parties or affiliates for their marketing
        purposes.
      </p>

      <h2>Sharing</h2>
      <p>
        We do not sell or rent your personal information. We share it only with
        service providers that help us operate (for example, our messaging and
        email providers), and only as needed to deliver the service you
        requested, or where required by law.
      </p>

      <h2>Data retention</h2>
      <p>
        We keep your information only as long as needed to respond to you and
        meet our legal obligations, then delete it.
      </p>

      <h2>Your choices</h2>
      <p>
        You can opt out of SMS replies at any time by replying{" "}
        <strong>STOP</strong>. To ask what information we hold about you or to
        request its deletion, contact us using the details below.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about this policy? Email us at{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
