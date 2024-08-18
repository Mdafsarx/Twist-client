import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import toast from "react-hot-toast"


export default function Login() {

    const { Google, LoginUser } = useContext(AuthContext);
    const navLink = useNavigate()

    const handleGoogle = () => {
        Google()
            .then((result) => {
                if (result.user) {
                    toast.success('Login successful');
                    navLink('/')
                }
            }).catch(error => {
                toast.error(error.message)
            })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        LoginUser(email, password)
            .then(() => {
                toast.success('Login Successful')
                navLink('/')
            }).catch(error => toast.error(error.message))
    }





    return (
        <div className="flex justify-center my-10 px-6 md:px-0">

            <div className="w-full max-w-md p-4 sm:p-10 bg-white rounded-2xl">

                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>

                <p className="text-sm text-center ">Dont have account?
                    <Link to={'/Register'} className="focus:underline hover:underline">Register here</Link>
                </p>

                <div className="my-6 space-y-4">
                    <button onClick={handleGoogle} className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>
                </div>

                <div className="flex items-center w-full my-4">
                    <hr className="w-full " />
                    <p className="px-3 ">OR</p>
                    <hr className="w-full " />
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div className="space-y-4">

                        <div>
                            <input type="email" name="email" id="email" placeholder="Email address" className="w-full px-3 py-2 border rounded-md  " required />
                        </div>

                        <div>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md  " required />
                        </div>

                    </div>

                    <button type="submit" className="w-full btn rounded-md bg-[#80EEB4] hover:bg-[#80EEB4B3] border-0 text-black">Login</button>

                </form>

            </div>

        </div>
    )
}
