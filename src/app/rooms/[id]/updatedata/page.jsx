import EditRooms from "@/app/Components/EditRooms";
import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";
import React from "react";

const Updatedata = async ({ params }) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const { id } = await params;
  const prom = await fetch(`${process.env.SURVER_URI}/studynook/${id}`);
  const res = await prom.json();

  return (
    <div>
      <EditRooms id={id} res={res} token={token}/>
    </div>
  );
};

export default Updatedata;
