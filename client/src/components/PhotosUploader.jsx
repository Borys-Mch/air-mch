import { useState } from "react";
import axios from "axios";
import IconsReactjs from "icons-reactjs";

export default function PhotosUploader({ addedPhotos, onChange }) {
  const [photoLink, setPhotoLink] = useState("");

  const addPhotoByLink = async (e) => {
    e.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    onChange((prev) => {
      return [...prev, filename];
    });
    setPhotoLink("");
  };

  const uploadPhoto = (e) => {
    const files = e.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }
    axios
      .post("/upload", data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((response) => {
        const { data: filenames } = response;
        onChange((prev) => {
          return [...prev, ...filenames];
        });
      });
  };

  return (
    <>
      <div className="flex gap-2">
        <input
          type="text"
          value={photoLink}
          onChange={(e) => setPhotoLink(e.target.value)}
          placeholder={"Add using a link ...jpg"}
        />
        <button
          onClick={addPhotoByLink}
          className="bg-gray-200 px-4 rounded-2xl">
          Add&nbsp;photo
        </button>
      </div>
      <div className="mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {addedPhotos.length > 0 &&
          addedPhotos.map((link) => (
            <div key={link} className="h-32 flex">
              <img
                className="rounded-2xl w-full object-cover"
                src={"http://localhost:8000/uploads/" + link}
                alt=""
              />
            </div>
          ))}
        <label className="flex h-32 gap-1 justify-center items-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600 cursor-pointer">
          <input
            type="file"
            multiple
            onChange={uploadPhoto}
            className="hidden"
          />
          <IconsReactjs
            icon={"upload-cloud-outline"}
            fontSize={"1.8rem"}
            color={"#4b5563"}
          />
          Upload
        </label>
      </div>
    </>
  );
}
