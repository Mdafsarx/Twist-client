import { useQuery } from "@tanstack/react-query";
import TestimonialCard from "./TestimonialCard";
import axios from "axios";

export default function Testimonial() {

    window.scroll({
        behavior: "smooth"
    })


    const { data } = useQuery({
        queryKey: ['people review'],
        queryFn: async () => {
            const res = await axios('/data.json')
            const data = await res.data;
            return data
        }
    })


    return (
        <div className="pb-20">
            <div className="min-h-[92vh] flex gap-6 border border-[#80EEB4] text-white overflow-hidden mx-6 rounded-xl pr-4">

                {/* text */}
                <div className="w-[40%] flex items-center pl-9">
                    <div className="space-y-3.5">
                        <button className="py-1 px-2 font-medium bg-gradient-to-l from-[#3CA2FA] to-[#80EEB4] text-white border-0 rounded-md">Community</button>
                        <h1 className="text-6xl font-black pt-0.5 pb-3">Hear From Our Happy <span className="bg-gradient-to-b from-[#3CA2FA] via-[#80EEB4] to-[#3CA2FA] text-transparent bg-clip-text">Clients</span></h1>
                        <p className="text-balance">
                            Our customers’ satisfaction is our priority. Hear from those who’ve experienced the difference Twist makes offering seamless user experiences and exceptional customer support. Check out what our valued clients have to say.
                        </p>
                    </div>
                </div>

                {/* card */}
                <div className="w-[20%] h-[92vh]">
                    <div className="track space-y-6">
                        {
                            data?.slice(0, 10)?.map(tes => <TestimonialCard position={tes?.position} name={tes?.name} profile={tes?.image} rating={tes?.rating} comment={tes?.testimonial} />)
                        }
                    </div>
                </div>

                <div className="w-[20%] h-[92vh]">
                    <div className="track2 space-y-6">
                        {
                            data?.slice(10, 20)?.map(tes => <TestimonialCard position={tes?.position} name={tes?.name} profile={tes?.image} rating={tes?.rating} comment={tes?.testimonial} />)
                        }
                    </div>
                </div>

                <div className="w-[20%] h-[92vh]">
                    <div className="track space-y-6">
                        {
                            data?.slice(20, data.length)?.map(tes => <TestimonialCard position={tes?.position} name={tes?.name} profile={tes?.image} rating={tes?.rating} comment={tes?.testimonial} />)
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
