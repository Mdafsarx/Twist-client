import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import CategoryCard from './CategoryCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { data } from 'autoprefixer';

export default function Category() {

    const [Data, setData] = useState([]);

    useEffect(() => {
        axios(`http://localhost:3000/Product`)
            .then(data => setData(data.data))
            .catch(error => console.log(error))
    }, [])
    const computers = Data.filter(data => data.category === "Computers");
    const televisions = Data?.filter(data => data.category === "Televisions");
    const accessories = Data?.filter(data => data.category === "Accessories");


    return (
        <section className="text-white pb-14 pt-6 max-w-6xl mx-auto">

            {/* computers */}
            <div className="flex gap-5 pb-10 border-b border-[#80EEB4]">

                {/* category name and title */}
                <div className='w-[25%]'>
                    <h1 className='font-black font-mono text-3xl uppercase text-[#80EEB4] pb-1'>Computers</h1>
                    <p>All the power I need in one sleek device.</p>
                    <button className="uppercase font-normal pt-3 border-b-2 border-white hover:text-[#3CA2FA] hover:border-[#3CA2FA]">Shop Now</button>
                </div>
                {/* products */}
                <div className='w-[75%]'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper">

                        {
                            computers?.map((data, i) => <SwiperSlide key={i}><CategoryCard product={data} /></SwiperSlide>)
                        }

                    </Swiper>
                </div>

            </div>

            {/* televisions */}
            <div className="flex gap-5 py-10 border-b border-[#80EEB4]">

                {/* category name and title */}
                <div className='w-[25%]'>
                    <h1 className='font-black font-mono text-3xl uppercase text-[#80EEB4] pb-1'>Televisions</h1>
                    <p>Watching TV Becomes a Fully Immersive Experience.</p>
                    <button className="uppercase font-normal pt-3 border-b-2 border-white hover:text-[#3CA2FA] hover:border-[#3CA2FA]">Shop Now</button>
                </div>
                {/* products */}
                <div className='w-[75%]'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper">

                        {
                            televisions?.map((data, i) => <SwiperSlide key={i}><CategoryCard product={data} /></SwiperSlide>)
                        }

                    </Swiper>
                </div>

            </div>

            {/* accessories */}
            <div className="flex gap-5 py-10 ">

                {/* category name and title */}
                <div className='w-[25%]'>
                    <h1 className='font-black font-mono text-3xl uppercase text-[#80EEB4] pb-1'>accessories</h1>
                    <p>Accessories are the exclamation point of any outfit.</p>
                    <button className="uppercase font-normal pt-3 border-b-2 border-white hover:text-[#3CA2FA] hover:border-[#3CA2FA]">Shop Now</button>
                </div>
                {/* products */}
                <div className='w-[75%]'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper">

                        {
                            accessories?.map((data, i) => <SwiperSlide key={i}><CategoryCard product={data} /></SwiperSlide>)
                        }

                    </Swiper>
                </div>

            </div>

            <div className='flex justify-center'>
                <button className="btn btn-outline  hover:bg-[#3CA2FA] hover:text-white border-[#80EEB4] text-white">More</button>
            </div>

        </section>
    )
}
