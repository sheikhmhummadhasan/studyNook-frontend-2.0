import RoomsDetailcard from "@/app/Components/RoomsDetailcard";
import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";
import React from "react";

const RoomDetailPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const prom = await fetch(`http://localhost:5000/studynook/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const res = await prom.json();

  return (
    <div>
      <RoomsDetailcard res={res} />
    </div>
  );
};

export default RoomDetailPage;