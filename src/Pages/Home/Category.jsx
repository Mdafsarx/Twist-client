import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import CategoryCard from './CategoryCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { data } from 'autoprefixer';
import { Link } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';

export default function Category() {

    const [Data, setData] = useState([]);
    const [more, setMore] = useState(false)

    useEffect(() => {
        axios(`${import.meta.env.VITE_HTTP}/Product`)
            .then(data => setData(data.data))
            .catch(error => console.log(error))
    }, [])
    const computers = Data.filter(data => data.category === "Computers");
    const televisions = Data?.filter(data => data.category === "Televisions");
    const accessories = Data?.filter(data => data.category === "Accessories");
    console.log(computers.length)


    return (
        <section className="text-white pb-20 max-w-6xl mx-auto px-7 md:px-0">

            {/* headline */}
            <div className='text-white text-center pb-16 space-y-3'>
               <h1 className='text-3xl font-bold '>Top picks just for you</h1>
               <p>Explore our popular products, loved by users for their quality <br /> and innovation. Find your next favorite with Twist's top picks</p>
            </div>

            {/* computers */}
            <div className="flex flex-col md:flex-row gap-5 pb-10 border-b border-[#80EEB4]">

                {/* category name and title */}
                <div className='md:w-[25%]' data-aos="fade-right" data-aos-duration="500" data-aos-delay="200">
                    <h1 className='font-black font-mono text-3xl uppercase text-[#80EEB4] pb-1'>Computers</h1>
                    <p className='pb-2'>All the power I need in one sleek device.</p>
                    <Link to={'/Products'} className="uppercase font-normal pt-3 border-b-2  border-white hover:text-[#3CA2FA] hover:border-[#3CA2FA]">Shop Now</Link>
                </div>
                {/* products */}
                <div className='md:w-[75%]'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper">

                        {computers?.length === 0
                            ? <div className="flex flex-col items-center justify-center min-h-[25vh]">
                                <ColorRing visible={true} color="#3CA2FA" ariaLabel="color-ring-loading" wrapperClass="color-ring-wrapper" colors={['#3CA2FA', '#80EEB4', '#3CA2FA', '#80EEB4', '#3CA2FA']} />
                            </div>
                            :
                            computers?.map((data, i) => <SwiperSlide key={i}><CategoryCard product={data} /></SwiperSlide>)
                        }

                    </Swiper>
                </div>

            </div>

            {/* televisions */}
            <div className={`flex flex-col md:flex-row gap-5 py-10 ${more ? 'border-b' : ''}  border-[#80EEB4]`}>

                {/* category name and title */}
                <div className='md:w-[25%]' data-aos="fade-right" data-aos-duration="500" data-aos-delay="200">
                    <h1 className='font-black font-mono text-3xl uppercase text-[#80EEB4] pb-1'>Televisions</h1>
                    <p className='pb-2'>Watching TV Becomes a Fully Immersive Experience.</p>
                    <Link to={'/Products'} className="uppercase font-normal pt-3 border-b-2 border-white hover:text-[#3CA2FA] hover:border-[#3CA2FA]">Shop Now</Link>
                </div>
                {/* products */}
                <div className='md:w-[75%]'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper">

                        {
                            televisions?.length === 0
                                ? <div className="flex flex-col items-center justify-center min-h-[25vh]">
                                    <ColorRing visible={true} color="#3CA2FA" ariaLabel="color-ring-loading" wrapperClass="color-ring-wrapper" colors={['#3CA2FA', '#80EEB4', '#3CA2FA', '#80EEB4', '#3CA2FA']} />
                                </div>
                                :
                                televisions?.map((data, i) => <SwiperSlide key={i}><CategoryCard product={data} /></SwiperSlide>)
                        }

                    </Swiper>
                </div>

            </div>

            {/* accessories */}
            <div className={`${more ? "flex" : "hidden"} flex-col md:flex-row gap-5 py-10`}>

                {/* category name and title */}
                <div className='md:w-[25%]' data-aos="fade-right" data-aos-duration="500" data-aos-delay="200">
                    <h1 className='font-black font-mono text-3xl uppercase text-[#80EEB4] pb-1'>accessories</h1>
                    <p className='pb-2'>Accessories are the exclamation point of any outfit.</p>
                    <Link to={'/Products'} className="uppercase font-normal pt-3 border-b-2 border-white hover:text-[#3CA2FA] hover:border-[#3CA2FA]">Shop Now</Link>
                </div>
                {/* products */}
                <div className='md:w-[75%]'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper">

                        {
                            accessories?.length === 0
                                ? <div className="flex flex-col items-center justify-center min-h-[25vh]">
                                    <ColorRing visible={true} color="#3CA2FA" ariaLabel="color-ring-loading" wrapperClass="color-ring-wrapper" colors={['#3CA2FA', '#80EEB4', '#3CA2FA', '#80EEB4', '#3CA2FA']} />
                                </div>
                                :
                                accessories?.map((data, i) => <SwiperSlide key={i}><CategoryCard product={data} /></SwiperSlide>)
                        }

                    </Swiper>
                </div>

            </div>

            {/* more button */}
            {/* <div className={`${more ? "hidden" : "flex"} flex justify-center`} data-aos="zoom-in" data-aos-duration="500">
                <button onClick={() => setMore(true)} className="btn btn-outline  border-0 text-white uppercase bg-gradient-to-bl from-[#80EEB4] to-[#3CA2FA] hover:text-black">More</button>
            </div> */}

        </section>
    )
}
