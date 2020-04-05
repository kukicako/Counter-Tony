import React from 'react'
import PuggingText from './PuggingText.js'
import PuggingTitle from './PuggingTitle.js'
import Guidesidebar from '../guidesidebar.js'

function AimingHome() {
    return(
        <div className='GuidePage'>
            <Guidesidebar />
            <div className='GuidePageStyling'>
                <PuggingTitle />
                <PuggingText />
            </div>
        </div>
    )
}

export default AimingHome;