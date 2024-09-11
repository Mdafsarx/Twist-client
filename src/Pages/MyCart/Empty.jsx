import React from 'react'
import img from "../../assets/empty.png"
import { Link } from 'react-router-dom'

export default function Empty() {
    return (
        <div>
            <div>
                <div className="flex items-center justify-center relative left-[80px] md:left-[200px] pt-4">
                    <div className='flex flex-col items-center'>
                        <img src={img} alt="empty" className='w-28 md:w-40'/>

                        <p className="mt-4 text-lg font-bold">You have not added anything </p>

                        <div className="flex items-center justify-center mt-6 gap-x-3">
                            <Link to={'/'}
                                className="flex items-center justify-center w-1/2 px-5 py-2 text-sm font-bold transition-colors duration-200 rounded-lg gap-x-2 border-0 text-white  bg-gradient-to-br from-[#80EEB4] to-[#3CA2FA] hover:text-black"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 rtl:rotate-180"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>

                                <span>Home</span>
                            </Link>

                            <Link to={'/Products'}
                                className="w-1/2 px-5 py-2 text-sm font-bold transition-colors duration-200 rounded-lg gap-x-2 border-0 text-white bg-gradient-to-br from-[#80EEB4] to-[#3CA2FA] hover:text-black"
                            >
                                Product's
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
