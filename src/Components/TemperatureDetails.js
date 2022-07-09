import React from "react";
import {
  UilSun,
  UilWind,
  UilTear,
  UilTemperaturePlus,
} from "@iconscout/react-unicons";

function TemperatureDetails() {
  return (
    <div>
      <div className="flex flex-row m-4 text-white">
        <div className="flex w-1/4">
          <UilSun size={50} />
        </div>
        <div className="flex w-1/4 text-2xl ">32°</div>
        <div className="flex flex-col w-1/2 justify-center items-center font-light text-sm">
          <div className="flex flex-row">
            <UilTear size={20} />
            <p>Humiduty</p>
            <span className="font-bold ml-1  my-1 ">40%</span>
          </div>
          <div className="flex flex-row">
            <UilWind size={20} />
            <p>Wind speed</p>
            <span className="font-bold ml-1  my-1">94km/h</span>
          </div>
          <div className="flex flex-row">
            <UilTemperaturePlus size={20} />
            <p>Frozen shadow</p>
            <span className="font-bold ml-1  my-1">32°</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row my-1 text-white justify-center item-center space-x-2 text-xs py-3">
        <UilSun />
        <p>Rise: <span className="font-md ml-1">4:30AM</span></p>
        <p>|</p>
        <UilSun />
        <p>Rise: <span className="font-md ml-1">4:30AM</span></p>
        <p>|</p>
        <UilSun />
        <p>Rise: <span className="font-md ml-1">4:30AM</span></p>
       
      </div>
    </div>
  );
}

export default TemperatureDetails;
