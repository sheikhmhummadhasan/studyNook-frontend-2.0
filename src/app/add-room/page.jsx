import React from "react";
import AddRoomForm from "../Components/AddRoomForm";
import { auth } from "../lib/auth";
import { headers } from "next/headers";

const AddRoompage = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  return (
    <div>
      <AddRoomForm token={token} />
    </div>
  );
};

export default AddRoompage;
