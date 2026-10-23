import Image from "next/image";
import { auth } from "../lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

const MyListingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(token);
  const id = session?.user?.id;
  const prom = await fetch(`http://localhost:5000/my-listings/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const rooms = await prom.json();

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">My Listings</h1>
          <p className="mt-2 text-slate-500">
            Manage the study rooms you have added.
          </p>
          <p className="mt-3 font-semibold text-cyan-600">
            Total Listings: {rooms.length}
          </p>
        </div>

        {rooms.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center">
            <h2 className="text-xl font-bold text-slate-800">
              No listings found
            </h2>
            <p className="mt-2 text-slate-500">
              You have not added any study rooms yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <article
                key={room._id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
              >
                <div className="relative h-56 w-full">
                  {room.imageUrl ? (
                    <Image
                      src={room.imageUrl}
                      alt={room.roomName || "Study room"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-slate-100 text-slate-400">
                      No Image
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h2 className="text-xl font-bold text-slate-900">
                    {room.roomName}
                  </h2>

                  <p className="mt-2 line-clamp-3 text-sm text-slate-500">
                    {room.description}
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-cyan-50 p-3">
                      <p className="text-xs text-slate-500">Floor</p>
                      <p className="font-semibold text-cyan-700">
                        {room.floor ?? "N/A"}
                      </p>
                    </div>

                    <div className="rounded-xl bg-sky-50 p-3">
                      <p className="text-xs text-slate-500">Capacity</p>
                      <p className="font-semibold text-sky-700">
                        {room.seatCapacity ?? "N/A"} seats
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-xl font-bold text-slate-900">
                    ${room.hourlyRate ?? 0}
                    <span className="text-sm font-normal text-slate-500">
                      {" "}
                      / hour
                    </span>
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {(Array.isArray(room.amenities) ? room.amenities : [])
                      .slice(0, 3)
                      .map((amenity) => (
                        <span
                          key={amenity}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
                        >
                          {amenity}
                        </span>
                      ))}
                  </div>

                  <div className="mt-5 flex gap-3">
                    <Link href={`/rooms/${room._id}`}>
                      <button className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 font-semibold text-white transition hover:opacity-90">
                        View Room
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyListingsPage;
