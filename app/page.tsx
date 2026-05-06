"use client";

import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import { parseUtmParams, storeUtmParams } from "@/lib/utm";
import { trackCtaClick, trackEmailSignup, trackFormError } from "@/lib/analytics";

interface FormState {
  email: string;
  firstName: string;
  consent: boolean;
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

export default function Page() {
  const [formState, setFormState] = useState<FormState>({
    email: "",
    firstName: "",
    consent: false,
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  const [utmParams, setUtmParams] = useState({
    source: "",
    medium: "",
    campaign: "",
  });

  // Capture and store UTM parameters on mount
  useEffect(() => {
    const params = parseUtmParams();
    setUtmParams({
      source: params.source ?? "",
      medium: params.medium ?? "",
      campaign: params.campaign ?? "",
    });
    storeUtmParams(params);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.currentTarget;
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      error: null,
    }));
  };

  const handleCtaClick = () => {
    trackCtaClick("hero");
    const emailInput = document.getElementById("email");
    if (emailInput) {
      emailInput.focus();
      emailInput.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formState.email) {
      setFormState((prev) => ({
        ...prev,
        error: "Email is required",
      }));
      trackFormError("Email is required");
      return;
    }

    if (!formState.consent) {
      setFormState((prev) => ({
        ...prev,
        error: "You must consent to receive updates",
      }));
      trackFormError("Consent not provided");
      return;
    }

    setFormState((prev) => ({
      ...prev,
      isSubmitting: true,
      error: null,
    }));

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formState.email,
          firstName: formState.firstName || undefined,
          consent: formState.consent,
          utmSource: utmParams.source || undefined,
          utmMedium: utmParams.medium || undefined,
          utmCampaign: utmParams.campaign || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe");
      }

      trackEmailSignup(
        formState.email,
        formState.firstName,
        utmParams.source,
        utmParams.medium,
        utmParams.campaign
      );

      setFormState((prev) => ({
        ...prev,
        isSubmitting: false,
        isSuccess: true,
        email: "",
        firstName: "",
        consent: false,
      }));

      setTimeout(() => {
        setFormState((prev) => ({
          ...prev,
          isSuccess: false,
        }));
      }, 5000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred";
      trackFormError(errorMessage);
      setFormState((prev) => ({
        ...prev,
        isSubmitting: false,
        error: errorMessage,
      }));
    }
  };

  return (
    <>
      <header>
        <nav className="container">
          <h1 className="text-primary">PawWalk</h1>
        </nav>
      </header>

      <main>
        <section className="container">
          <div className="grid">
            <div>
              <h1 className="text-primary mb-4">Meet Smoketest.</h1>
              <p className="text-secondary mb-6">
                Crafted, not mass-produced. Design that earns attention. Every detail speaks a language of care.
              </p>
              <button
                onClick={handleCtaClick}
                className="bg-accent-primary text-canvas px-6 py-3 rounded-small font-semibold hover:bg-accent-secondary transition-colors"
              >
                Join the PawWalk Waitlist
              </button>
            </div>
          </div>
        </section>

        <section className="container">
          <h2 className="text-primary mb-8 text-center">Why PawWalk</h2>
          <div className="grid grid-3">
            <div className="bg-surface rounded-small p-6">
              <h3 className="text-primary mb-3">Flexible Scheduling</h3>
              <p className="text-secondary">Book walks on your schedule. No long-term commitments, just reliable service when you need it.</p>
            </div>
            <div className="bg-surface rounded-small p-6">
              <h3 className="text-primary mb-3">Trusted Walkers</h3>
              <p className="text-secondary">Every walker is vetted and insured. Real-time updates keep you informed every step of the way.</p>
            </div>
            <div className="bg-surface rounded-small p-6">
              <h3 className="text-primary mb-3">Easy Payments</h3>
              <p className="text-secondary">Simple, transparent pricing. No hidden fees. Pay securely through the app.</p>
            </div>
          </div>
        </section>

        <section className="container">
          <h2 className="text-primary mb-8 text-center">What Our Users Say</h2>
          <div className="grid grid-2">
            <div className="bg-surface rounded-small p-6">
              <p className="text-secondary mb-4">
                "PawWalk has been a lifesaver. My dog gets the exercise she needs, and I have peace of mind knowing she{"'"s in great hands."
              </p>
              <p className="text-primary font-semibold">Sarah M.</p>
              <p className="text-support-slate text-sm">Upper West Side, NYC</p>
            </div>
            <div className="bg-surface rounded-small p-6">
              <p className="text-secondary mb-4">
                "The walkers are professional and genuinely care about the dogs. I recommend PawWalk to everyone."
              </p>
              <p className="text-primary font-semibold">James T.</p>
              <p className="text-support-slate text-sm">Brooklyn, NYC</p>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="bg-surface rounded-small p-8 max-w-md mx-auto">
            <h2 className="text-primary mb-6 text-center">Join the Waitlist</h2>

            {formState.isSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-small p-4 text-center">
                <p className="text-green-800 font-semibold mb-2">Success!</p>
                <p className="text-green-700 text-sm">
                  Thanks for joining the PawWalk waitlist. Check your email for a confirmation message.
                </p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div>
                  <label htmlFor="email" className="block text-primary font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="firstName" className="block text-primary font-semibold mb-2">
                    First Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Your name"
                    value={formState.firstName}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formState.consent}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="text-secondary text-sm">
                    I agree to receive updates about PawWalk and consent to the privacy policy.
                  </label>
                </div>

                {formState.error && (
                  <div className="bg-red-50 border border-red-200 rounded-small p-3">
                    <p className="text-red-800 text-sm">{formState.error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState.isSubmitting}
                  className="w-full bg-accent-primary text-canvas font-semibold rounded-small hover:bg-accent-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState.isSubmitting ? "Subscribing..." : "Get Early Access"}
                </button>
              </form>
            )}

            <div className="mt-6 pt-6 border-t border-dark-border">
              <p className="text-support-slate text-xs text-center mb-3">
                We respect your privacy. Your email is stored securely in Mailchimp and backed up to Google Sheets for redundancy. We{"'"ll never share your information without your consent.
              </p>
              <p className="text-support-slate text-xs text-center">
                See our <a href="/privacy" className="text-accent-primary hover:text-accent-secondary transition-colors">privacy policy</a> for details.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
