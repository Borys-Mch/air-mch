export default function BookingWidget({ place }) {
  return (
    <div className="bg-white p-4 border shadow rounded-2xl">
      <div>
        Price: <span className="font-bold">${place.price}</span> / per night
      </div>
      <div className="my-4 border border-gray-400 rounded-xl">
        <div className="grid grid-cols-2 border-b border-gray-400">
          <div className="p-2 border-r border-gray-400">
            <label>Check in </label>
            <br />
            <input type="date" />
          </div>
          <div className="p-2">
            <label>Check Out </label>
            <br />
            <input type="date" />
          </div>
        </div>
        <div className="p-2">
          <label>Guests </label>
          <br />
          <input type="number" />
        </div>
      </div>
      <button className="primary">Book this place</button>
    </div>
  );
}
