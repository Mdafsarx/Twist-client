import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { SiTemporal } from "react-icons/si";

const Navbar = () => {

    const { User, Logout, loading } = useContext(AuthContext);
    const handleLogout = () => {
        Logout()
    }

    const pages =
        <>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'md:btn md:btn-sm md:btn-outline text-[#80EEB4] md:text-[#ffffff] md:border-[#80EEB4] md:border-2' : 'hover:text-[#80EEB4] hover:underline'} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">Home</NavLink>

            <NavLink to={'/Products'} className={({ isActive }) => isActive ? 'md:btn md:btn-sm md:btn-outline text-[#80EEB4] md:text-[#ffffff] md:border-[#80EEB4] md:border-2' : 'hover:text-[#80EEB4] hover:underline'} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">Product's</NavLink>

            <NavLink to={'/Contact'} className={({ isActive }) => isActive ? 'md:btn md:btn-sm md:btn-outline text-[#80EEB4] md:text-[#ffffff] md:border-[#80EEB4] md:border-2' : 'hover:text-[#80EEB4] hover:underline'} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="900">contact</NavLink>
        </>


    return (
        <>
            <div className="navbar bg-[#3CA2FAF2] md:px-7 font-serif text-white fixed top-0 w-full z-50">

                <div className="navbar-start">

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

                    <p className='text-xl font-black text-[#80EEB4] flex items-center gap-1' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">Twist<SiTemporal className='animate-spin' /></p>

                </div>

                {/* center */}
                <div className="navbar-center hidden lg:flex font-bold">
                    <ul className="flex items-center gap-7">
                        {pages}
                    </ul>
                </div>

                {/* nav-end */}
                <div className="navbar-end" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">

                    {
                        loading
                            ? <ColorRing visible={true} color="#3CA2FA" ariaLabel="color-ring-loading" wrapperClass="color-ring-wrapper" colors={['#3CA2FA', '#80EEB4', '#3CA2FA', '#80EEB4', '#3CA2FA']} />
                            : <>
                                {
                                    User
                                        ?
                                        <div className="flex items-center gap-2.5">

                                            <button title="Logout" onClick={handleLogout} className="font-bold hover:text-[#80EEB4] hover:underline">Logout</button>
                                            <div className="avatar placeholder" title={User?.displayName}>
                                                <div className="bg-neutral w-8 rounded-full ring-[#80EEB4] ring">
                                                    <img src={User?.photoURL} alt="Profile" referrerPolicy="no-referrer" />
                                                </div>
                                            </div>

                                        </div>
                                        :
                                        <NavLink title="Login" to={'/Login'} className={({ isActive }) => isActive ? 'btn btn-sm btn-outline text-[#ffffff] border-[#80EEB4] border-2' : 'hover:text-[#80EEB4] hover:underline'}>Login</NavLink>
                                }
                            </>
                    }

                </div>


            </div>
        </>
    );
};

export default Navbar;