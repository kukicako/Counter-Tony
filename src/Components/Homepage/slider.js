import React, { useState } from 'react';
import vertigo from '../images/vertigo.png'
import igl2 from '../images/igl2.png'
import vertigo2 from '../images/vertigo2.png'
import burger3 from '../images/burger3.jpg'
import burger5 from '../images/burger5.jpg' 
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './slider.scss'

function Slider () {
    return(
        <Carousel
        autoPlay={2000}
        animationSpeed={1000}
        infinite
        centered
        dots
        >
            <img className='slide' src={vertigo} />
            <img className='slide' src={igl2} />
            <img className='slide' src={vertigo2} />
            <img className='slide' src={burger3} />
            <img className='slide' src={burger5} />
        </Carousel>
    )
}

export default Slider;

