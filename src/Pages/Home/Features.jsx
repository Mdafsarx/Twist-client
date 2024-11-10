import React from 'react'
import FeatureCard from './FeatureCard'
import './card.css'
import { RiShoppingBag4Line } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import { SiGooglegemini } from "react-icons/si";
import { GrFavorite } from "react-icons/gr";




export default function Features() {
    return (
        <div className='pb-24'>

            {/* heading */}
            <div className='text-white text-center pb-10 space-y-3'>
                <h1 className='text-3xl font-bold '>Discover what twist offers</h1>
                <p>Twist offers three core features designed to elevate your <br /> experience, streamline processes, and drive impactful results.</p>
            </div>

            <div className='flex items-center justify-center gap-6 text-white'>

                <FeatureCard feature={'Voice and photo search'} one={'Search products quickly'} two={'Make product discovery intuitive and fast'} three={'Enhance the user experience with an innovative'} icon={<GoSearch className='text-4xl text-[#3CA2FA] my-3.5' />} />

                <FeatureCard feature={'Product suggestions'} one={'personalized recommendations'} two={'Discover products that match your unique needs'} three={'Effortless shopping with smart suggestions'} icon={<RiShoppingBag4Line className='text-4xl text-[#3CA2FA] my-3.5' />}/>

                <FeatureCard feature={'Ai product overview'} one={'Instant AI product insights'} two={' Make informed choices with summarized details'} three={'Save time by understanding products at a glance'} icon={<SiGooglegemini  className='text-4xl text-[#3CA2FA] my-3.5' />}/>

                <FeatureCard feature={'Wishlist'} one={'Easily organize your favorite finds'} two={'Keep track of products you’re interested in before purchasing'} three={'Save items you love for easy access later'} icon={<GrFavorite  className='text-4xl text-[#3CA2FA] my-3.5' />}/>

            </div>
        </div>
    )
}
