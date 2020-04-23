import React from 'react'
import GuideText from './Welcome.js'
import GuideTitle from './WelcomeTitle.js'

function WelcomeHome() {
    return(
        <div className='GuidePage'>
            <div className='GuidePageStyling'>
                <GuideTitle />
                <GuideText />
            </div>
        </div>
    )
}

export default WelcomeHome;