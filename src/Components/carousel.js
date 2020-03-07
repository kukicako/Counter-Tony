import Carousel from 'react-bootstrap/Carousel'
import React, { useState, useEffect } from "react";

function HomeCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <Carousel className='carousel-home' activeIndex={index} direction={direction} onSelect={handleSelect}>

            <Carousel.Item>
                <img className="carousel-img-1" src='' alt=''/>
            <Carousel.Caption>
                <h2>Slide 1</h2>
                <p>This is the first Slide</p>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="carousel-img-2" src='' alt=''/>
            <Carousel.Caption>
                <h2>Slide 2</h2>
                <p>This is the second Slide</p>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="carousel-img-3" src='' alt=''/>
            <Carousel.Caption>
                <h2>Slide 3</h2>
                <p>This is the third Slide</p>
            </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}

export default HomeCarousel

