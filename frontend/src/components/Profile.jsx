import React from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'

export default function Profile() {
  return (
    <div className='w-full flex flex-col sm:flex-row bg-slate-200  '> 

            <div className='w-1/4  h-screen'>
               <Sidebar />
              </div>
             <MainContent/>
      
        </div>
  )
}
