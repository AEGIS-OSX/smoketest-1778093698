"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [consent, setConsent] = useState(false);
  const [gdprConsent, setGdprConsent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isDisabled = formState === "loading" || !email || !consent;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !consent) {
      setErrorMessage("Please provide an email and consent to continue.");
      return;
    }

    setFormState("loading");
    setErrorMessage("");

    try {
      // Placeholder for Mailchimp API call
      // In production, this would call a serverless function that handles Mailchimp integration
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName: firstName || undefined,
          consent,
          gdprConsent,
          timestamp: new Date().toISOString(),
          source: typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("utm_source") || "direct" : "direct",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setFormState("success");
      setEmail("");
      setFirstName("");
      setConsent(false);
      setGdprConsent(false);
    } catch (error) {
      setFormState("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    }
  };

  if (formState === "success") {
    return (
      <div className="p-8 rounded-[var(--radius-small)] bg-[#0f1113] border border-dark text-center">
        <div className="flex flex-col gap-4">
          <div className="text-4xl">✓</div>
          <h3 className="text-h3">You{"'"}
 re on the list!</h3>
          <p className="text-body text-text-secondary">
            Check your email for a confirmation message. We{"'"}
 ll be in touch soon with early-access details.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="text-small font-medium text-text-primary">
            First Name (optional)
          </label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Sarah"
            className="px-4 py-3 rounded-[var(--radius-small)] bg-canvas border border-dark text-text-primary placeholder-text-secondary focus-ring transition-colors duration-150 ease-out"
            disabled={formState === "loading"}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-small font-medium text-text-primary">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="px-4 py-3 rounded-[var(--radius-small)] bg-canvas border border-dark text-text-primary placeholder-text-secondary focus-ring transition-colors duration-150 ease-out"
            disabled={formState === "loading"}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 w-5 h-5 rounded-[var(--radius-small)] bg-canvas border border-dark text-[#2aa6b2] focus-ring cursor-pointer"
            disabled={formState === "loading"}
          />
          <span className="text-small text-text-secondary">
            I agree to receive emails about PawWalk updates, early-access offers, and product news. I can unsubscribe anytime.
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={gdprConsent}
            onChange={(e) => setGdprConsent(e.target.checked)}
            className="mt-1 w-5 h-5 rounded-[var(--radius-small)] bg-canvas border border-dark text-[#2aa6b2] focus-ring cursor-pointer"
            disabled={formState === "loading"}
          />
          <span className="text-small text-text-secondary">
            I consent to PawWalk processing my personal data in accordance with the{" "}
            <a href="/privacy" className="text-[#2aa6b2] hover:text-[#b88b3a] underline">
              Privacy Policy
            </a>
            . For EU residents: I consent to GDPR data processing.
          </span>
        </label>
      </div>

      {errorMessage && formState === "error" && (
        <div className="p-4 rounded-[var(--radius-small)] bg-[#1a0a0a] border border-[#8b3a3a] text-[#ff6b6b]">
          <p className="text-small">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isDisabled}
        className="btn-primary w-full"
        aria-busy={formState === "loading"}
      >
        {formState === "loading" ? (
          <span className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 border-2 border-[#f6f4f2] border-t-transparent rounded-full animate-spin" />
            Joining...
          </span>
        ) : (
          "Join the Waitlist"
        )}
      </button>

      <p className="text-micro text-text-secondary text-center">
        We respect your privacy. Read our{" "}
        <a href="/privacy" className="text-[#2aa6b2] hover:text-[#b88b3a] underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
