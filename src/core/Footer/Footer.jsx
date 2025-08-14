import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { GrLocation } from 'react-icons/gr'
import { IoIosMail } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer className="bg-blue-900  text-white py-12 pb-0">
                <div className="container mx-auto px-8 text-center">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 text-start">


                        <div>
                            {/* <h2 className="text-xl lg:text-2xl font-bold tracking-wide text-blue-600 px-2 bg-white w-fit rounded-md p-1">
                                ICASMET 2025
                            </h2> */}
                            <Link to="/" className="flex items-center space-x-3">
                                <img alt="ICASMET 2025 Logo" className=" w-55 h-13" src="/assets/images/logo.png" />
                            </Link>
                            <p className="text-gray-200 mt-3 text-xl">
                                International Conference on Applied Science, Multidisciplinary Engineering & Technology
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xl lg:text-2xl font-semibold text-white">General</h3>
                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px]' />
                                <Link to="/about" className="text-gray-200 hover:text-white transition-all duration-300 block text-lg">About the Conference</Link>
                            </li>

                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px]' />
                                <Link to="/scope" className="text-gray-200 hover:text-white transition-all duration-300 block text-lg">Scope of Conference</Link>
                            </li>
                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px]' />
                                <Link to="/organizingCommittee" className="text-gray-200 hover:text-white transition-all duration-300 block text-lg">Organizing Committee</Link>
                            </li>
                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px]' />
                                <Link to="/editorial" className="text-gray-200 hover:text-white transition-all duration-300 block text-lg">Editorial Board</Link>
                            </li>
                        </div>


                        <div className="space-y-3">
                            <h3 className="text-xl lg:text-2xl font-semibold text-white">Conference Information</h3>
                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px] flex-shrink-0' />
                                <Link to="/conferenceTracks" className="text-gray-200 hover:text-white transition-all duration-300 block text-lg">Conference Tracks</Link>
                            </li>
                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px] flex-shrink-0' />
                                <Link to="/important-dates" className="text-gray-200 hover:text-white transition-all duration-300 block text-lg">Key Dates</Link>
                            </li>
                            <li className='flex items-center gap-2'>
                                <GoDotFill className='w-[10px] flex-shrink-0' />
                                <Link to="/paper-submission" className="text-gray-200 hover:text-white transition-all duration-300 block text-lg">Paper Submission</Link>
                            </li>
                        </div>


                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white">Get in Touch</h3>
                            <div className="flex items-center gap-2 mt-2">
                                <IoIosMail className='flex-shrink-0'/>
                                <p className="text-gray-200  wrap-anywhere text-lg">icasmet.conference@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <GrLocation className='flex-shrink-0'/>
                                <p className="text-gray-200 text-lg">Kuala Lumpur, Malaysia</p>
                            </div>

                            {/* <p className="text-gray-200 mt-2 text-lg">+91 123 456 7890</p> */}
                        </div>
                    </div>


                    <div className="border-t border-gray-600 mt-12 py-6 text-center text-gray-100 ">
                        <a href="/" className="hover:text-white transition-all duration-300">
                            © 2025 ICASMET. All Rights Reserved.
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}
