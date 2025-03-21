import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize navigate function

  // Input handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // Form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    
    // Show alert popup
    alert("Registration Successful!");

    // Navigate to login page
    navigate("/login");
  };
  const isFormFilled = Object.values(user).every((value) => value.trim() !== "");
  return (
    <div className="flex items-center justify-center h-[91vh] bg-gradient-to-r from-blue-500 via-red-500 to-sky-500 ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800">Register</h2>

        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your full name"
              value={user.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              value={user.password}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            disabled={!isFormFilled}
            className={`w-full p-2 font-bold text-white py-2 mt-6 rounded-md transition duration-200 ${
              isFormFilled ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?
          <Link to="/login" className="text-blue-500 font-semibold hover:underline"> Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;