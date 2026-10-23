
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle } from "lucide-react";

const StudyNookCTA = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600 px-6 py-12 shadow-xl shadow-cyan-200/50 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
        <div className="absolute -right-16 -top-20 -z-10 size-64 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-24 left-1/3 -z-10 size-64 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold text-white">
              Ready to Get Started?
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Your Perfect Study Space Is Just a Click Away
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-cyan-50 sm:text-base">
              Join StudyNook and discover a better way to study, collaborate,
              and achieve your academic goals.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/rooms"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-cyan-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-cyan-50"
              >
                Explore Rooms
                <ArrowRight size={19} />
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-white">
              <span className="inline-flex items-center gap-2">
                <CheckCircle size={17} />
                Easy Booking
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle size={17} />
                Comfortable Spaces
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-3xl bg-white/10 blur-xl" />

            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85"
              alt="Bright modern study workspace"
              className="relative h-64 w-full rounded-2xl border border-white/30 object-cover shadow-2xl sm:h-80"
            />

            <div className="absolute -bottom-5 left-4 right-4 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl sm:left-6 sm:right-6">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                <BookOpen size={25} />
              </div>

              <div>
                <p className="font-bold text-slate-900">
                  Your Next Study Session
                </p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Find a space. Focus. Achieve more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyNookCTA;