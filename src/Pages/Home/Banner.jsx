import { FaArrowRightLong } from "react-icons/fa6";
import img from "../../assets/photo.png"

export default function Banner() {
    return (
        <div className="flex justify-center w-full min-h-screen">

            <div className="bg-[#3CA2FA] text-white min-h-screen w-[73.5%] flex items-center justify-center">
                <div className="space-y-5">
                    <h1 className="text-6xl font-black">Productivity <br /> at its finest</h1>
                    <p className="max-w-96 text-balance">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sequi a eaque culpa dolorem nihil quaerat tempore possimus non. Quasi ullam non soluta quaerat iusto sint praesentium laudantium autem doloremque?</p>
                    <button className="bg-[#80EEB4] text-[#3CA2FA] hover:text-white p-2 flex items-center gap-2 font-bold rounded-sm">
                        Buy now <FaArrowRightLong  className="mt-1" />
                    </button>
                </div>
            </div>

            <div className="bg-[#80EEB4] min-h-screen w-1/2 flex items-center justify-start">
              <img src={img} alt="products" className="w-[530px] -ml-48" />
            </div>

        </div>
    )
}
