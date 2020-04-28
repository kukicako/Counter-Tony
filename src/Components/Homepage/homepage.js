import React from 'react'
import Guide from './guide-card.js'
import Slider from './slider.js'

function Homepage(){
    return(
        <div className="HomePageContainer">
            <Slider />
            <Guide />
        </div>
    )
}

export default Homepage