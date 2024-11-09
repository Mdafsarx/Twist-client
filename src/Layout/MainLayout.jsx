import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Grid } from 'react-loader-spinner';
import { SiTemporal } from 'react-icons/si';
import Navbar2 from '../Components/Navbar2';

const MainLayout = () => {
    const [spinner, setSpinner] = useState(true)

    setTimeout(() => {
        setSpinner(false)
    }, 3100)


    return (
        <div className='bg-gray-950 overflow-hidden'>
            {
                spinner
                    ? <div className="flex flex-col items-center justify-center min-h-screen gap-3">
                        <Grid visible={true} height="80" width="80" color="#3CA2FA" ariaLabel="grid-loading" radius="12.5" wrapperStyle={{}} wrapperClass="grid-wrapper" />
                        <p className='text-xl font-black text-[#80EEB4] flex items-center gap-1' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">Twist<SiTemporal className='animate-spin' /></p>
                    </div>
                    :
                    <div>
                        <Navbar />
                        <Navbar2/>
                        <div className='min-h-[61.5vh]'>
                            <Outlet />
                        </div>
                        <Footer />
                    </div>
            }
        </div>
    );
};

export default MainLayout;