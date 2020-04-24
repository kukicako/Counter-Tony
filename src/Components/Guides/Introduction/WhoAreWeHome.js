import React from 'react'
import WhoAreWeText from './WhoAreWe.js'
import WhoAreWeTitle from './WhoAreWeTitle.js'
import GuideSidebar from '../guidesidebar.js'

function WelcomeHome() {
    return(
        <div>
            <div>
                <GuideSidebar />
            </div>
            <div className='GuidePage'>
            <div className='GuidePageStyling'>
                <WhoAreWeTitle />
                <WhoAreWeText />
                </div>
            </div>
        </div>
    )
}

export default WelcomeHome;