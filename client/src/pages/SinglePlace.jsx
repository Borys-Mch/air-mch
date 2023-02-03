import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "../components/BookingWidget";
import PlaceGallery from "../components/PlaceGallery";
import AddressLink from "../components/AddressLink";

export default function SinglePlace() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) return "";

  return (
    <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
      <div className="max-w-screen-xl w-full mx-auto">
        <h1 className="text-2xl">{place.title}</h1>
        <AddressLink>{place.address}</AddressLink>
        <PlaceGallery place={place} />
        <div className="mt-8 gap-8 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
          <div>
            <div className="my-4">
              <h2 className="font-semibold text-2xl">Description</h2>
              {place.description}
            </div>
            Check-in: {place.checkIn}:00
            <br />
            Check-out: {place.checkOut}:00
            <br />
            Max number of guests: {place.maxGuests}
          </div>
          <div>
            <BookingWidget place={place} />
          </div>
        </div>
        <h2 className="mt-8 font-semibold text-2xl">Extra Info</h2>
        <div className="mb-4 mt-1 text-sm text-gray-700 leading-4">
          {place.extraInfo}
        </div>
        <div>
          {place?.perks?.length > 0 &&
            place.perks.map((perk, index) => <div key={index}>{perk}</div>)}
        </div>
      </div>
    </div>
  );
}
