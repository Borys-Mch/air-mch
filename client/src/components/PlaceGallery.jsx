import { useState } from "react";
import IconsReactjs from "icons-reactjs";

export default function PlaceGallery({ place }) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

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
  );
}
