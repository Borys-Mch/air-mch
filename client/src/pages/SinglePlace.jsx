import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IconsReactjs from "icons-reactjs";
import BookingWidget from "../components/BookingWidget";

export default function SinglePlace() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) return "";

  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 bg-white min-h-screen">
        <div className="p-8 grid gap-4">
          <div>
            <button
              onClick={() => setShowAllPhotos(false)}
              className="fixed flex gap-1 py-2 px-4 rounded-xl bg-white hover:bg-gray-300">
              <IconsReactjs
                icon={"cancel-5"}
                fontSize={"1.1rem"}
                color={"#383838"}
              />
              Close
            </button>
          </div>
          {place?.photos?.length > 0 &&
            place.photos.map((photo) => (
              <div key={photo._id} className="mx-auto">
                <img src={"http://localhost:8000/uploads/" + photo} alt="" />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
      <div className="max-w-screen-xl w-full mx-auto">
        <h1 className="text-2xl">{place.title}</h1>
        <a
          target="_blank"
          href={"https://maps.google.com/?q=" + place.address}
          className="flex gap-1 mb-3 font-semibold underline">
          <IconsReactjs
            icon={"location-6"}
            fontSize={"1.1rem"}
            color={"#000"}
          />
          {place.address}
        </a>
        <div className="relative">
          <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
            <div>
              {place.photos?.[0] && (
                <div>
                  <img
                    className="aspect-square object-cover"
                    src={"http://localhost:8000/uploads/" + place.photos[0]}
                    alt=""
                  />
                </div>
              )}
            </div>
            <div className="grid">
              {place.photos?.[1] && (
                <img
                  className="aspect-square object-cover"
                  src={"http://localhost:8000/uploads/" + place.photos[1]}
                  alt=""
                />
              )}
              <div className="overflow-hidden">
                {place.photos?.[2] && (
                  <img
                    className="aspect-square object-cover relative top-2"
                    src={"http://localhost:8000/uploads/" + place.photos[2]}
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>
          <button
            onClick={() => setShowAllPhotos(true)}
            className="absolute bottom-5 right-5 flex gap-3 px-4 py-1 items-center bg-white text-[#383838] rounded-lg border border-black">
            <IconsReactjs icon={"th-1"} fontSize={"1rem"} color={"#383838"} />
            Show all photos
          </button>
        </div>
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
      </div>
    </div>
  );
}
