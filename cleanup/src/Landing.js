import React from 'react';
import Hero from './Hero';
import './Landing.css'

import broomIcon from './images/broom.svg'
import heroIcon from './images/hero-bg.png'
import About from './About';
import Packages from './Packages';
function Landing() {
    return <div className='landing'>
        <Hero title='Welcome to Khadi
                                                                                                        Interiors & Cleaning
                                                                                                        Services' about='Let’s do your dirty work' linkText='Book Now'
            icon={broomIcon}
            image={heroIcon}/>
        <About summary='We provide execellent services at a friendly
                    budget and we are capable of taking good care of your home every day of the week.'/>

        <Packages/>
    </div>;
}

export default Landing;
