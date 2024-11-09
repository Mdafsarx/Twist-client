import { Rating } from "@mui/material";
import { FaQuoteLeft, FaRegStar, FaStar } from "react-icons/fa6";

export default function TestimonialCard({ position, name, profile, rating, comment }) {
    return (
        <div className="w-72 p-4 shadow-2xl rounded-lg bg-white/5 border relative">
            <FaQuoteLeft className=" absolute -top-2 left-[5%] text-[1.3rem] text-[#727272]" />
            <p className="text-text text-[0.9rem]">
                {comment}
            </p>

            <div className="flex items-start mt-5 justify-between">

                <div className="flex items-center gap-2.5">
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/002/387/693/small_2x/user-profile-icon-free-vector.jpg"
                        alt="" className="size-8 rounded-full" />
                    <div>
                        <h2 className="text- font-[600]">{name}</h2>
                        <p className="text-sm text-[#727272]">{position}</p>
                    </div>
                </div>

                <div className="flex items-center">
                    <Rating size="small" value={rating} readOnly
                        sx={{
                            fontSize: '0.90rem',
                        }}/>
                </div>

            </div>
            <FaQuoteLeft className=" absolute -bottom-2 right-[5%] rotate-[180deg] text-[1.3rem] text-[#727272]" />
        </div>
    )
}
