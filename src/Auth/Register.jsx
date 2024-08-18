import { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import toast from "react-hot-toast"


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
        <div className="flex items-center min-h-[61.5vh] p-6 md:p-0 md:my-10">

            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md ">

                <h2 className="text-lg font-bold text-black">Register account</h2>

                <form onSubmit={handleSubmit}>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 ">

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Username</label>
                            <input
                                id="username"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200">Photo url</label>
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
                            className="btn border-0 bg-[#80EEB4] hover:bg-[#80EEB4B3] btn-block">
                            Register
                        </button>
                    </div>

                </form>

                <div className="flex items-center w-full my-4">
                    <hr className="w-full " />
                    <p className="px-3 ">OR</p>
                    <hr className="w-full " />
                </div>

                <div className="my-6 space-y-4">
                    <button onClick={handleGoogle} className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>
                </div>

            </section>

        </div>
    )
}
