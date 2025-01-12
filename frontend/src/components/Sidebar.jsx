import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice";
import axios from "axios";

export default function Sidebar() {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleLogout = () => {
        try {
            axios.post('api/auth/logout')
            dispatch(setUser(null))
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="p-2 flex flex-col justify-between h-screen items-center">
      <div className="flex gap-2 items-center relative">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search..."
          className="p-1 w-full text-center rounded-lg"
        />
      </div>

       <button  onClick={handleLogout}   
      className="text-l font-semibold bg-slate-700 px-2 py-2 rounded-lg text-white">
        Logout
      </button>
    </div>
  );
}
