import React from 'react'
import WhoAreWeText from './WhoAreWe.js'
import WhoAreWeTitle from './WhoAreWeTitle.js'

function WelcomeHome() {
    return(
        <div>
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