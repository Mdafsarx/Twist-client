import React from 'react';
import Banner from './Banner';
import Marque from './Marque';
import TopItems from './TopItems';


const Home = () => {
    return (
        <div>
            <Banner />
            <Marque/>
            <div className='max-w-7xl mx-auto'>
                <TopItems/>
            </div>
        </div>
    );
};

export default Home;