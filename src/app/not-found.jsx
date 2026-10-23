'use client'
import { House, ArrowLeft } from "@gravity-ui/icons";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex min-h-[75vh] flex-col items-center justify-center bg-white px-4 py-12 text-center text-slate-900">
      <h1 className="text-8xl font-black tracking-tight text-cyan-600 sm:text-9xl">
        404
      </h1>

      <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-600 px-6 py-3 font-medium text-white transition hover:bg-cyan-700"
      >
        <House />
        Go Back Home
      </Link>

      <button
        onClick={() => window.history.back()}
        className="mt-5 inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-600"
      >
        <ArrowLeft />
        Go Back
      </button>
    </section>
  );
};

export default NotFound;