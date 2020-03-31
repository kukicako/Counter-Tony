import React from 'react'
import Footer from './footer.js'
import Guide from './guide-card.js'
import Nav from './nav.js'
import Slider from './slider.js'

function Homepage(){
    return(
        <div>
            <Slider />
            <Guide />
        </div>
    )
}

export default Homepage