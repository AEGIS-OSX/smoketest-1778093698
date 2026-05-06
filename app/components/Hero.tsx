"use client";

import { useRef } from "react";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  const formRef = useRef<HTMLDivElement>(null);

  const handleCTAClick = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-h1">Flexible dog walking for busy urban pet owners.</h1>
              <p className="text-body text-text-secondary max-w-lg">
                PawWalk connects you with trusted, vetted walkers who care for your dog like their own. Book on your schedule, track in real-time, and give your pup the exercise they need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleCTAClick}
                  className="btn-primary"
                  aria-label="Join the PawWalk Waitlist"
                >
                  Join the PawWalk Waitlist
                </button>
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

      <section ref={formRef} className="py-16 md:py-24 bg-[#0f1113] border-y border-dark">
        <div className="container-page">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-h2 mb-4">Join the PawWalk Waitlist</h2>
              <p className="text-body text-text-secondary">
                Be among the first to experience flexible, reliable dog walking. We{"'"}
                ll send you early-access details and exclusive launch offers.
              </p>
            </div>
            <WaitlistForm />
          </div>
        </div>
      </section>
    </>
  );
}
