import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className='bg-gray-900'>
            <Navbar />
            <div className='min-h-[61.5vh]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;