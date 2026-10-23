
import {
  Wifi,
  CalendarCheck,
  ShieldCheck,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: Wifi,
    title: "Modern Facilities",
    description: "Wi-Fi, projector, whiteboard and everything you need to study.",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Booking",
    description: "Choose your preferred room and book at your convenience.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description: "A comfortable and secure environment for every study session.",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description: "Find a suitable study space that fits your budget.",
    color: "bg-orange-100 text-orange-600",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-sky-50 p-5 sm:p-8 lg:p-12">
        <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
          <span className="text-sm font-bold uppercase tracking-wider text-cyan-600">
            Why StudyNook
          </span>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Why Choose <span className="text-cyan-600">StudyNook?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            We provide a productive study environment with modern facilities
            and convenient booking options.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
              >
                <div
                  className={`flex size-14 items-center justify-center rounded-2xl ${feature.color}`}
                >
                  <Icon size={27} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;