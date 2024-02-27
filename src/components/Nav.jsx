import React from 'react'
import { FaSearch } from "react-icons/fa";


function Nav() {
  return (
    <>
          <nav className="bg-gray-800 p-5">
      <div className="container mx-auto flex justify-center items-center">
       
        <div className="flex items-center space-x-9">
        <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="px-10 py-1 rounded-md bg-white text-black focus:outline-none focus:bg-gray-100"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <FaSearch className="text-gray-500" />
      </div>
    </div>
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="text-white/50 hover:text-white">Catagories</a>
            </li>
            <li>
              <a href="#" className="text-white/50 hover:text-white">Website Builders</a>
            </li>
            <li>
              <a href="#" className="text-white/50 hover:text-white">Today's deals</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
   
  )
}

export default Nav