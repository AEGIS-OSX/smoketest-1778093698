export default function Testimonials() {
  const testimonials = [
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
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container-page">
        <div className="mb-12 md:mb-16">
          <h2 className="text-h2 mb-4">What Dog Owners Say</h2>
          <p className="text-body text-text-secondary max-w-2xl">
            Join hundreds of happy pet owners who trust PawWalk.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[var(--radius-small)] bg-[#0f1113] border border-dark flex flex-col gap-4"
            >
              <p className="text-body text-text-secondary italic">
                {`"${testimonial.quote}"`}
              </p>
              <div className="flex flex-col gap-1">
                <p className="text-body font-medium">{testimonial.author}</p>
                <p className="text-small text-text-secondary">{testimonial.neighborhood}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
