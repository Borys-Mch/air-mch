import { useParams } from "react-router-dom";

export default function Booking() {
  const { id } = useParams();
  return (
    <div>
      <h2>Booking: {id}</h2>
    </div>
  );
}
