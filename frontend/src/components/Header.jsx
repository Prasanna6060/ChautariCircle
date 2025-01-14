import React from "react";
import logo from "../assets/chatbot.png";
import { Link } from 'react-router';

export default function Header() {
  return (
    <header className="px-4 py-6 flex flex-col justify-center items-center bg-slate-50 border-b-2">
      <Link to='/'><div className="flex items-center m-2 gap-x-2">
        <img src={logo} width={40} height={40} />
        <h1 className="text-green-800 text-2xl font-bold">
          Chautari <span className="text-green-800">Circle</span>
        </h1>
      </div>
      </Link>
      <p className="text-xl font-semibold">Nepal's own  chatting platform</p>
    </header>
  );
}
