import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — PawWalk",
  description: "Privacy policy for PawWalk dog walking service.",
};

export default function PrivacyPage() {
  return (
    <>
      <header>
        <nav className="container">
          <h1 className="text-primary">PawWalk</h1>
        </nav>
      </header>

      <main>
        <section className="container max-w-2xl">
          <h1 className="text-primary mb-8">Privacy Policy</h1>

          <div className="space-y-6 text-secondary">
            <div>
              <h2 className="text-primary mb-3">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as your email address and first name when you join our waitlist. We also collect information about how you interact with our site, including UTM parameters and analytics events.
              </p>
            </div>

            <div>
              <h2 className="text-primary mb-3">2. How We Use Your Information</h2>
              <p>
                We use your email address to send you updates about PawWalk and to confirm your waitlist signup. We use analytics data to understand how visitors use our site and to improve our service. We do not sell or share your personal information with third parties without your consent.
              </p>
            </div>

            <div>
              <h2 className="text-primary mb-3">3. Data Storage and Security</h2>
              <p>
                Your email address is stored securely in Mailchimp and backed up to Google Sheets for redundancy. We use industry-standard encryption and security practices to protect your information. All data is handled in accordance with applicable privacy laws, including GDPR.
              </p>
            </div>

            <div>
              <h2 className="text-primary mb-3">4. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information at any time. You can unsubscribe from our emails by clicking the unsubscribe link in any message. If you have questions about your data, please contact us at privacy@pawwalk.com.
              </p>
            </div>

            <div>
              <h2 className="text-primary mb-3">5. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any material changes by posting the updated policy on this page and updating the "last modified" date below.
              </p>
            </div>

            <div className="pt-6 border-t border-dark-border">
              <p className="text-support-slate text-sm">
                Last modified: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="/" className="text-accent-primary hover:text-accent-secondary transition-colors">
              Back to home
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
