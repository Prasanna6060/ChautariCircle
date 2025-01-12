import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice";
import { useNavigate } from "react-router";

export default function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const {email, password} = formData;

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
     const res = await axios.post("api/auth/login", {email, password})
      dispatch(setUser(res.data))
      navigate("/profile")
    } catch (error) {
      console.log(error)
    }
  };


  return (
    <div>
      <Header />
      <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full p-3 mt-4 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
