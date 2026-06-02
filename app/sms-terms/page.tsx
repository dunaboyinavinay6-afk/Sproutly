import type { Metadata } from "next";
import { LegalLayout } from "@/components/site/LegalLayout";

const SUPPORT_EMAIL = "tejeshwar@sproutly.agency";
const LAST_UPDATED = "June 2, 2026";

export const metadata: Metadata = {
  title: "SMS Messaging Terms & Consent — Sproutly",
  description:
    "How Sproutly's SMS messaging works: consent by inbound call, message frequency, opt-out, and how we protect your phone number.",
};

export default function SmsTermsPage() {
  return (
    <LegalLayout
      eyebrow="SMS program"
      title="SMS Messaging Terms & Consent"
      intro="These terms explain how and when Sproutly sends SMS text messages, how you consent to receive them, and how to stop them at any time."
      lastUpdated={LAST_UPDATED}
    >
      <h2>Program description</h2>
      <p>
        Sproutly sends automated SMS messages in response to inbound phone calls
        placed to our toll-free number. This is a customer-care, conversational
        program — we do not send marketing or bulk text messages, and we do not
        collect phone numbers through web forms or purchased lists.
      </p>

      <h2>Your consent</h2>
      <p>
        By calling Sproutly&rsquo;s phone number, you consent to receive an
        automated SMS reply from us at the number you called from. The act of
        calling us is your opt-in to that single reply message.
      </p>

      <h2>What we send</h2>
      <p>
        We send one automated SMS in direct response to your inbound call: a
        thank-you message letting you know that our team has received your call
        and will follow up.
      </p>

      <h2>Message frequency</h2>
      <p>
        Message frequency varies and is limited to replies triggered by your
        inbound calls. We do not send recurring campaigns or unsolicited
        messages.
      </p>

      <h2>Cost</h2>
      <p>
        <strong>Message and data rates may apply.</strong> These charges come
        from your mobile carrier and are not controlled by Sproutly.
      </p>

      <h2>Opt-out and help</h2>
      <p>
        You can opt out at any time by replying <strong>STOP</strong> to any
        message from us. Reply <strong>HELP</strong> for help. After you reply
        STOP, we will not send you further automated SMS replies unless you
        contact us again.
      </p>

      <h2>Your privacy</h2>
      <p>
        Mobile phone numbers and consent are used solely to send you these reply
        messages. We do <strong>not</strong> sell, rent, or share your phone
        number or opt-in data with third parties or affiliates for their
        marketing purposes.
      </p>
      <p>
        For more detail on how we handle your information, see our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about this SMS program? Email us at{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
    </LegalLayout>
  );
}
