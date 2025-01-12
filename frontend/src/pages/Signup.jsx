import React, { useState } from 'react';
import {Link} from 'react-router'
import axios from 'axios';

export default function Signup() {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const {email, username, password } = formData;
    

    const handleSubmit = async(e) => {
        e.preventDefault();
      
        try {
            await axios.get("/api/auth/register", {email, username, password})
        } catch (error) {
            
        }
    };

    return (
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
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
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
                    Sign Up
                </button>
                <span className='mt-10 text-center '>Have an acocunt? <Link to='/sign-in'>Login</Link> </span>
            </form>
          
        </div>
    );
}
