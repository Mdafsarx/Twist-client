import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import CategoryCard from './CategoryCard';

export default function Category() {
    return (
        <section className="text-white pb-14 pt-6 max-w-6xl mx-auto">

            {/* computers */}
            <div className="flex gap-4">

                {/* category name and title */}
                <div className='w-[25%]'>
                    <h1>Laptop</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <button className="uppercase font-normal pt-0.5 border-b-2 border-white hover:text-[#3CA2FA] hover:border-[#3CA2FA]">Shop Now</button>
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

                        <SwiperSlide><CategoryCard /></SwiperSlide>
                        <SwiperSlide><CategoryCard /></SwiperSlide>
                        <SwiperSlide><CategoryCard /></SwiperSlide>
                        <SwiperSlide><CategoryCard /></SwiperSlide>

                    </Swiper>
                </div>

            </div>

        </section>
    )
}
