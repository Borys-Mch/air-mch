import { format } from "date-fns";
import IconsReactjs from "icons-reactjs";
import { differenceInCalendarDays } from "date-fns";

export default function BookingDates({ booking }) {
  return (
    <div>
      <div className="flex gap-2 border-t border-gray-300 mt-2 py-2">
        <IconsReactjs icon={"calendar-8"} fontSize={"1rem"} color={"#000"} />
        {format(new Date(booking.checkIn), "dd-MM-yy")} &rArr;{" "}
        <IconsReactjs icon={"calendar-8"} fontSize={"1rem"} color={"#000"} />
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
  );
}
