import IconsReactjs from "icons-reactjs";

export default function Perks({ selected, onChange }) {
  const handleCbClick = (e) => {
    const { checked, name } = e.target;
    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange([...selected.filter((selectedName) => selectedName !== name)]);
    }
  };

  return (
    <>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("wifi")}
          name="wifi"
          onChange={handleCbClick}
        />
        <IconsReactjs icon={"wifi"} fontSize={"1.2rem"} color={"#000"} />
        <span>WIFI</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("parking")}
          name="parking"
          onChange={handleCbClick}
        />
        <IconsReactjs icon={"cab"} fontSize={"1.2rem"} color={"#000"} />
        <span>Free parking spot</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("denner")}
          name="denner"
          onChange={handleCbClick}
        />
        <IconsReactjs icon={"food-1"} fontSize={"1.2rem"} color={"#000"} />
        <span>Free denner</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("tv")}
          name="tv"
          onChange={handleCbClick}
        />
        <IconsReactjs icon={"tv"} fontSize={"1.2rem"} color={"#000"} />
        <span>TV</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("pets")}
          name="pets"
          onChange={handleCbClick}
        />
        <IconsReactjs icon={"guidedog"} fontSize={"1.2rem"} color={"#000"} />
        <span>Pets</span>
      </label>
      <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("enterence")}
          name="enterence"
          onChange={handleCbClick}
        />
        <IconsReactjs icon={"key-outline"} fontSize={"1.2rem"} color={"#000"} />
        <span>Private enterance</span>
      </label>
    </>
  );
}
