"use client";
import { Calendar } from "@gravity-ui/icons";
import { Button, DateField, Label } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import DeleteButton from "./DeleteButton";
import { authClient } from "../lib/auth-client";

const RoomsDetailcard = ({ res }) => {
  const [date, setDate] = useState(null);
  const {
    _id,
    amenities,
    description,
    floor,
    hourlyRate,
    imageUrl,
    roomName,
    seatCapacity,
  } = res;
  const bookingDate = new Date(date);
  const handelBooking = async () => {
    const user  = await authClient.getSession();
    const bookedBY = user?.data?.user?.id; 

    const { data, error } = await authClient.token();
    const dataColl = {
      amenities,
      description,
      floor,
      hourlyRate,
      imageUrl,
      roomName,
      seatCapacity,
      bookingDate,
      bookedBY
    };
    const prom = await fetch(`http://localhost:5000/booking`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${data?.token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(dataColl),
    });
    const resP = await prom.json();
    console.log(resP)
    if(resP){
      toast.success('Booking Confirmed')
      redirect('/my-bookings')
    }
    if(!resP){
      toast.error('Somthing Went to wrong..')
    }
    
  };

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-lg sm:rounded-2xl">
      <div className="relative h-48 w-full sm:h-64 md:h-80">
        <Image
          height={700}
          width={1200}
          src={imageUrl}
          alt={roomName}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 896px"
          className="h-full w-full object-cover"
        />

        <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs text-cyan-700 sm:left-4 sm:top-4 sm:px-4">
          Meeting Room
        </span>

        <span className="absolute bottom-3 left-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs text-white sm:bottom-4 sm:left-4 sm:px-4">
          {floor}
        </span>
      </div>

      <div className="p-4 sm:p-6 md:p-7">
        <h1 className="mb-4 break-words text-xl font-medium text-slate-900 sm:mb-5 sm:text-2xl">
          {roomName}
        </h1>

        <div className="grid grid-cols-1 gap-3 min-[400px]:grid-cols-2">
          <div className="rounded-xl bg-cyan-50 p-3 sm:p-4">
            <p className="text-xs text-slate-400">Seat Capacity</p>
            <p className="mt-1 text-sm font-medium text-slate-900">
              {seatCapacity} people
            </p>
          </div>

          <div className="rounded-xl bg-cyan-50 p-3 sm:p-4">
            <p className="text-xs text-slate-400">Floor</p>
            <p className="mt-1 text-sm font-medium text-slate-900">{floor}</p>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-5 md:flex-row md:gap-6">
          <div className="min-w-0 flex-1">
            <h2 className="mb-2 text-base font-medium text-slate-900 sm:text-lg">
              About this room
            </h2>

            <p className="break-words text-sm leading-6 text-slate-500">
              {description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {amenities?.slice(0, 3).map((amenity, index) => (
                <span
                  key={index}
                  className="max-w-full break-words rounded-full bg-cyan-50 px-3 py-1.5 text-xs text-cyan-700"
                >
                  {amenity}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href={`/rooms/${_id}/updatedata`}
                className="rounded-full bg-cyan-700 px-5 py-2 text-center text-sm font-medium text-white transition hover:bg-cyan-800"
              >
                Update
              </Link>

              <DeleteButton id={_id}></DeleteButton>
            </div>
          </div>

          <div className="w-full min-w-0 self-start rounded-xl border border-slate-200 p-4 shadow-sm md:w-56 md:shrink-0">
            <p className="text-xs text-slate-500">Hourly rate</p>

            <h3 className="text-2xl font-medium text-cyan-500">
              ${hourlyRate}
            </h3>

            <p className="mb-4 text-xs text-slate-400">per hour</p>
            <DateField
              onChange={(value) => setDate(value)}
              className="w-full"
              name="date"
            >
              <Label>Date</Label>
              <DateField.Group>
                <DateField.Input>
                  {(segment) => <DateField.Segment segment={segment} />}
                </DateField.Input>
                <DateField.Suffix>
                  <Calendar className="size-4 text-slate-500" />
                </DateField.Suffix>
              </DateField.Group>
              <Button
                onClick={handelBooking}
                type="submit"
                className=" mt-2 w-full rounded-lg bg-cyan-500 px-3 py-3 text-center text-sm font-medium text-white transition hover:bg-cyan-600"
              >
                Book Now →
              </Button>
            </DateField>

            <div className="mt-4 space-y-2 text-xs leading-5 text-slate-500">
              <p>✓ Comfortable seating</p>
              <p>✓ Modern amenities</p>
              <p>✓ Flexible booking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsDetailcard;