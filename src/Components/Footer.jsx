import React from 'react';
import { SiFacebook, SiTemporal } from "react-icons/si";


const Footer = () => {
    return (
        <footer className="bg-[#3CA2FA] text-white">
            <div className="container px-6 py-[23.7px] mx-auto">

                <div className="flex flex-col items-center text-center">

                    <p className='text-2xl font-black font-serif text-[#80EEB4] flex items-center gap-1' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">Twist<SiTemporal className='rotate-6' /></p>

                    <div className="flex flex-wrap justify-center mt-6 -mx-4">

                        <a href='https://www.youtube.com/@mdafsarr9098' target='_blank' className="mx-4 text-sm font-bold text-[#FF0000] hover:underline" >
                            Youtube
                        </a>
                        <a href='https://x.com/MDAFSARX' target='_blank' className="mx-4 text-sm font-bold text-[#000000] hover:underline">
                            Twitter
                        </a>

                        <a href='https://www.instagram.com' target='_blank' className="mx-4 text-sm font-bold text-[#F700C0] hover:underline">
                            Instagram
                        </a>
                       
                    </div>

                </div>

                <hr className="my-6 md:my-10 " />

                <div className="flex justify-center">
                    <p className="text-sm opacity-70">© Copyright 2024. All Rights Reserved.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
