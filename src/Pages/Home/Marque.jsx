import React from 'react'
import Marquee from "react-fast-marquee";
import img from "../../assets/1.png"
import img2 from "../../assets/2.png"
import img3 from "../../assets/3.png"
import img4 from "../../assets/4.png"
import img5 from "../../assets/5.png"
import img6 from "../../assets/6.png"
import img7 from "../../assets/7.png"
import img8 from "../../assets/8.png"          
import img9 from "../../assets/9.png"          


export default function Marque() {
    return (
        <div className='bg-whit'>

            <Marquee>
                <div className='flex items-center gap-20 p-4'>
                    <img src={img} alt="" className='w-28 ml-12' />
                    <img src={img2} alt="" className='w-28' />
                    <img src={img3} alt="" className='w-28' />
                    <img src={img4} alt="" className='w-28' />
                    <img src={img5} alt="" className='w-28' />
                    <img src={img6} alt="" className='w-28' />
                    <img src={img7} alt="" className='w-28' />
                    <img src={img8} alt="" className='w-28' />
                    <img src={img9} alt="" className='w-28' />
                </div>
            </Marquee>

        </div>
    )
}
