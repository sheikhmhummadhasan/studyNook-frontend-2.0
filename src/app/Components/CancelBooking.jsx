"use client";
import Image from "next/image";
import React from "react";
import { Calendar, TrashBin } from "@gravity-ui/icons";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { authClient } from "../lib/auth-client";

const CancelBooking = ({ res }) => {
  const handleCancel = async (id) => {
    const { data, error } = await authClient.token();

    const prom = await fetch(`${process.env.SURVER_URI}/mybooking/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${data?.token}`,
      },
    });
    const res = await prom.json();

    if (res) {
      toast.success("Booking Cancel Successfully");
    }
    if (!res) {
      toast.error("Plese try again later");
    }
    redirect("/my-bookings");
  };
  const handleDelete = async (id) => {
    const { data, error } = await authClient.token();
    const prom = await fetch(`${process.env.SURVER_URI}/booking/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${data?.token}`,
      },
    });
    const res = await prom.json();
    if (res) {
      toast.success("Booking Delete Successfully");
    }
    if (!res) {
      toast.error("Plese try again later");
    }

    redirect("/my-bookings");
  };
  return (
    <div>
      <div className="mx-auto w-full md:w-9/12 space-y-5 px-4 py-8 sm:px-6">
        <div className="mb-8">
          <h1  className="mt-2 text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
            My <span className="text-cyan-600">Bookings</span> 
            </h1>
          <p className="mt-2 text-slate-500">
            Manage the study rooms you have added.
          </p>
          <p className="mt-3 font-semibold text-cyan-600">
            Total Listings: {res.length}
          </p>
        </div>
        {res.map((booking) => {
          const { _id, roomName, imageUrl, bookingDate, hourlyRate, status } =
            booking;
          return (
            <div
              key={booking._id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="relative h-52 w-full shrink-0 overflow-hidden sm:h-auto sm:min-h-56 sm:w-60 md:w-72 lg:w-80">
                  <Image
                    src={imageUrl}
                    alt={roomName || "Room"}
                    fill
                    sizes="(max-width: 640px) 100vw, 240px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-cyan-800 shadow-sm backdrop-blur">
                    StudyNook
                  </span>
                </div>

                <div className="flex min-w-0 flex-1 flex-col gap-4 p-4 sm:p-5 md:flex-row md:items-center md:p-6">
                  <div className="min-w-0 flex-1">
                    <h2 className="break-words text-xl font-bold text-slate-800">
                      {roomName}
                    </h2>

                    <div className="mt-4 flex items-start gap-3">
                      <Calendar className="mt-0.5 size-5 shrink-0 text-cyan-600" />

                      <div>
                        <p className="text-xs font-medium text-slate-500">
                          Booking Date
                        </p>
                        <p className="mt-1 break-words text-sm font-semibold text-slate-800">
                          {bookingDate
                            ? new Date(bookingDate).toLocaleDateString(
                                "en-GB",
                                {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                },
                              )
                            : "Date not available"}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${
                          status?.toLowerCase() === "cancelled"
                            ? "bg-red-50 text-red-600"
                            : "bg-emerald-50 text-emerald-700"
                        }`}
                      >
                        <span
                          className={`size-2 rounded-full ${
                            status?.toLowerCase() === "cancelled"
                              ? "bg-red-500"
                              : "bg-emerald-500"
                          }`}
                        />
                        {status || "Confirmed"}
                      </span>
                    </div>

                    <div className="mt-4">
                      <p className="text-xs text-slate-500">Hourly Rate</p>
                      <p className="mt-1 text-2xl font-bold text-cyan-700">
                        ${hourlyRate}
                        <span className="ml-1 text-sm font-normal text-slate-500">
                          / hour
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4 md:flex md:min-w-40 md:items-center md:gap-2 md:border-l md:border-t-0 md:pl-5 md:pt-0">
                    {status?.toLowerCase() !== "cancelled" && (
                      <button
                        type="button"
                        onClick={() => handleCancel(booking._id)}
                        className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-4 py-3 text-sm font-semibold text-red-600 transition hover:border-red-500 hover:bg-red-50"
                      >
                        <TrashBin className="size-4" />
                        Cancel
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => handleDelete(booking._id)}
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700 md:mt-0"
                    >
                      <TrashBin className="size-4" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CancelBooking;
