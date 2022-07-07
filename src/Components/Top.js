import React from "react";

function Top() {
  const cities = [
    { id: 1, name: "Lahore" },
    { id: 2, name: "Karachi" },
    { id: 3, name: "Islamabad" },
    { id: 4, name: "Murree" },
  ];

  return (
    <div className="flex justify-around items-center my-5">
      {cities.map((city) => (
        <button className="text-white text-lg font-medium" key={city.id}>
          {city.name}
        </button>
    ))}
    </div>
  );
}

export default Top;
