import { Link, useParams } from "react-router-dom";
import IconsReactjs from "icons-reactjs";

export default function Places() {
  const { action } = useParams();

  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            className="inline-flex gap-1 bg-primary text-white py2 px-6 rounded-full"
            to={"/account/places/new"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Ad new place
          </Link>
        </div>
      )}
      {action === "new" && (
        <div>
          <form>
            <h2 className="text-2xl mt-4">Title</h2>
            <p className="text-gray-500 text-sm">
              Title for your place. Should be short and catchy as in
              advertisment
            </p>
            <input
              type="text"
              placeholder="Title, for example:  My lovely apt"
            />

            <h2 className="text-2xl mt-4">Address</h2>
            <p className="text-gray-500 text-sm">Address to this place</p>
            <input type="text" placeholder="Address" />

            <h2 className="text-2xl mt-4">Photos</h2>
            <p className="text-gray-500 text-sm">More = better</p>
            <div className="flex gap-2">
              <input type="text" placeholder={"Add using a link ...jpg"} />
              <button className="bg-gray-200 px-4 rounded-2xl">
                Add&nbsp;photo
              </button>
            </div>
            <div className="mt-3 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <button className="flex gap-1 justify-center border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
                <IconsReactjs
                  icon={"upload-cloud-outline"}
                  fontSize={"1.8rem"}
                  color={"#4b5563"}
                />
                Upload
              </button>
            </div>

            <h2 className="text-2xl mt-4">Description</h2>
            <p className="text-gray-500 text-sm">Description of the place</p>
            <textarea />

            <h2 className="text-2xl mt-4">Perks</h2>
            <p className="text-gray-500 text-sm">
              Select all the perks of your place
            </p>
            <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <IconsReactjs
                  icon={"wifi"}
                  fontSize={"1.2rem"}
                  color={"#000"}
                />
                <span>WIFI</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <IconsReactjs icon={"cab"} fontSize={"1.2rem"} color={"#000"} />
                <span>Free parking spot</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <IconsReactjs
                  icon={"food-1"}
                  fontSize={"1.2rem"}
                  color={"#000"}
                />
                <span>Free denner</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <IconsReactjs icon={"tv"} fontSize={"1.2rem"} color={"#000"} />
                <span>TV</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <IconsReactjs
                  icon={"guidedog"}
                  fontSize={"1.2rem"}
                  color={"#000"}
                />
                <span>Pets</span>
              </label>
              <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
                <input type="checkbox" />
                <IconsReactjs
                  icon={"key-outline"}
                  fontSize={"1.2rem"}
                  color={"#000"}
                />
                <span>Private enterance</span>
              </label>
            </div>

            <h2 className="text-2xl mt-4">Extra info</h2>
            <p className="text-gray-500 text-sm">House rules, etc</p>
            <textarea />

            <h2 className="text-2xl mt-4">Check in&out time, max guests</h2>
            <p className="text-gray-500 text-sm">
              Add check in and out time, remember to have some time window for
              cleaning the room between guests
            </p>
            <div className="grid gap-2 sm:grid-cols-3">
              <div>
                <h3 className="mt-2 -mb-1">Check in time</h3>
                <input type="text" placeholder="13:00" />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Check out time</h3>
                <input type="text" placeholder="10:00" />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Max number of guests</h3>
                <input type="text" placeholder="3" />
              </div>
            </div>
            <div className="flex justify-center">
              <button className="primary my-4 max-w-md">Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
