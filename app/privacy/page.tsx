export default function PrivacyPage() {
  return (
    <>
      <header>
        <nav className="container">
          <a href="/" className="text-primary font-semibold hover:text-accent-primary transition-colors">
            ← Back to PawWalk
          </a>
        </nav>
      </header>

      <main>
        <section className="container max-w-2xl">
          <h1 className="text-primary mb-8">Privacy Policy</h1>
          <p className="text-secondary mb-6">
            Last updated: May 2026
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-primary mb-4">1. Introduction</h2>
              <p className="text-secondary mb-4">
                PawWalk ("we," "us," "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and sign up for our early-access waitlist.
              </p>
            </div>

            <div>
              <h2 className="text-primary mb-4">2. Information We Collect</h2>
              <p className="text-secondary mb-4">
                When you sign up for the PawWalk waitlist, we collect:
              </p>
              <ul className="text-secondary space-y-2 ml-6 mb-4">
                <li>• Email address (required)</li>
                <li>• First name (optional)</li>
                <li>• Consent checkbox status</li>
                <li>• Timestamp of submission</li>
                <li>• UTM parameters and marketing source (if present)</li>
              </ul>
              <p className="text-secondary">
                We do not collect sensitive personal information such as payment details, location data, or health information at this stage.
              </p>
            </div>

            <div>
              <h2 className="text-primary mb-4">3. How We Use Your Information</h2>
              <p className="text-secondary mb-4">
                We use your information to:
              </p>
              <ul className="text-secondary space-y-2 ml-6 mb-4">
                <li>• Send you a confirmation email and welcome message</li>
                <li>• Keep you updated about PawWalk's launch and features</li>
                <li>• Analyze signup trends and marketing effectiveness</li>
                <li>• Comply with legal and regulatory obligations</li>
              </ul>
              <p className="text-secondary">
                We will not sell, rent, or share your email address with third parties without your explicit consent.
              </p>
            </div>

            <div>
              <h2 className="text-primary mb-4">4. Data Storage and Processing</h2>
              <p className="text-secondary mb-4">
                Your email and name are stored in two locations for redundancy and compliance:
              </p>
              <ul className="text-secondary space-y-2 ml-6 mb-4">
                <li>• <strong>Mailchimp</strong>: Primary audience storage. Mailchimp is our email service provider and processes your data according to their <a href="https://mailchimp.com/legal/privacy/" className="text-accent-primary hover:text-accent-secondary">Privacy Policy</a>.</li>
                <li>• <strong>Google Sheets (via Zapier)</strong>: Backup copy for data redundancy and internal reporting. This ensures we retain your signup information even if our primary system experiences issues.</li>
              </ul>
              <p className="text-secondary">
                Both services are GDPR-compliant and use industry-standard encryption for data in transit and at rest.
              </p>
            </div>

            <div>
              <h2 className="text-primary mb-4">5. Your Consent and Rights</h2>
              <p className="text-secondary mb-4">
                By checking the consent checkbox on our signup form, you agree to receive marketing emails from PawWalk about our service launch, features, and updates. You can unsubscribe at any time by clicking the "Unsubscribe" link in any email or by contacting us directly.
              </p>
              <p className="text-secondary mb-4">
                If you are located in the European Union, you have the right to:
              </p>
              <ul className="text-secondary space-y-2 ml-6 mb-4">
                <li>• Access your personal data</li>
                <li>• Correct inaccurate data</li>
                <li>• Request deletion of your data ("right to be forgotten")</li>
                <li>• Withdraw consent at any time</li>
              </ul>
              <p className="text-secondary">
                To exercise these rights, contact us at <a href="mailto:privacy@pawwalk.com" className="text-accent-primary hover:text-accent-secondary">privacy@pawwalk.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-primary mb-4">6. Data Retention</h2>
              <p className="text-secondary mb-4">
                We retain your email and name for as long as you remain on our waitlist and for up to 12 months after the PawWalk service launches, unless you request deletion sooner. After this period, we will securely delete your information unless we are required to retain it by law.
              </p>
            </div>

            <div>
              <h2 className="text-primary mb-4">7. Security</h2>
              <p className="text-secondary mb-4">
                We take data security seriously. All data transmitted to our servers is encrypted using TLS 1.2 or higher. API keys and sensitive credentials are stored as environment variables and are never exposed in client-side code.
              </p>
            </div>

            <div>
              <h2 className="text-primary mb-4">8. Third-Party Services</h2>
              <p className="text-secondary mb-4">
                Our website uses the following third-party services:
              </p>
              <ul className="text-secondary space-y-2 ml-6 mb-4">
                <li>• <strong>Mailchimp</strong> (email delivery and audience management)</li>
                <li>• <strong>Zapier</strong> (workflow automation and backup storage)</li>
                <li>• <strong>Google Sheets</strong> (data backup and reporting)</li>
                <li>• <strong>Plausible Analytics</strong> (privacy-focused analytics)</li>
              </ul>
              <p className="text-secondary">
                Each service has its own privacy policy. We recommend reviewing them to understand how they handle your data.
              </p>
            </div>

            <div>
              <h2 className="text-primary mb-4">9. Contact Us</h2>
              <p className="text-secondary mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p className="text-secondary">
                <strong>PawWalk Privacy Team</strong><br />
                Email: <a href="mailto:privacy@pawwalk.com" className="text-accent-primary hover:text-accent-secondary">privacy@pawwalk.com</a><br />
                Response time: Within 7 business days
              </p>
            </div>

            <div>
              <h2 className="text-primary mb-4">10. Changes to This Policy</h2>
              <p className="text-secondary">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our website constitutes your acceptance of the updated policy.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface text-primary py-8 mt-12">
        <div className="container text-center">
          <p className="text-secondary text-sm">
            © 2026 PawWalk. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
