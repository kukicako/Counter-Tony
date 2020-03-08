import React, { useState } from 'react';
import HomeCarosel from './carousel'
import burger1 from '../images/burger1.jpg'
import burger2 from '../images/burger2.jpg'
import burger3 from '../images/burger3.jpg'
import burger4 from '../images/burger4.jpg'
import burger5 from '../images/burger5.jpg'
import './slider.scss'
// <HomeCarosel src={burger1}/>,<HomeCarosel src={burger2}/>,<HomeCarosel src={burger3}/>,<HomeCarosel src={burger4}/>,<HomeCarosel src={burger5}/>

function Slider() {
    let sliderArr = [<HomeCarosel src={burger1}/>,<HomeCarosel src={burger2}/>,<HomeCarosel src={burger3}/>,<HomeCarosel src={burger4}/>,<HomeCarosel src={burger5}/>];
    const [x, setX] = useState(0)

    const goLeft = _=> {
        x === 0 ? setX(-100 * (sliderArr.length -1)) : setX(x + 100);
    };

    const goRight = _=> {
        x === -100* (sliderArr.length -1) ? setX(0) : setX(x - 100);
    };

    return (
        <div className='slider'>
            {sliderArr.map((item, index) => {
                return (
                    <div key={index} className='slide' style={{transform:`translateX(${x}%)`}}>
                        {item}
                    </div>
                );
            })}
        <button id='goLeft' onClick={goLeft}><i class="fas fa-chevron-left"></i></button>
        <button id='goRight' onClick={goRight}><i class="fas fa-chevron-right"></i></button>
        </div>
    );
}

export default Slider; 