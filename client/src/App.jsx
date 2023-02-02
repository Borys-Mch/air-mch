import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./components/UserContext";
import Layout from "./Layout";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Places from "./pages/Places";
import PlacesForm from "./pages/PlacesForm";
import SinglePlace from "./pages/SinglePlace";
import Bookings from "./pages/Bookings";
import Booking from "./pages/Booking";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Profile />} />
          <Route path="/account/places" element={<Places />} />
          <Route path="/account/places/new" element={<PlacesForm />} />
          <Route path="/account/places/:id" element={<PlacesForm />} />
          <Route path="/place/:id" element={<SinglePlace />} />
          <Route path="/account/bookings" element={<Bookings />} />
          <Route path="/account/bookings/:id" element={<Booking />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
