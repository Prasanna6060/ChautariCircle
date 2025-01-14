import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import { io } from "socket.io-client";
import Profile from "./components/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";
import { useSelector } from "react-redux";

export default function Allroutes() {
  const [socket, setSocket] = useState(null);
  const userId = useSelector((state) => state.auth?.user?.user._id);

  useEffect(() => {
    const newSocket = io(import.meta.env.VITE_SOCKET_URL, {
      query: {userId}
    });
       setSocket(newSocket)
                
       newSocket.on("onlineUsers", (data) => {
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
