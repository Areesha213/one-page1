import React from 'react';
import img1 from '../assests/1.png';
// Corrected typo in 'assests'
import { IoIosArrowDown } from "react-icons/io";
import { FaStar , FaTrophy } from 'react-icons/fa'
import { IoDiamondOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

function Cards() {
    return (
        <div className='container mx-auto'>
            <div className="my-8">
                <div className="flex flex-col rounded-lg bg-white shadow-md dark:bg-neutral-700 md:max-w-10xl md:flex-row mx-auto my-8">
                    <div>
                        <div className='bg-orange-500 rounded-r-md text-center items-center flex justify-center p-3 w-15'>
                            <FaTrophy className='text-white ' />
                            <h2 className='text-white text-2xl'>Best choice</h2>
                        </div>
                        <img
                            className=" rounded-t-lg w-141 h-103  md:rounded-none md:rounded-l-lg"
                            src={img1}
                            alt="#"
                        />
                        <p className='mr-2 my-11 text-gray-500'>Builder 1</p>
                    </div>

                    <div className="flex flex-col justify-start p-6">
                        <p className="mb-2 text-xl text-start font-normal text-neutral-800 dark:text-neutral-50">
                            <span className='font-bold'>WixPro 72-Inch Responsive Website Builder</span>- Comprehensive <br /> Digital Platform Creation Tool, Streamlined Design Interface for <br /> Professional Websites and Online Stores (Black/Blue)
                        </p>
                        <h4 className='text-start font-medium'>Main highlights</h4>
                        <p className="mb-4 text-start p-3 text-neutral-600 dark:text-neutral-200">
                            [What You Get]: Receive the WixPro website builder suite, <br /> access to premium design templates, an extensive library of <br /> widgets and apps, and detailed step-by-step guides.
                        </p>
                        <div className="col-span-2 md:col-span-2 text-blue-600 flex items-center justify-center md:justify-start pt-8 md:pt-2">
                            <a href='#' className="  mr-2">show More</a>
                            <IoIosArrowDown className="text-blue-600" />
                        </div>
                    </div>
                    <div className='p-20'>
                        <div className='flex justify-center bg-bg1 flex-col'>
                            <h1 className='text-6xl'>9.8</h1>
                            <h1>Exceptional</h1>
                            <div className='flex p-6'><FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                            </div>
                        </div>

                        <button className="px-9 py-2 bg-blue-500 text-white  rounded-md shadow-md hover:bg-blue-600">
                           view
                        </button>
                    </div>
                </div>
                <div className="flex flex-col rounded-lg bg-white shadow-md dark:bg-neutral-700 md:max-w-10xl md:flex-row mx-auto my-8">
                    <div className='flex flex-col space-x-9 '>
                        <div className='bg-orange-500 rounded-r-md text-center items-center flex justify-center p-3 w-15'>
                            <IoDiamondOutline className='text-white text-4xl ' />
                            <h2 className='text-white text-2xl'>Best choice</h2>
                        </div>
                        <img
                            className=" rounded-t-lg w-141 h-103  md:rounded-none md:rounded-l-lg"
                            src={img1}
                            alt="#"
                        />
                        <p className='mr-2 my-11 text-gray-500'>Builder 1</p>
                    </div>

                    <div className="flex flex-col justify-start space-x-9 px-4">
                        <p className="mb-4 text-xl text-start font-normal text-neutral-800 dark:text-neutral-50">
                            <span className='font-bold'>SiteCraft 68-Inch Ultimate Web Design Studio</span>- Advanced Site  <br /> Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)
                        </p>
                        <h4 className='text-start font-medium'>Main highlights</h4>
                        <p className="mb-4 text-start p-3 text-neutral-600 dark:text-neutral-200">
                        [What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.
                        </p>
                        <div className="col-span-2 md:col-span-2 text-blue-600 flex items-center justify-center md:justify-start pt-8 md:pt-2">
                            <a href='#' className="  mr-2">show More</a>
                            <IoIosArrowDown className="text-blue-600" />
                        </div>
                    </div>
                    <div className='p-20'>
                        <div className='flex justify-center bg-bg1 flex-col'>
                            <h1 className='text-6xl'>9.8</h1>
                            <h1>Exceptional</h1>
                            <div className='flex p-6'><FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                            </div>
                        </div>

                        <button className="px-9 py-2 bg-blue-500 text-white  rounded-md shadow-md hover:bg-blue-600">
                           view
                        </button>
                    </div>
                </div>
                <div className="flex flex-col rounded-lg bg-white shadow-md dark:bg-neutral-700 md:max-w-10xl md:flex-row mx-auto my-8">
                    <div className='flex flex-col space-x-9 '>
                        
                        <img
                            className=" rounded-t-lg w-141 h-103  md:rounded-none md:rounded-l-lg"
                            src={img1}
                            alt="#"
                        />
                        <p className='mr-2 my-11 text-gray-500'>Builder 1</p>
                    </div>

                    <div className="flex flex-col justify-start space-x-9 px-4">
                        <p className="mb-4 text-xl text-start font-normal text-neutral-800 dark:text-neutral-50">
                            <span className='font-bold'>SiteCraft 68-Inch Ultimate Web Design Studio</span>- Advanced Site  <br /> Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)
                        </p>
                        <h4 className='text-start font-medium'>Main highlights</h4>
                        <p className="mb-2 text-xl text-start font-normal text-neutral-800 dark:text-neutral-50">
                            <span className='font-bold'>WixPro 72-Inch Responsive Website Builder</span>- Comprehensive <br /> Digital Platform Creation Tool, Streamlined Design Interface for <br /> Professional Websites and Online Stores (Black/Blue)
                        </p>
                        <div className="col-span-2 md:col-span-2 text-blue-600 flex items-center justify-center md:justify-start pt-8 md:pt-2">
                            <a href='#' className="  mr-2">show More</a>
                            <IoIosArrowDown className="text-blue-600" />
                        </div>
                    </div>
                    <div className='p-20'>
                        <div className='flex justify-center bg-bg1 flex-col'>
                            <h1 className='text-6xl'>9.8</h1>
                            <h1>Exceptional</h1>
                            <div className='flex p-6'><FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                            </div>
                        </div>

                        <button className="px-9 py-2 bg-blue-500 text-white  rounded-md shadow-md hover:bg-blue-600">
                           view
                        </button>
                    </div>
                </div>
                <div className="flex flex-col rounded-lg bg-white shadow-md dark:bg-neutral-700 md:max-w-10xl md:flex-row mx-auto my-8">
                    <div className='flex flex-col space-x-9 '>
                        
                        <img
                            className=" rounded-t-lg w-141 h-103  md:rounded-none md:rounded-l-lg"
                            src={img1}
                            alt="#"
                        />
                        <p className='mr-2 my-11 text-gray-500'>CDK</p>
                    </div>

                    <div className="flex flex-col justify-start space-x-9 px-4">
                        <p className="mb-4 text-xl text-start font-normal text-neutral-800 dark:text-neutral-50">
                            <span className='font-bold'>SiteCraft 68-Inch Ultimate Web Design Studio</span>- Advanced Site  <br /> Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)
                        </p>
                        <div className='flex justify-start space-x-5 rounded-md mb-3' > 
                            <span className='text-start font-normal bg-blue-300 p-1'>20% off</span></div>
                       
                        <h4 className='text-start font-medium'>Main highlights</h4>
                       <div className='bg-bg3 text-start flex flex-col items-start justify-start space-x-4'>
                        <p> <span className='bg-bg3/90 p-1 text-blue-700'>9.9</span>Building response</p>
                        <p> <span className='bg-bg3/90 p-1 text-blue-700'>8.9</span>Cool</p>
                        <p> <span className='bg-bg3/90 p-1 text-blue-700'>8.9</span>Docs</p>
                       
                       </div>
                        <p className='text-2xl text-start'>Why we love it</p>
                        <div className='flex flex-col justify-start items-start space-x-4'>
                            
                           <span className='flex space-x-9 items-center'>  <FaCheckCircle className='text-blue-600 ' />Documentation</span>
                           <span className='flex space-x-9 items-center'>  <FaCheckCircle className='text-blue-600 ' />Easy Use</span>
                           <span className='flex space-x-9 items-center'>  <FaCheckCircle className='text-blue-600 ' />Out of Box</span>
                           
                        </div>
                        <div className="col-span-2 md:col-span-2 text-blue-600 flex items-center justify-center md:justify-start pt-8 md:pt-2">
                            <a href='#' className="  mr-2">show More</a>
                            
                        </div>
                    </div>
                    <div className='p-20'>
                        <div className='flex justify-center  space-y-2 bg-bg1 flex-col'>
                            <h1 className='text-6xl'>9.1</h1>
                            <h1>very Good</h1>
                            <div className='flex p-6 '><FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500' />
                                <FaStar className='text-yellow-500 ' />
                            </div>
                        </div>

                        <button className="px-9 py-2 bg-blue-500 text-white  rounded-md shadow-md hover:bg-blue-600">
                           view
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
