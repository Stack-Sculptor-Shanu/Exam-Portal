import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

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

        {/* Login Button with Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-green-300 bg-gradient-to-r from-blue-500 via-red-500 to-sky-500 text-transparent bg-clip-text font-thin px-4 py-2 rounded-md"
          >
            Login
          </button>

          {/* Dropdown Menu */}
          {isDropdownVisible && (
            <div className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-md w-40">
              <Link
                to="/AdminLogin"
                className="block px-4 py-2 text-lg hover:bg-gray-200 rounded-t-md"
                onClick={() => setIsDropdownVisible(false)} // Hide dropdown after selecting option
              >
                Admin
              </Link>
              <Link
                to="/student"
                className="block px-4 py-2 text-lg hover:bg-gray-200 rounded-b-md"
                onClick={() => setIsDropdownVisible(false)} // Hide dropdown after selecting option
              >
                Student
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
