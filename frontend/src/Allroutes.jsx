import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Signin from './pages/Signin'
import {io} from "socket.io-client"
import Profile from './components/Profile'
import ProtectedRoute from './pages/ProtectedRoute'
import { useSelector } from 'react-redux'

export default function Allroutes() {
  const user = useSelector((state) => state.auth?.user?.user)
  console.log(user)
  
  useEffect(()=>{
   const socket = io(import.meta.env.VITE_SOCKET_URL)
   console.log(socket)

   return () => {
    socket.disconnect()
   }
  }, [user])
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-in' element={<Signin/>} /> 
        <Route element={<ProtectedRoute/>}>
        <Route path='/profile' element={<Profile/>} />
        </Route>
    </Routes> 

  )
}
