import React from 'react'
import GuideText from './Welcome.js'
import GuideTitle from './WelcomeTitle.js'
import Guidesidebar from '../guidesidebar.js'

function WelcomeHome() {
    return(
        <div className='GuidePage'>
            <Guidesidebar />
            <div className='GuidePageStyling'>
                <GuideTitle />
                <GuideText />
            </div>
        </div>
    )
}

export default WelcomeHome;