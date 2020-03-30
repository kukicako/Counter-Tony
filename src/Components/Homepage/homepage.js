import React from 'react'
import Footer from './footer.js'
import Guide from './guide-card.js'
import Nav from './nav.js'
import Slider from './slider.js'

function Homepage(){
    return(
        <div>
            <Nav />
            <Slider />
            <Guide />
            <Footer />
        </div>
    )
}

export default Homepage