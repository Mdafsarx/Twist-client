import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
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
        <div className="flex justify-center my-10 px-6 md:px-0 pt-16">

            <div className="w-full max-w-md p-4 sm:p-10 bg-white rounded-2xl" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200">

                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>

                <p className="text-sm text-center ">Dont have account?
                    <Link to={'/Register'} className="focus:underline hover:underline">Register here</Link>
                </p>

                <div className="my-6 space-y-4">
                    <button onClick={handleGoogle} className="flex items-center justify-center w-full p-4 space-x-2 border-2 border-[#80EEB4] rounded-md focus:ring-2 focus:ring-[#80EEB4] ">
                        <FcGoogle className="text-xl"/>
                        <p>Login with Google</p>
                    </button>
                </div>

                <div className="flex items-center w-full my-4">
                    <hr className="w-full border border-black" />
                    <p className="px-3 font-bold">OR</p>
                    <hr className="w-full border border-black" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div className="space-y-4">

                        <div>
                            <input type="email" name="email" id="email" placeholder="Email address" className="w-full px-3 py-2 border border-black rounded-md  " required />
                        </div>

                        <div>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-3 py-2 border border-black rounded-md  " required />
                        </div>

                    </div>

                    <button type="submit" className="w-full btn rounded-md bg-[#80EEB4] hover:bg-[#80EEB4] hover:text-white border-0 text-black">Login</button>

                </form>

            </div>

        </div>
    )
}
