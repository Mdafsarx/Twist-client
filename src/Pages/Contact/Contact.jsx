import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export default function Contact() {
  return (
    <div className='flex justify-center items-center text-4xl md:text-6xl  text-white pt-14 md:pt-0'>
      <section className="min-h-screen lg:flex ">

        <div className="flex flex-col justify-center w-full p-8 lg:px-12 xl:px-32 lg:w-1/2" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
          <h1 className="text-2xl font-light capitalize  lg:text-4xl">hire us.</h1>
          <p className="mt-4 font-bold">
            Ask us everything and we would love to hear from you
          </p>
          <div className="mt-6">
            <h3 className="text-4xl font-light text-[#80EEB4]">Follow us</h3>

            <div className="flex mt-4 -mx-1.5">
              <a
                className="mx-1.5   transition-colors duration-300 transform "
                href="#"
              >
                <svg
                  className="w-10 h-10 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.318 16.3708 14.5293 17.1235 11.85C17.348 11.0351 17.4595 10.1932 17.4548 9.34801C17.4535 9.18201 18.4615 7.50001 18.6668 6.67268V6.67334Z" />
                </svg>
              </a>

              <a
                className="mx-1.5 transition-colors duration-300 transform "
                href="#"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                    fill="currentColor"
                  />
                  <path
                    d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                    fill="currentColor"
                  />
                  <path
                    d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                className="mx-1.5 transition-colors duration-300 transform "
                href="#"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                className="mx-1.5 transition-colors duration-300 transform "
                href="#"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88472C13.925 3.82283 9.93373 3.82283 8.63052 3.88472C7.35274 3.94545 6.21741 4.23821 5.28201 5.17361C4.3466 6.10901 4.05384 7.24434 3.99311 8.52606C3.93123 9.82932 3.93123 13.8205 3.99311 15.1238C4.05384 16.4055 4.3466 17.5409 5.28201 18.4763C6.21741 19.4117 7.35274 19.7044 8.63052 19.7652C9.93373 19.8271 13.925 19.8271 15.2282 19.7652C16.51 19.7044 17.6453 19.4117 18.5807 18.4763C19.5161 17.5409 19.8089 16.4055 19.8696 15.1238C19.9315 13.8205 19.9315 9.82932 19.8731 8.52606ZM18.3095 16.6624C17.9277 17.5798 17.1608 18.153 16.2415 18.1909C14.9435 18.2547 10.9446 18.2547 9.64656 18.1909C8.73588 18.153 7.96904 17.5798 7.58565 16.6624C7.22594 15.7915 7.22594 13.8585 7.58565 12.9875C7.96745 12.0701 8.73428 11.4969 9.6536 11.4591C10.9516 11.3953 14.9505 11.3953 16.2485 11.4591C17.1591 11.4969 17.926 12.0701 18.3095 12.9875C18.6692 13.8585 18.6692 15.7915 18.3095 16.6624Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>

          </div>
        </div>

        <div className="flex justify-center items-center w-full h-64 lg:w-1/2 lg:h-auto mt-16 md:mt-0 mb-28 md:mb-0" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
          <form onSubmit={(e) => {
            e.preventDefault()
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Thank you for getting in touch!",
              showConfirmButton: false,
              timer: 1500
            });
          }} className="text-sm">
            <div className="-mx-2 md:items-center md:flex">
              <div className="flex-1 px-2">
                <label className="block mb-2 text-sm ">Full Name</label>
                <input type="text" placeholder="Name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700  focus:outline-none focus:ring focus:ring-opacity-40" required/>
              </div>

              <div className="flex-1 px-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm ">Email address</label>
                <input type="email" placeholder="Email" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-opacity-40" required />
              </div>
            </div>

            <div className="w-full mt-4">
              <label className="block mb-2 text-sm ">Message</label>
              <textarea className="block w-full h-32 px-5 py-3 mt-2 text-black  bg-white border rounded-md md:h-56 focus:outline-none focus:ring focus:ring-opacity-40 resize-none" placeholder="Message" required></textarea>
            </div>

            <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform btn-outline border border-[#3CA2FA] hover:bg-gray-900 hover:border-[#80EEB4] rounded-md ">
              get in touch
            </button>
          </form>
        </div>

      </section>
    </div>
  )
}
