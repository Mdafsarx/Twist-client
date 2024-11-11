import * as React from 'react';
import { SiTemporal } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import '../Components/Button/button2.css'
import { IoMdCart } from "react-icons/io";
import { AuthContext } from '../Auth/AuthProvider';
// import '../Components/Button/button3.css'

export default function Navbar2() {

    const { User, Logout, loading, totalCart, totalCartLoading } = React.useContext(AuthContext);
    const pages =
        <>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'md:btn md:btn-sm md:btn-outline text-[#80EEB4] md:text-[#ffffff] md:border-[#80EEB4] md:border-2' : 'hover:text-[#80EEB4] hover:underline'} >Home</NavLink>

            <NavLink to={'/Products'} className={({ isActive }) => isActive ? 'md:btn md:btn-sm md:btn-outline text-[#80EEB4] md:text-[#ffffff] md:border-[#80EEB4] md:border-2' : 'hover:text-[#80EEB4] hover:underline'}>Product's</NavLink>

            <NavLink to={'/Contact'} className={({ isActive }) => isActive ? 'md:btn md:btn-sm md:btn-outline text-[#80EEB4] md:text-[#ffffff] md:border-[#80EEB4] md:border-2' : 'hover:text-[#80EEB4] hover:underline'}>contact</NavLink>
        </>




    return (
        <nav className="fixed top-0 w-full z-50 hidden md:flex items-center  *:text-white ">
            {/* part-1 */}
            <div className="md:w-[59%] h-[60px] bg-[#3CA2FA] px-4 flex items-center justify-between ">

                <p className='text-xl md:text-2xl font-black text-[#80EEB4] flex items-center gap-1 pl-2' data-aos="fade-down" data-aos-duration="800" data-aos-delay="300">Twist<SiTemporal className='animate-spin [animation-duration:1.5s]' /></p>

                {/* nav link */}
                <div className="flex font-bold ">
                    <ul className="flex items-center gap-7">
                        {pages}
                    </ul>
                </div>

            </div>

            {/* part-2 */}
            <div className="md:w-[41%] h-[60px] bg-[#80EEB4] flex items-center justify-end gap-x-5 pr-6">

                {
                    loading
                        ? <ColorRing visible={true} color="#3CA2FA" ariaLabel="color-ring-loading" wrapperClass="color-ring-wrapper" colors={['#3CA2FA', '#80EEB4', '#3CA2FA', '#80EEB4', '#3CA2FA']} data-aos="fade-left" data-aos-duration="800" data-aos-delay="300" />
                        : <>
                            {/* cart badge */}
                            <NavLink to={'/Cart'}>
                                <Stack>
                                    <Badge
                                        badgeContent={ totalCart?.length || '0'}
                                        color="primary"
                                        sx={{
                                            '& .MuiBadge-badge': {
                                                backgroundColor: '#ffffff',
                                                color: '#3CA2FA'
                                            }
                                        }}>
                                        <IoMdCart className='text-3xl text-[#3CA2FA] font-bold' />
                                    </Badge>
                                </Stack>
                            </NavLink >

                            {/* login */}
                            <Link to={'/Login'} className="btn text-white bg-gradient-to-l from-[#3CA2FA] to-[#3CA2FA] border-2 border-[#3CA2FA] hover:bg-gradient-to-r hover:border-[#3CA2FA]">Login</Link>
                        </>
                }



            </div>
        </nav>
    )
}
