import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import { io } from "socket.io-client";
import Profile from "./components/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { setOnlineUser } from "./redux/authSlice";

export default function Allroutes() {
  const userId = useSelector((state) => state.auth?.user?.user._id);
  const dispatch = useDispatch();

  useEffect(() => {
    const newSocket = io(import.meta.env.VITE_SOCKET_URL, {
      query: {userId}
    });
                
       newSocket.on("onlineUsers", (data) => {
        dispatch(setOnlineUser(data))
        console.log(data);
       })

    if (userId === undefined || userId === null) {
      newSocket.disconnect();
    }

    return () => {
      newSocket.disconnect("disconnection");
    };
  }, [userId]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}
