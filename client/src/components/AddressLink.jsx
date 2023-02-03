import IconsReactjs from "icons-reactjs";

export default function AddressLink({ children }) {
  return (
    <a
      target="_blank"
      href={"https://maps.google.com/?q=" + children}
      className="flex gap-1 mb-3 font-semibold underline">
      <IconsReactjs icon={"location-6"} fontSize={"1.1rem"} color={"#000"} />
      {children}
    </a>
  );
}
