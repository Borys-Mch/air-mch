import IconsReactjs from "icons-reactjs";

export default function Perks({ selected, onChange }) {
  return (
    <>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" />
        <IconsReactjs icon={"wifi"} fontSize={"1.2rem"} color={"#000"} />
        <span>WIFI</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" />
        <IconsReactjs icon={"cab"} fontSize={"1.2rem"} color={"#000"} />
        <span>Free parking spot</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" />
        <IconsReactjs icon={"food-1"} fontSize={"1.2rem"} color={"#000"} />
        <span>Free denner</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" />
        <IconsReactjs icon={"tv"} fontSize={"1.2rem"} color={"#000"} />
        <span>TV</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" />
        <IconsReactjs icon={"guidedog"} fontSize={"1.2rem"} color={"#000"} />
        <span>Pets</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input type="checkbox" />
        <IconsReactjs icon={"key-outline"} fontSize={"1.2rem"} color={"#000"} />
        <span>Private enterance</span>
      </label>
    </>
  );
}
