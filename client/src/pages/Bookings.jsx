import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import IconsReactjs from "icons-reactjs";
import AccountNav from "../components/AccountNav";
import PlaceImg from "../components/PlaceImg";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("/bookings").then((response) => {
      setBookings(response.data);
    });
  }, []);
  return (
    <div className="max-w-screen-xl w-full mx-auto">
      <AccountNav />
      <div>
        {bookings?.length > 0 &&
          bookings.map((booking) => (
            <div
              key={booking._id}
              className="flex gap-4 my-5 bg-gray-200 rounded-2xl overflow-hidden">
              <div className="w-48">
                <PlaceImg place={booking.place} />
              </div>
              <div className="py-3 pr-3 grow">
                <h2 className="text-xl">{booking.place.title}</h2>
                <div className="flex gap-2 border-t border-gray-300 mt-2 py-2">
                  <IconsReactjs
                    icon={"calendar-8"}
                    fontSize={"1rem"}
                    color={"#000"}
                  />
                  {format(new Date(booking.checkIn), "dd-MM-yy")} &rArr;{" "}
                  <IconsReactjs
                    icon={"calendar-8"}
                    fontSize={"1rem"}
                    color={"#000"}
                  />
                  {format(new Date(booking.checkOut), "dd-MM-yy")}
                </div>
                <div>
                  {differenceInCalendarDays(
                    new Date(booking.checkOut),
                    new Date(booking.checkIn)
                  )}{" "}
                  nights
                  {" | "}
                  Total price: ${booking.price}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
