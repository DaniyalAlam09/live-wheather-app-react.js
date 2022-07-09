import React from "react";
import { UilSun } from "@iconscout/react-unicons";

function Forecast({time}) {
  return (
    <div>
      <div className="flex flex-row justify-start mt-6">
        <p className="text-white font-medium uppercase">{time}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4.30</p>
          <UilSun className="w-12 my1 text-orange-500 text-2xl" />
          <p className="font-medium">22</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4.30</p>
          <UilSun className="w-12 my1 text-orange-500 text-2xl" />
          <p className="font-medium">22</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4.30</p>
          <UilSun className="w-12 my1 text-orange-500 text-2xl" />
          <p className="font-medium">22</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4.30</p>
          <UilSun className="w-12 my1 text-orange-500 text-2xl" />
          <p className="font-medium">22</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
