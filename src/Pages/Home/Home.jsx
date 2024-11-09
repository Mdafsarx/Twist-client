import React from 'react';
import Banner from './Banner';
import Marque from './Marque';
import TopItems from './TopItems';
import Category from './Category';
import AllItems from './AllItems';
import Faq from './Faq';
import Testimonial from './Testimonial';


const Home = () => {
    return (
        <div>
            <Banner />
            <Marque />
            <div className='max-w-7xl mx-auto'>
                <TopItems />
                <Category />
                {/* <AllItems /> */}
            </div>
                <Testimonial />
                <Faq />
        </div>
    );
};

export default Home;