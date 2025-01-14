import React, { useState } from 'react'
import { FaLocationArrow } from "react-icons/fa6";

export default function MainContent() {
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setMessage(e.target.value)
  }
  return (
    <div className='flex flex-col justify-between items-center p-5 w-full bg-gray-400 text-white'>MainContent

                  {/* Input div */}
          <div className='w-full flex items-center gap-2'>
            <input 
            className='py-2 px-4 w-full font-semibold text-black'
            type="text" placeholder='Type message here...'
            value={message}
            onChange={handleChange}/>
            <FaLocationArrow size={40} className='cursor-pointer text-black transfrom rotate-45 tetx-xl'/>
          </div>

    </div>
  )
}
