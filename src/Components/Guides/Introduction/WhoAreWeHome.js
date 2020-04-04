import React from 'react'
import WhoAreWeText from './WhoAreWe.js'
import WhoAreWeTitle from './WhoAreWeTitle.js'
import Guidesidebar from '../guidesidebar.js'

function WelcomeHome() {
    return(
        <div className='GuidePage'>
            <Guidesidebar />
            <div className='GuidePageStyling'>
                <WhoAreWeTitle />
                <WhoAreWeText />
            </div>
        </div>
    )
}

export default WelcomeHome;