import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

const Navbar = () => {

    const { User, Logout, loading } = useContext(AuthContext);
    const handleLogout = () => {
        Logout()
    }

    const pages =
        <>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/Products'}>Product's</NavLink>
            <NavLink to={'/Contact'}>contact</NavLink>
        </>


    return (
        <>
            <div className="navbar bg-[#3CA2FA] md:px-7 font-serif text-white">

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
                            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-auto p-4 space-y-0.5 shadow">
                            {pages}
                        </ul>
                    </div>

                    <div className="text-xl font-bold">Twist</div>

                </div>

                {/* center */}
                <div className="navbar-center hidden lg:flex font-bold">
                    <ul className="flex items-center gap-7">
                        {pages}
                    </ul>
                </div>

                {/* nav-end */}
                <div className="navbar-end">
                   
                    {
                        loading
                            ? <span className="loading loading-bars loading-md"></span>
                            : <>
                                {
                                    User
                                        ?
                                        <div className="flex items-center gap-2.5">

                                            <button onClick={handleLogout} className="font-bold">Logout</button>
                                            <div className="avatar placeholder" title={User?.displayName}>
                                                <div className="bg-neutral w-8 rounded-full ring-[#80EEB4] ring">
                                                    <img src={User?.photoURL} alt="Profile" referrerPolicy="no-referrer" />
                                                </div>
                                            </div>

                                        </div>
                                        :
                                        <NavLink to={'/Login'} className="font-bold">Login</NavLink>
                                }
                            </>
                    }

                </div>


            </div>
        </>
    );
};

export default Navbar;