import { Link } from "react-router-dom";
import IconsReactjs from "icons-reactjs";
import AccountNav from "../components/AccountNav";

export default function Places() {
  return (
    <div>
      <AccountNav />
      <div className="text-center">
        List of all added places
        <br />
        <Link
          className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
          to={"/account/places/new"}>
          <IconsReactjs icon={"plus"} fontSize={"1rem"} color={"#FFF"} />
          Ad new place
        </Link>
      </div>
    </div>
  );
}
