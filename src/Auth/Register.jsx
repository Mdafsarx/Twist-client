import { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import toast from "react-hot-toast"
import { FcGoogle } from "react-icons/fc";



export default function Register() {

    const { Google, RegisterUser, updateUser } = useContext(AuthContext)

    const handleGoogle = () => {
        Google()
            .then((result) => {
                if (result.user) toast.success('Register successful');
                navLink('/')
            }).catch(error => {
                toast.error(error.message)
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const Photo = form.Photo.value;
        RegisterUser(email, password)
            .then(result => {
                if (result.user) {
                    updateUser(name, Photo)
                        .then(() => {
                            toast.success('Register Successful');
                            navLink('/')
                        }).catch(error => toast.error(error.message))
                }
            }).catch(error => toast.error(error.message))

    }


    return (
        <div className="flex items-center min-h-[61.5vh] p-6 md:p-0 mt-16 md:mt-24 md:mb-8 ">

            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md "  data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200">

                <h2 className="text-lg font-bold text-black">Register account</h2>

                <form onSubmit={handleSubmit}>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 ">

                        <div>
                            <label className="text-black font-medium" htmlFor="username">Username</label>
                            <input
                                id="username"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required
                            />
                        </div>

                        <div>
                            <label className="text-black font-medium" htmlFor="emailAddress">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required
                            />
                        </div>

                        <div>
                            <label className="text-black font-medium" htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required
                            />
                        </div>

                        <div>
                            <label className="text-black font-medium">Photo url</label>
                            <input
                                id="Photo"
                                type="url"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required
                            />
                        </div>


                    </div>

                    <div className="flex mt-5">
                        <button
                            type="submit"
                            className="btn border-0 bg-[#80EEB4] hover:bg-[#80EEB4] hover:text-white btn-block">
                            Register
                        </button>
                    </div>

                </form>

                <div className="flex items-center w-full my-4">
                    <hr className="w-full border border-black" />
                    <p className="px-3 font-bold">OR</p>
                    <hr className="w-full border border-black" />
                </div>

                <div className="my-6 space-y-4">
                    <button onClick={handleGoogle} className="flex items-center justify-center w-full p-4 space-x-2 border-2 border-[#80EEB4] rounded-md focus:ring-2 focus:ring-[#80EEB4] ">
                        <FcGoogle className="text-xl"/>

                        <p>Login with Google</p>
                    </button>
                </div>

            </section>

        </div>
    )
}
