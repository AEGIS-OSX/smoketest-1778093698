export default function Page() {
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
              <button className="bg-accent-primary text-canvas px-6 py-3 rounded-small font-semibold hover:bg-accent-secondary transition-colors">
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
              <p className="text-secondary mb-4">"PawWalk has been a lifesaver. My dog gets the exercise she needs, and I have peace of mind knowing she's in great hands."</p>
              <p className="text-primary font-semibold">Sarah M.</p>
              <p className="text-support-slate text-sm">Upper West Side, NYC</p>
            </div>
            <div className="bg-surface rounded-small p-6">
              <p className="text-secondary mb-4">"The walkers are professional and genuinely care about the dogs. I recommend PawWalk to everyone."</p>
              <p className="text-primary font-semibold">James T.</p>
              <p className="text-support-slate text-sm">Brooklyn, NYC</p>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="bg-surface rounded-small p-8 max-w-md mx-auto">
            <h2 className="text-primary mb-6 text-center">Join the Waitlist</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-primary font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-primary font-semibold mb-2">
                  First Name (Optional)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full"
                />
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  className="mt-1"
                />
                <label htmlFor="consent" className="text-secondary text-sm">
                  I agree to receive updates about PawWalk and consent to the privacy policy.
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-accent-primary text-canvas font-semibold rounded-small hover:bg-accent-secondary transition-colors"
              >
                Get Early Access
              </button>
            </form>
            <p className="text-support-slate text-xs text-center mt-4">
              We respect your privacy. See our <a href="/privacy">privacy policy</a>.
            </p>
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
