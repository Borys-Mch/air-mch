import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import IconsReactjs from "icons-reactjs";
import AccountNav from "../components/AccountNav";

export default function Places() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);

  return (
    <div>
      <AccountNav />
      <div className="text-center">
        <Link
          className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
          to={"/account/places/new"}>
          <IconsReactjs icon={"plus"} fontSize={"1rem"} color={"#FFF"} />
          Ad new place
        </Link>
      </div>
      <div className="mt-4">
        {places.length > 0 &&
          places.map((place, index) => (
            <Link
              to={"/account/places/" + place._id}
              key={index}
              className="flex cursor-pointer gap-4 bg-gray-200 p-4 rounded-2xl">
              <div className="w-32 h-32 bg-gray-300 grow shrink-0">
                {place.photos.length > 0 && (
                  <img src={place.photos[0]} alt="" />
                )}
              </div>
              <div className="grow-0 shrink">
                <h2 className="text-xl">{place.title}</h2>
                <p className="text-sm mt-2">{place.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
