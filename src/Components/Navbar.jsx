import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { SiTemporal } from "react-icons/si";
import { FaCartShopping } from "react-icons/fa6";
import "./css.css"


const Navbar = () => {

    const { User, Logout, loading } = useContext(AuthContext);
    const handleLogout = () => {
        Logout()
    }

    const pages =
        <>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'md:btn md:btn-sm md:btn-outline text-[#80EEB4] md:text-[#ffffff] md:border-[#80EEB4] md:border-2' : 'hover:text-[#80EEB4] hover:underline'} >Home</NavLink>

            <NavLink to={'/Products'} className={({ isActive }) => isActive ? 'md:btn md:btn-sm md:btn-outline text-[#80EEB4] md:text-[#ffffff] md:border-[#80EEB4] md:border-2' : 'hover:text-[#80EEB4] hover:underline'}>Product's</NavLink>

            <NavLink to={'/Contact'} className={({ isActive }) => isActive ? 'md:btn md:btn-sm md:btn-outline text-[#80EEB4] md:text-[#ffffff] md:border-[#80EEB4] md:border-2' : 'hover:text-[#80EEB4] hover:underline'}>contact</NavLink>

            <NavLink to={'/Cart'} className={({ isActive }) => isActive ? 'md:btn md:btn-sm md:btn-outline text-[#80EEB4] md:text-[#ffffff] md:border-[#80EEB4] md:border-2' : 'hover:text-[#80EEB4] hover:underline'}><span className="flex"><FaCartShopping /></span></NavLink>
        </>


    return (
        <>
            <div className="navbar bg-[#3CA2FAF2] md:px-7 font-serif text-white fixed top-0 w-full z-50">

                <div className="navbar-start md:pl-8">

                    {/* small device */}
                    <div className="dropdown text-black">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-auto p-4 space-y-0.5 shadow">
                            {pages}
                        </ul>
                    </div>

                    <p className='text-xl md:text-2xl font-black text-[#80EEB4] flex items-center gap-1' data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">Twist<SiTemporal className='animate-spin' /></p>

                </div>

                {/* center */}
                <div className="navbar-center hidden lg:flex font-bold pr-4">
                    <ul className="flex items-center gap-7 -ml-11">
                        {pages}
                    </ul>
                </div>

                {/* nav-end */}
                <div className="navbar-end bg-[#80EEB4] p-2 h-[60px] pr-4 md:pr-8" >

                    {
                        loading
                            ? <ColorRing visible={true} color="#3CA2FA" ariaLabel="color-ring-loading" wrapperClass="color-ring-wrapper" colors={['#3CA2FA', '#80EEB4', '#3CA2FA', '#80EEB4', '#3CA2FA']} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300" />
                            : <>
                                {
                                    User
                                        ?
                                        <div className="flex items-center gap-2.5" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">

                                            <button title="Logout" onClick={handleLogout} className="font-bold hover:text-[#3CA2FA] hover:underline">Logout</button>
                                            <div className="avatar placeholder" title={User?.displayName}>
                                                <div className="bg-neutral w-8 rounded-full ring-[#3CA2FA] ring">
                                                    <img src={User?.photoURL} alt="Profile" referrerPolicy="no-referrer" />
                                                </div>
                                            </div>

                                        </div>
                                        :
                                        <NavLink title="Login" to={'/Login'} className={({ isActive }) => isActive ? 'btn btn-sm btn-outline text-[#ffffff] border-[#3CA2FA] border-2' : 'hover:text-[#3CA2FA] hover:underline'} data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">Login</NavLink>
                                }
                            </>
                    }

                </div>


            </div>
        </>
    );
};

export default Navbar;