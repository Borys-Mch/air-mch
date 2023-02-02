import { useEffect, useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function BookingWidget({ place }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [redirect, setRedirect] = useState("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

  const bookThisPlace = async () => {
    const response = await axios.post("/bookings", {
      checkIn,
      checkOut,
      numberOfGuests,
      name,
      mobile,
      price: numberOfNights * place.price,
      place: place._id,
    });
    const bookingId = response.data._id;
    setRedirect(`/account/bookings/${bookingId}`);
  };

  const guestsNubers = Array.from({ length: place.maxGuests }, (_, i) => i + 1);

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="bg-white p-4 border shadow rounded-2xl">
      <div>
        Price: <span className="font-bold">${place.price}</span> / per night
      </div>
      <div className="my-4 border border-gray-400 rounded-xl">
        <div className="grid grid-cols-2 border-b border-gray-400">
          <div className="p-2 border-r border-gray-400">
            <label>Check in </label>
            <br />
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div className="p-2">
            <label>Check Out </label>
            <br />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
        </div>
        <div className="p-2">
          <label>Guests </label>
          <br />
          <select
            name="guest"
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(e.target.value)}>
            {guestsNubers.map((guest) => (
              <option key={guest}>{guest}</option>
            ))}
          </select>
        </div>
        {numberOfNights > 0 && (
          <div className="p-2">
            <label>Your full name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Phone number</label>
            <input
              type="tel"
              placeholder="+380..."
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
        )}
      </div>
      <button onClick={bookThisPlace} className="primary">
        Book this place
        {checkIn && checkOut && <span> ${numberOfNights * place.price}</span>}
      </button>
    </div>
  );
}
