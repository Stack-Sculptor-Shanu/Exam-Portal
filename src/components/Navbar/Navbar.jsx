import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav id='navigationbar' className="bg-black text-white p-4 flex justify-between items-center">
        {/* Logo + Name */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-white rounded-full flex justify-center items-center">
              <span className="text-blue-600 text-xl font-bold bg-gradient-to-r from-blue-500 via-red-500 to-sky-500 text-transparent bg-clip-text">
                🧠
              </span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-red-500 to-sky-500 text-transparent bg-clip-text">
              AptiNest
            </span>
          </Link>
        </div>

        {/* Login Button */}
        <Link to="/login" className="bg-green-300 bg-gradient-to-r from-blue-500 via-red-500 to-sky-500 text-transparent bg-clip-text font-thin px-4 py-2 rounded-md">
          Login
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
