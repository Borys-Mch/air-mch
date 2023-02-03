import axios from "axios";
import { useEffect, useState } from "react";
import AccountNav from "../components/AccountNav";
import PlaceImg from "../components/PlaceImg";
import { Link } from "react-router-dom";
import BookingDates from "../components/BookingDates";

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
            <Link
              to={`/account/bookings/${booking._id}`}
              key={booking._id}
              className="flex gap-4 my-5 bg-gray-200 rounded-2xl overflow-hidden">
              <div className="w-48">
                <PlaceImg place={booking.place} />
              </div>
              <div className="py-3 pr-3 grow">
                <h2 className="text-xl">{booking.place.title}</h2>
                <BookingDates booking={booking} />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
