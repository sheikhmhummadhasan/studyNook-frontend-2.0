import Image from "next/image";
import Link from "next/link";
import React from "react";

const RoomsCard = ({ e }) => {
  return (
    <div>
      <div>
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="overflow-hidden">
            <Image
              src={e.imageUrl}
              alt={e.roomName}
              height={500}
              width={900}
              className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="space-y-4 p-5">
            <div>
              <h2 className="text-xl font-bold text-gray-800">{e.roomName}</h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {e.description.length > 100
                  ? `${e.description.slice(0, 100)}...`
                  : e.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3">
              <div>
                <p className="text-xs text-gray-500">Floor</p>
                <p className="font-semibold text-gray-700">{e.floor}</p>
              </div>

              <div>
                <p className="text-xs text-gray-500">Seat Capacity</p>
                <p className="font-semibold text-gray-700">{e.seatCapacity}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex flex-wrap gap-2">
                {(Array.isArray(e.amenities) ? e.amenities : [])
                  .slice(0, 3)
                  .map((amenity, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700"
                    >
                      {amenity}
                    </span>
                  ))}

                {Array.isArray(e.amenities) && e.amenities.length > 3 && (
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    +{e.amenities.length - 3} more
                  </span>
                )}
              </div>

              {Array.isArray(e.amenities) && e.amenities.length > 3 && (
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                  +{e.amenities.length - 3} more
                </span>
              )}
            </div>

            <div className="flex items-center justify-between gap-2 border-t border-gray-100 pt-4">
              <p className="shrink-0">
                <span className="text-2xl font-bold text-cyan-700">
                  ${e.hourlyRate}
                </span>
                <span className="text-sm text-gray-500">/hr</span>
              </p>

              <Link
                href={`/rooms/${e._id}`}
                className="rounded-xl bg-cyan-600 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700 sm:px-4"
              >
                View Details →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsCard;