import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../components/UserContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { setUser } = useContext(UserContext);

  const handlerLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/login", { email, password });
      setUser(data);
      setRedirect(true);
    } catch (err) {
      alert("Login failed");
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handlerLoginSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet?
            <Link className="underline text-black" to={"/register"}>
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
