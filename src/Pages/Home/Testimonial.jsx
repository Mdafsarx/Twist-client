import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialCard";

export default function Testimonial() {
    return (
        <div className="min-h-[80vh] border flex text-white mx-12 rounded-md overflow-hidden">

            {/* text */}
            <div className="w-[40%] flex items-center p-16">
                <div>
                    <button className="btn bg-none btn-sm rounded-xl">Community</button>
                    <h1 className="text-6xl font-bold pt-0.5 pb-3">Read from our satisfied clients</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sit maxime praesentium, expedita debitis id voluptas. Quo et totam adipisci expedita exercitationem aut, ex alias dolore. Amet blanditiis a id?
                    </p>
                </div>
            </div>

            {/* card */}
            <div className="w-[30%] flex flex-col items-center ">
                <Marquee direction="up" className="h-full">
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </Marquee>
            </div>

            <div className="w-[30%] flex flex-col items-center ">
                <Marquee direction="up" className="h-full">
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </Marquee>
            </div>
            
        </div>
    )
}
