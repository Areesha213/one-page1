import React, { useState } from 'react';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="container mx-auto">
      <div className='flex flex-col space-x-8 '>
        <h1 className="w-1006  text-start text-6xl py-9 font-inter font-normal text-gray-700">Best Website builders in the US</h1>
        <hr className="my-4" />
        <div className="flex space-x-5 justify-between items-start">
          <div className="flex items-start space-x-3 text-2xl text-gray-500">
            <CiCircleCheck />
            <p>Last Updated - Febuary 22, 2020</p>
            <IoIosInformationCircleOutline />
            <p>Advertising Disclosure</p>
          </div>
          <div className="relative inline-block">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-end space-x-1 bg-gray-200 text-gray-700 px-3 py-2 rounded-md focus:outline-none focus:bg-gray-300"
            >
              <p>Top Relevant</p>
              <IoIosArrowDown />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex space-x-9">
          <button className="border-solid text-2xl text-gray-600 bg-slate-300/50 p-3 rounded-md">Tools</button>
          <button className="border-solid text-2xl text-gray-600 bg-slate-300/50 p-3 rounded-md">AWS Builder</button>
          <button className="border-solid text-2xl text-gray-600 bg-slate-300/50 p-3 rounded-md">Start Build</button>
          <button className="border-solid text-2xl text-gray-600 bg-slate-300/50 p-3 rounded-md">Builder Supplies</button>
          <button className="border-solid text-2xl text-gray-600 bg-slate-300/50 p-3 rounded-md">Tooling</button>
          <button className="border-solid text-2xl text-gray-600 bg-slate-300/50 p-3 rounded-md">BlueHosting</button>
        </div>
        <hr className="my-4" />
        <nav className="text-gray-500 text-2xl space-x-9 flex" aria-label="breadcrumb">
          <ol className="flex">
            <li className="mr-1">
              <a href="#" className="text-gray-600 hover:text-blue-700">Home</a>
            </li>
            <li className="mr-1">{'>'}</li>
            <li className="mr-1">
              <a href="#" className="text-gray-600">Hosting for all</a>
            </li>
            <li className="mr-1">{'>'}</li>
            <li className="mr-1">
              <a href="#" className="text-gray-600">Hosting</a>
            </li>
            <li className="mr-1">{'>'}</li>
            <li className="mr-1">
              <a href="#" className="text-gray-600">Hosting6</a>
            </li>
            <li className="mr-1">{'>'}</li>
            <li className="mr-1">
              <a href="#" className="text-gray-600">Hosting5</a>
            </li>
          </ol>
        </nav>
        <hr className="my-4" />
      </div>
    </section>
  );
}

export default Header;
