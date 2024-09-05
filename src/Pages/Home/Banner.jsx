import { FaArrowRightLong } from "react-icons/fa6";
import img from "../../assets/cart2.png"
import { useNavigate } from "react-router-dom";

export default function Banner() {
    const navLink=useNavigate()
    return (
        <div className="flex flex-col md:flex-row justify-center w-full min-h-screen">

            <div className="bg-[#3CA2FA] text-white min-h-[80vh] md:min-h-screen md:w-[72.8%] flex items-center justify-center">
                <div className="space-y-3 md:space-y-5" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
                    <h1 className="text-5xl md:text-6xl font-black">Productivity <br /> at its finest</h1>
                    <p className="max-w-96 text-balance">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sequi a eaque culpa dolorem nihil quaerat tempore possimus non. Quasi ullam non soluta quaerat iusto sint praesentium laudantium autem doloremque?</p>
                    <button onClick={()=>{navLink('/Products')}} className="bg-[#80EEB4] text-[#3CA2FA] hover:text-white p-2 flex items-center gap-2 font-bold rounded-sm">
                        Buy now <FaArrowRightLong  className="mt-1" />
                    </button>
                </div>
            </div>

            <div className="bg-[#80EEB4] min-h-[80vh] md:min-h-screen md:w-1/2 flex items-center justify-start" >
              <div className="w-full" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                <img src={img} alt="products" className="w-[350px] md:w-[450px] md:-ml-40 rotate-180" />
              </div>
            </div>

        </div>
    )
}
 