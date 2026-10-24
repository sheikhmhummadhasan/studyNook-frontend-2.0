import React from "react";
import RoomsCard from "./RoomsCard";

import { headers } from "next/headers";
import { auth } from "../lib/auth";


const RoomsDataFetch = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const prom = await fetch(
    `http://localhost:5000/studynook`,
  );
  const res = await prom.json();

  return (
    <div>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full min-w-0">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600 sm:text-sm">
            Find Your Space
          </span>

          <h2 className="mt-2 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Featured <span className="text-cyan-600">Study Rooms</span>
          </h2>

          <p className="mb-5 mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
            Explore some of our most popular study rooms and find the perfect
            space for your next session.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {res.map((e) => (
            <RoomsCard key={e._id} e={e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomsDataFetch;