import RoomsDetailcard from "@/app/Components/RoomsDetailcard";
import { auth } from "@/app/lib/auth";
import { Spinner } from "@heroui/react";
import { headers } from "next/headers";
import React, { Suspense } from "react";

const RoomDetailPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(token)

  const prom = await fetch(`http://localhost:5000/studynook/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  
  const res = await prom.json();

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <RoomsDetailcard res={res} />
      </Suspense>
    </div>
  );
};

export default RoomDetailPage;