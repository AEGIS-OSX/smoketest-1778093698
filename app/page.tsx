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

      <section className="py-16 md:py-24 lg:py-32">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-h1">Meet PawWalk</h1>
              <p className="text-body text-text-secondary max-w-lg">
                Flexible, on-demand dog walking for urban pet owners who value reliability, safety, and easy scheduling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="btn-primary">Join the PawWalk Waitlist</button>
                <button className="inline-flex items-center justify-center px-6 py-3 rounded-[var(--radius-small)] border border-dark text-text-primary font-medium text-[var(--type-scale-3)] leading-[var(--line-height-3)] transition-colors duration-150 ease-out hover:bg-[#0f1113] focus-ring">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-[#0f1113] rounded-[var(--radius-small)] aspect-square flex items-center justify-center border border-dark">
              <span className="text-text-secondary">Hero Image</span>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 md:py-24 bg-[#0f1113] border-y border-dark">
        <div className="container-page">
          <div className="mb-12 md:mb-16">
            <h2 className="text-h2 mb-4">Why Choose PawWalk</h2>
            <p className="text-body text-text-secondary max-w-2xl">
              We make dog walking simple, reliable, and stress-free.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Flexible Scheduling",
                description: "Book walks on your schedule, whenever you need them.",
              },
              {
                title: "Trusted Walkers",
                description: "Vetted, experienced walkers who care for your dog.",
              },
              {
                title: "Real-Time Updates",
                description: "Track your walk in real-time with photos and updates.",
              },
              {
                title: "Easy Payments",
                description: "Simple, transparent pricing with no hidden fees.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[var(--radius-small)] bg-canvas border border-dark flex flex-col gap-3"
              >
                <h3 className="text-h3">{feature.title}</h3>
                <p className="text-body text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24">
        <div className="container-page">
          <div className="mb-12 md:mb-16">
            <h2 className="text-h2 mb-4">What Dog Owners Say</h2>
            <p className="text-body text-text-secondary max-w-2xl">
              Join hundreds of happy pet owners who trust PawWalk.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "PawWalk has been a lifesaver. My dog gets the exercise she needs, and I have peace of mind.",
                author: "Sarah M.",
                neighborhood: "Brooklyn, NY",
              },
              {
                quote: "The walkers are professional and genuinely care about the dogs. Highly recommend.",
                author: "James T.",
                neighborhood: "Manhattan, NY",
              },
              {
                quote: "Easy to book, transparent pricing, and my pup comes home happy every time.",
                author: "Emma L.",
                neighborhood: "Queens, NY",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[var(--radius-small)] bg-[#0f1113] border border-dark flex flex-col gap-4"
              >
                <p className="text-body text-text-secondary italic">\"{testimonial.quote}\"</p>
                <div className="flex flex-col gap-1">
                  <p className="text-body font-medium">{testimonial.author}</p>
                  <p className="text-small text-text-secondary">{testimonial.neighborhood}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
