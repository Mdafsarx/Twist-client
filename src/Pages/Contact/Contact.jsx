import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { FaTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { TiSocialFacebook } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa6";
import "../MyCart/Checkout/css.css"




export default function Contact() {
  return (
    <div className='flex justify-center items-center text-4xl md:text-6xl  text-white pt-14 md:pt-0'>
      <section className="min-h-screen lg:flex ">

        <div className="flex flex-col justify-center w-full p-8 lg:px-12 xl:px-32 lg:w-1/2" data-aos="fade-right" data-aos-duration="500" >
          <h1 className="text-2xl font-light capitalize  lg:text-4xl">hire us.</h1>
          <p className="mt-4 font-bold">
            Ask us everything and we would love to hear from you
          </p>
          <div className="mt-6">
            <h3 className="text-4xl font-light text-[#80EEB4]">Follow us</h3>

            <div className="flex items-center mt-4  gap-x-2.5">

                <a href="https://x.com/MDAFSARX" className='bg-[#1C9CEA] p-2 rounded-full'><FaTwitter className='text-2xl'/></a>
                <a href="https://www.instagram.com" className='bg-[#FE0188] p-2 rounded-full'><LuInstagram className='text-2xl'/></a>
                <a href="https://www.facebook.com/profile.php?id=61554716528686&.id=61554716528686" className='bg-[#0A66C2] p-2 rounded-full'><TiSocialFacebook   className='text-2xl'/></a>
                <a href="https://www.youtube.com/@mdafsarr9098" className='bg-[#FF0000] p-2 rounded-full'><FaYoutube className='text-2xl'/></a>

            </div>

          </div>
        </div>

        <div className="flex justify-center items-center w-full h-64 lg:w-1/2 lg:h-auto mt-16 md:mt-0 mb-28 md:mb-0" data-aos="fade-left" data-aos-duration="500">
          <form onSubmit={(e) => {
            e.preventDefault()
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Thank you for getting in touch!",
              showConfirmButton: false,
              timer: 1500,
              customClass: {
                popup: 'swal2-dark',
              },
            });
          }} className="text-sm">
            <div className="-mx-2 md:items-center md:flex">
              <div className="flex-1 px-2">
                <label className="block mb-2 text-sm ">Full Name</label>
                <input type="text" placeholder="Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700  focus:outline-none focus:ring focus:ring-[#80EEB4]" required/>
              </div>

              <div className="flex-1 px-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm ">Email address</label>
                <input type="email" placeholder="Email" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-[#80EEB4]" required />
              </div>
            </div>

            <div className="w-full mt-4">
              <label className="block mb-2 text-sm ">Message</label>
              <textarea className="block w-full h-32 px-5 py-3 mt-2 text-black  bg-white border rounded-md md:h-56 focus:outline-none focus:ring focus:ring-[#80EEB4] resize-none" placeholder="Message" required></textarea>
            </div>

            <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform border-0 uppercase bg-gradient-to-tr from-[#80EEB4] to-[#3CA2FA] hover:text-black rounded-md">
              get in touch
            </button>
          </form>
        </div>

      </section>
    </div>
  )
}
