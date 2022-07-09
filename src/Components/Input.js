import React from 'react'
import { UilSearch,UilLocationPoint  } from '@iconscout/react-unicons'

function Input() {
  return (
    <div className="flex flex-row justify-center my-6">
        <div  className="flex flex-row w-3/4 justify-center items-center space-x-4">
            <input type="text" placeholder="city" className="text-xl font-light capitalize placeholder:lowercase outline-none p-2"/>
            <UilSearch className="text-white cursor-pointer transition ease-out hover:scale-125" />
            <UilLocationPoint className="text-white cursor-pointer transition ease-out hover:scale-125"/>
        </div>
        <div className="flex flex-row w-1/4 justify-center items-center space-x-4">
          <button className="text-white text-xl ">°C</button>
          <p className="text-white text-x mx-1">|</p>
          <button className="text-white text-xl ">°F</button>

        </div>
    </div>
  )
}

export default Input