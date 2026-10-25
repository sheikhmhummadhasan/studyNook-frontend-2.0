import { headers } from "next/headers";
import NoBookings from "../Components/NoBookings";
import CancelBooking from "../Components/CancelBooking";
import { auth } from "../lib/auth";


const MyBookingPage = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const session = await auth.api.getSession({
      headers: await headers()
    })
    const id = session?.user?.id;

  const prom = await fetch(`https://study-nook-backend-pi.vercel.app/mybooking/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const res = await prom.json();
  
  return(
    res.length === 0 ?  <NoBookings /> : <CancelBooking res={res} /> 
  ) 
};

export default MyBookingPage;