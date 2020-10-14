import React from 'react';

import HomeHeader from '../components/HomeHeader';
import Carousel from '../components/Carousel';

function HomePage(props){

    return(
    <div>
        <HomeHeader title={props.title} subTitle={props.subTitle} text={props.text} />
        <Carousel />
    </div>
    );


}

export default HomePage;