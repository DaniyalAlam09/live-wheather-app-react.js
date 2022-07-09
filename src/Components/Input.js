import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { useState } from "react";


function Input({setQuery, unit, setUnit}) {
  const [city, setCity] = useState("");
  const searchCLick =()=>{
    if(city!==""){
      setQuery({q:city})
    }
  }
  const currentLocation=()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        let lat =position.coords.latitude;
        let lon =position.coords.longitude;

        setQuery({lat,lon});
      })
    }
  }
  const unitChange=(e)=>{
    const selected = e.currentTarget.name;
    if(unit !== selected) {
      setUnit(selected)
    }

  }
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 justify-center items-center space-x-4">
        <input
        value={city}
        onChange={(e)=>{
          setCity(e.currentTarget.value)
        }}
          type="text"
          placeholder="city"
          className="text-xl font-light capitalize placeholder:lowercase outline-none p-2"
        />
        <UilSearch onClick={searchCLick} className="text-white cursor-pointer transition ease-out hover:scale-125" />
        <UilLocationPoint onClick={currentLocation} className="text-white cursor-pointer transition ease-out hover:scale-125" />
      </div>
      <div className="flex flex-row w-1/4 justify-center items-center space-x-4">
        <button onClick={unitChange} name="metric" className="text-white text-xl ">°C</button>
        <p className="text-white text-x mx-1">|</p>
        <button onClick={unitChange} name="imperial" className="text-white text-xl ">°F</button>
      </div>
    </div>
  );
}

export default Input;
