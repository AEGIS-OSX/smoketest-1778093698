export default function Features() {
  const features = [
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
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-[#0f1113] border-y border-dark">
      <div className="container-page">
        <div className="mb-12 md:mb-16">
          <h2 className="text-h2 mb-4">Why Choose PawWalk</h2>
          <p className="text-body text-text-secondary max-w-2xl">
            We make dog walking simple, reliable, and stress-free.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
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
  );
}
