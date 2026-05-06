import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";

export default function Page() {
  return (
    <main className="min-h-screen bg-canvas text-text-primary">
      <nav className="w-full border-b border-dark py-4 md:py-6">
        <div className="container-page flex items-center justify-between">
          <div className="text-h3 font-bold">PawWalk</div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-text-secondary hover:text-text-primary transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-text-secondary hover:text-text-primary transition-colors">
              Testimonials
            </a>
            <button className="btn-primary">Join Waitlist</button>
          </div>
        </div>
      </nav>

      <Hero />

      <Features />

      <Testimonials />

      <section className="py-16 md:py-24 bg-[#0f1113] border-t border-dark">
        <div className="container-page">
          <div className="max-w-2xl mx-auto text-center flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-h2">Ready to Get Started?</h2>
              <p className="text-body text-text-secondary">
                Join the PawWalk waitlist and be among the first to experience flexible, reliable dog walking.
              </p>
            </div>
            <button className="btn-primary mx-auto">
              Join the PawWalk Waitlist
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-dark py-8 md:py-12">
        <div className="container-page">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="flex flex-col gap-2">
              <p className="text-h3 font-bold">PawWalk</p>
              <p className="text-small text-text-secondary">Flexible dog walking for urban pet owners.</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-body font-medium">Product</p>
              <a href="#features" className="text-small text-text-secondary hover:text-text-primary">
                Features
              </a>
              <a href="#testimonials" className="text-small text-text-secondary hover:text-text-primary">
                Testimonials
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-body font-medium">Legal</p>
              <a href="/privacy" className="text-small text-text-secondary hover:text-text-primary">
                Privacy Policy
              </a>
              <a href="/terms" className="text-small text-text-secondary hover:text-text-primary">
                Terms of Service
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-body font-medium">Contact</p>
              <a href="mailto:hello@pawwalk.com" className="text-small text-text-secondary hover:text-text-primary">
                hello@pawwalk.com
              </a>
            </div>
          </div>
          <div className="border-t border-dark pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-small text-text-secondary">© 2026 PawWalk. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-small text-text-secondary hover:text-text-primary">
                Twitter
              </a>
              <a href="#" className="text-small text-text-secondary hover:text-text-primary">
                Instagram
              </a>
              <a href="#" className="text-small text-text-secondary hover:text-text-primary">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
