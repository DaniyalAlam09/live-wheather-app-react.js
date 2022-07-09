import React from "react";

function Top({ setQuery }) {
  const cities = [
    { id: 1, name: "Sheikhupura" },
    { id: 2, name: "Karachi" },
    { id: 3, name: "Islamabad" },
    { id: 4, name: "Murree" },
  ];

  return (
    <div className="flex justify-around items-center my-5">
      {cities.map((city) => (
        <button
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
}

export default Top;
