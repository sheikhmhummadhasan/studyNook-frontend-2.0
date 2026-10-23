
import {
  DoorOpen,
  Users,
  CalendarCheck,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: DoorOpen,
    value: "50+",
    label: "Study Rooms",
  },
  {
    icon: Users,
    value: "1K+",
    label: "Happy Students",
  },
  {
    icon: CalendarCheck,
    value: "5K+",
    label: "Bookings",
  },
  {
    icon: Star,
    value: "4.8",
    label: "Average Rating",
  },
];

const StudyNookStats = () => {
  return (
    <section  className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-sky-50 px-5 py-9 sm:px-8 sm:py-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Our <span className="text-cyan-600">Impact</span>
          </h2>

          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Building better study experiences, one session at a time.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-0">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center ${
                  index > 0
                    ? "md:border-l md:border-cyan-200"
                    : ""
                }`}
              >
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white text-cyan-600 shadow-md shadow-cyan-100">
                  <Icon size={27} />
                </div>

                <p className="mt-4 text-3xl font-extrabold text-slate-900">
                  {stat.value}
                </p>

                <p className="mt-1 text-sm font-medium text-slate-500">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StudyNookStats;
