import { headers } from "next/headers";
import NoBookings from "../Components/NoBookings";
import CancelBooking from "../Components/CancelBooking";
import { auth } from "../lib/auth";


const MyBookingPage = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const prom = await fetch(`http://localhost:5000/booking`, {
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