import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-10 px-5 md:px-20 min-h-[200px] flex flex-col justify-between">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-red-500 to-sky-500 text-transparent bg-clip-text">AptiNest</h2>
       
      </div>
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        © {new Date().getFullYear()} AptiNest. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer