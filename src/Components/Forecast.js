import React from "react";
import { UilSun } from "@iconscout/react-unicons";

function Forecast({ time, items }) {
  return (
    <div>
      <div className="flex flex-row justify-start mt-6">
        <p className="text-white font-medium uppercase">{time}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        {items.map((items) => (
          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">{items.title}</p>
            <UilSun className="w-12 my1 text-orange-500 text-2xl" />
            <p className="font-medium">{`${items.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
