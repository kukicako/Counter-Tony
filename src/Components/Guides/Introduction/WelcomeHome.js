import React from 'react'
import GuideText from './Welcome.js'
import GuideTitle from './WelcomeTitle.js'

function WelcomeHome() {
    return(
        <div>
            <div className='GuidePage'>
            <div className='GuidePageStyling'>
                <GuideTitle />
                <GuideText />
                </div>
            </div>
        </div>
    )
}

export default WelcomeHome;