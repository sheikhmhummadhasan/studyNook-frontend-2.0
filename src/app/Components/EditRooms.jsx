"use client";
import { Button, Input, TextArea } from "@heroui/react";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  FaAlignLeft,
  FaArrowRight,
  FaCheckCircle,
  FaDollarSign,
  FaDoorOpen,
  FaImage,
  FaLayerGroup,
  FaPlus,
  FaRedo,
  FaUsers,
} from "react-icons/fa";
import { toast } from "react-toastify";
import Checkboxes from "./Checkboxs";

const EditRooms = ({ id, res, token }) => {
  const [amenities, setAmenities] = useState([]);
  const handleAmenitiesChange = (values) => {
    setAmenities(values);
  };

  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData(e.currentTarget);
      const data = Object.fromEntries(formdata.entries());
      const prom = await fetch(`${process.env.NEXT_PUPLIC_SURVER_URL}/studynook/${id}`, {
        method: "PATCH",
        headers: {
          authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!prom.ok) {
        toast.error("Please try again later");
        return;
      }
      toast.success("Update successfully done!");
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      toast.error("Please try again later");
    }
  };
  return (
    <div>
      <section className="min-h-screen bg-[#f4f7fb] px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white px-3 py-1.5 text-xs font-semibold text-cyan-700 shadow-sm">
              <FaDoorOpen />
              STUDYNOOK / ROOM MANAGEMENT
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Update Study Room
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Update your workspace with all the essential details to help
              students find their perfect study environment.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_40px_rgba(15,23,42,0.05)]">
            <div className="h-1.5 bg-gradient-to-r from-cyan-500 via-teal-400 to-cyan-200" />

            <form onSubmit={handleUpdate} className="p-5 sm:p-8 lg:p-10">
              <div className="mb-8 flex items-start gap-4 border-b border-slate-100 pb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-xl text-cyan-700">
                  <FaDoorOpen />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-slate-800">
                    Room Information
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Enter the basic information about your room.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Room Name <span className="text-rose-500">*</span>
                  </label>
                  <Input
                    name="roomName"
                    defaultValue={res?.roomName || ""}
                    placeholder="e.g. Premium Study Room"
                    startContent={
                      <FaDoorOpen className="shrink-0 text-slate-400" />
                    }
                    variant="bordered"
                    radius="lg"
                    isRequired
                    classNames={{
                      inputWrapper:
                        "h-12 border-slate-200 bg-white shadow-none hover:border-cyan-400 group-data-[focus=true]:border-cyan-500",
                      input: "text-sm",
                    }}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Floor
                  </label>
                  <Input
                    name="floor"
                    defaultValue={res?.floor || ""}
                    placeholder="e.g. 3rd Floor"
                    startContent={
                      <FaLayerGroup className="shrink-0 text-slate-400" />
                    }
                    variant="bordered"
                    radius="lg"
                    classNames={{
                      inputWrapper:
                        "h-12 border-slate-200 bg-white shadow-none hover:border-cyan-400 group-data-[focus=true]:border-cyan-500",
                      input: "text-sm",
                    }}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Seat Capacity
                  </label>
                  <Input
                    name="seatCapacity"
                    type="number"
                    min="1"
                    defaultValue={res?.seatCapacity || ""}
                    placeholder="e.g. 4 people"
                    startContent={
                      <FaUsers className="shrink-0 text-slate-400" />
                    }
                    variant="bordered"
                    radius="lg"
                    classNames={{
                      inputWrapper:
                        "h-12 border-slate-200 bg-white shadow-none hover:border-cyan-400 group-data-[focus=true]:border-cyan-500",
                      input: "text-sm",
                    }}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Hourly Rate
                  </label>
                  <Input
                    name="hourlyRate"
                    type="number"
                    min="0"
                    defaultValue={res?.hourlyRate || ""}
                    placeholder="e.g. 5"
                    startContent={
                      <FaDollarSign className="shrink-0 text-slate-400" />
                    }
                    endContent={
                      <span className="text-xs font-medium text-slate-400">
                        / hour
                      </span>
                    }
                    variant="bordered"
                    radius="lg"
                    classNames={{
                      inputWrapper:
                        "h-12 border-slate-200 bg-white shadow-none hover:border-cyan-400 group-data-[focus=true]:border-cyan-500",
                      input: "text-sm",
                    }}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Room Image URL
                  </label>
                  <Input
                    name="imageUrl"
                    type="url"
                    defaultValue={res?.imageUrl || ""}
                    placeholder="https://example.com/your-room-image.jpg"
                    startContent={
                      <FaImage className="shrink-0 text-slate-400" />
                    }
                    variant="bordered"
                    radius="lg"
                    classNames={{
                      inputWrapper:
                        "h-12 border-slate-200 bg-white shadow-none hover:border-cyan-400 group-data-[focus=true]:border-cyan-500",
                      input: "text-sm",
                    }}
                  />
                  <p className="mt-2 text-xs text-slate-400">
                    Use a publicly accessible image URL.
                  </p>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <FaAlignLeft className="text-cyan-600" />
                    Room Description <span className="text-rose-500">*</span>
                  </label>
                  <TextArea
                    name="description"
                    defaultValue={res?.description || ""}
                    placeholder="Describe the room..."
                    variant="bordered"
                    radius="lg"
                    minRows={4}
                    isRequired
                    classNames={{
                      inputWrapper:
                        "border-slate-200 bg-white shadow-none hover:border-cyan-400 group-data-[focus=true]:border-cyan-500",
                      input: "text-sm leading-6",
                    }}
                  />
                </div>
              </div>

              <div className="mb-4 mt-10 flex items-start gap-4 border-b border-slate-100 pb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl text-teal-700">
                  <FaCheckCircle />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-slate-800">
                    Room Amenities
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Select all facilities available in this room.
                  </p>
                </div>
              </div>

              <div>
                <Checkboxes
                  amenities={amenities}
                  onChange={handleAmenitiesChange}
                />
              </div>

              <div className="mt-10 flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">
                <Button
                  type="reset"
                  variant="bordered"
                  startContent={<FaRedo />}
                  className="h-12 w-full border-slate-200 font-semibold text-slate-600 sm:w-auto sm:min-w-32"
                  onClick={() => setAmenities([])}
                >
                  Reset Form
                </Button>

                <Button
                  type="submit"
                  endContent={<FaArrowRight />}
                  className="h-12 w-full bg-cyan-600 px-7 font-semibold text-white shadow-md shadow-cyan-600/20 transition hover:bg-cyan-700 sm:w-auto sm:min-w-40"
                >
                  Update
                </Button>
              </div>
            </form>
          </div>

          <p className="mt-5 text-center text-xs text-slate-400">
            StudyNook · Create a better place to learn.
          </p>
        </div>
      </section>
    </div>
  );
};

export default EditRooms;
