import React, { useState } from 'react'
import { FaLocationArrow } from "react-icons/fa6";

export default function MainContent() {
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    Socket.emit("send-message", message);
  }
  return (
    <div className='flex flex-col justify-between items-center p-5 w-full bg-[#E4DAC1]  font-Aleo '>MainContent
        <p>{message}</p>

                  {/* Input div */}
          <div className='w-full flex items-center gap-2'>
            <input 
            className='py-2 px-4 w-full font-semibold text-black'
            type="text" placeholder='Type message here...'
            value={message}
            onChange={handleChange}
            />
            <button type='submit' onSubmit={handleSubmit}>
            <FaLocationArrow size={40} className='cursor-pointer text-black transfrom rotate-45 tetx-xl'/>
            </button>
          </div>

    </div>
  )
}
