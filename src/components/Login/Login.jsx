import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const registeredUser = JSON.parse(localStorage.getItem("user"));

    if (
      registeredUser &&
      user.email === registeredUser.email &&
      user.password === registeredUser.password
    ) {
      alert("Login Successful!");
      navigate("/liveexams");
    } else {
      setError("Invalid email or password");
    }
  };

  const isFormFilled = Object.values(user).every((value) => value.trim() !== "");

  return (
    <div className="flex items-center justify-center h-[91vh] bg-gradient-to-r from-blue-500 via-red-500 to-sky-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              name="email"
              required
              value={user.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              name="password"
              required
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
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?
          <Link to="/register" className="text-blue-500 font-semibold hover:underline">
            {" "}
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
