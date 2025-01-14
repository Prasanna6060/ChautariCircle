import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import { useSelector } from "react-redux";
import io from "socket.io-client"


export default function Profile() {
 
  return (
    <div className='w-full flex flex-col sm:flex-row  '> 

            <div className='w-1/4  h-screen'>
               <Sidebar />
              </div>
              {/* <p>{JSON.stringify(socket.connected)}</p> */}
             <MainContent/>
      
        </div>
  )
}
