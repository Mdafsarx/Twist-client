import React from 'react';
import Banner from './Banner';
import Marque from './Marque';
import TopItems from './TopItems';
import Category from './Category';
import AllItems from './AllItems';
import Faq from './Faq';
import Testimonial from './Testimonial';
import Features from './Features';


const Home = () => {
    return (
        <div>
            <Banner />
            <Marque />
            <div className='max-w-7xl mx-auto'>
                <TopItems />
                <Category />
                <Features />
            </div>
            <Testimonial />
            <Faq />
        </div>
    );
};

export default Home;