import React from 'react'
import { formatLocalTime } from '../Services/Api'

function CityTIme({weather:{dt,timezone,name,country}}) {
  return (
    <div className="justify-center items-center">
        <div className="flex text-white justify-center items-center font-extralight">
            <p>{formatLocalTime(dt,timezone)}</p>
        </div>
        <div className="flex text-white justify-center items-center my-3 font-medium">
            <p>{`${name}`},{`${country}`}</p>
        </div>
    </div>
  )
}

export default CityTIme