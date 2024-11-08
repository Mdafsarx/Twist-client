import { FaQuoteLeft, FaRegStar, FaStar } from "react-icons/fa6";

export default function TestimonialCard() {
    return (
        <div>
            <div className=" w-72 p-4 shadow-2xl rounded-lg bg-gray-800 ">
                <FaQuoteLeft className=" absolute -top-2 left-[5%] text-[1.3rem] text-[#727272]" />
                <p className="text-text text-[0.9rem]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae non,
                    explicabo cum dolorem temporibus alias odio quod officiis nam. Debitis
                    odio libero dolorum harum magnam inventore ut molestias rerum
                    sapiente!
                </p>

                <div className="flex items-start mt-5 justify-between">
                    <div>
                        <h2 className="text-[1.2rem] font-[600]">Jhone Dehon</h2>
                        <p className="text-[1rem] text-[#727272]">CEO of Miracle</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaStar className="text-[1.3rem] text-[#ffba24]" />
                        <FaStar className="text-[1.3rem] text-[#ffba24]" />
                        <FaStar className="text-[1.3rem] text-[#ffba24]" />
                        <FaStar className="text-[1.3rem] text-[#ffba24]" />
                        <FaRegStar className="text-[#ffba24] text-[1.3rem]" />
                    </div>
                </div>
                <FaQuoteLeft className=" absolute -bottom-2 right-[5%] rotate-[180deg] text-[1.3rem] text-[#727272]" />
            </div>
        </div>
    )
}
