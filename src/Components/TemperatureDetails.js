import React from "react";
import {
  UilSun,
  UilWind,
  UilTear,
  UilTemperaturePlus,
} from "@iconscout/react-unicons";
import {iconUrl} from "../Services/Api"
import {formatLocalTime} from "../Services/Api"


function TemperatureDetails({
  weather: {
    details,
    icon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    speed,
    country,
    sunrise,
    sunset,
    timezone
  },
}) {
  return (
    <div>
      <div className="flex justify-center items-center text-cyan-300 text-2xl">
        {`${details}`}
        </div>
      <div className="flex flex-row m-4 text-white">
        
        <div className="flex w-1/4 ">
        <img src={iconUrl(icon)} alt="" className="w-20 " />
        </div>
        <div className="flex w-1/4 text-2xl justify-center items-center ">{`${temp.toFixed()}°`}</div>
        <div className="flex flex-col w-1/2 justify-center items-center font-light text-sm">
          <div className="flex flex-row">
            <UilTear size={20} />
            <p>Real Feel: </p>
            <span className="font-bold ml-1 ">{`${feels_like.toFixed()}`}</span>
          </div>
          <div className="flex flex-row">
            <UilWind size={20} />
            <p>Humidity:</p>
            <span className="font-bold ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex flex-row">
            <UilTemperaturePlus size={20} />
            <p>Wind:</p>
            <span className="font-bold ml-1  my-1">{`${speed.toFixed()}Km/h`}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row my-1 text-white justify-center item-center space-x-2 text-xs py-3">
        <UilSun />
        <p>
          Rise: <span className="font-md ml-1">{formatLocalTime(sunrise, timezone, "hh:mm a")}</span>
        </p>
        <p>|</p>
        <UilSun />
        <p>
          Sunset: <span className="font-md ml-1">{formatLocalTime(sunset, timezone, "hh:mm a")}</span>
        </p>
        <p>|</p>
        <UilSun />
        <p>
          High: <span className="font-md ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p>|</p>
        <UilSun />
        <p>
          Low: <span className="font-md ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureDetails;
