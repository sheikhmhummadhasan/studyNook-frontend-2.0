
import Link from "next/link";
import { CalendarDays, ArrowRight } from "lucide-react";

const NoBookings = () => {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-dashed border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-sky-50 px-6 py-12 text-center">
      <div className="mb-5 flex size-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-600 text-white shadow-lg shadow-cyan-200">
        <CalendarDays className="size-10" />
      </div>

      <h2 className="text-2xl font-bold text-slate-800">
        You have no bookings yet.
      </h2>

      <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
        You havent booked any study rooms yet. Explore available rooms and
        find the perfect place for your next study session.
      </p>

      <Link
        href="/rooms"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 px-6 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
      >
        Explore Rooms
        <ArrowRight className="size-5" />
      </Link>
    </div>
  );
};

export default NoBookings;