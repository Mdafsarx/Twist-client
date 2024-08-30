import React from 'react';
import Banner from './Banner';
import Marque from './Marque';
import TopItems from './TopItems';
import Category from './Category';
import AllItems from './AllItems';


const Home = () => {
    return (
        <div>
            <Banner />
            <Marque/>
            <div className='max-w-7xl mx-auto'>
                <TopItems/>
                <Category/>
                <AllItems/>
            </div>
        </div>
    );
};

export default Home;