import { Link, useLocation, useNavigate } from "react-router-dom"
import { MdHome } from "react-icons/md";
import img from "../../assets/giphy.gif"

export default function Error() {
  
   const navigate=useNavigate();

    return (
        <div>
            <section className="bg-gray-900 text-white min-h-screen">

                <div className="container flex items-center min-h-[90vh] px-6 py-12 mx-auto">
                    <div className="flex flex-col items-center max-w-sm mx-auto text-center">

                        <img src={img} alt="" className="size-72 -mb-10" />

                        <h1 className="mt-3 text-4xl font-black">
                            Page not found
                        </h1>
                        <p className="mt-4">
                            The page you are looking for doesn't exist.
                        </p>

                        <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">

                            <button onClick={()=>navigate(-1)} className="flex items-center justify-center w-36 px-5 py-2 text-sm gap-x-1 rounded-md border-0 text-black bg-gradient-to-br from-[#80EEB4] to-[#3CA2FA] hover:text-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 rtl:rotate-180"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                                    />
                                </svg>
                                <span>Go back</span>
                            </button>


                            <Link to={'/'} className="flex items-center justify-center w-32 px-5 py-2 text-sm gap-x-1 rounded-md border-0 text-black bg-gradient-to-tr from-[#80EEB4] to-[#3CA2FA] hover:text-white">
                            <MdHome className="text-xl"/>
                            <span>Home</span>
                            </Link>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
