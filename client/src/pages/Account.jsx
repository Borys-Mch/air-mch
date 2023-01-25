import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../components/UserContext";

export default function Account() {
  const { ready, user } = useContext(UserContext);

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }

  return <div>Account page for {user?.name}</div>;
}
