
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden rounded-3xl bg-cyan-50">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85"
          alt="Modern study workspace"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-50 via-cyan-50/95 to-white/20 sm:via-cyan-50/90" />

        <div className="grid min-h-[480px] items-center md:grid-cols-2">
          <div className="px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
            <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
              Welcome to StudyNook
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Find Your Perfect{" "}
              <span className="text-cyan-600">Study Space</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
              Quiet rooms, modern facilities, and a productive environment
              for your better tomorrow.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/rooms"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-200 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Explore Rooms →
              </Link>

              <Link
                href="/rooms"
                className="inline-flex items-center justify-center rounded-xl border border-cyan-500 bg-white/80 px-6 py-3 font-semibold text-cyan-700 transition hover:bg-cyan-50"
              >
                Learn More
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-700">
              <span>✓ Comfortable Study Rooms</span>
              <span>✓ Secure & Safe</span>
              <span>✓ Easy Booking</span>
            </div>
          </div>

          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;