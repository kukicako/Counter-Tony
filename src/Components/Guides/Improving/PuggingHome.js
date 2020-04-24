import React from 'react'
import PuggingText from './PuggingText.js'
import PuggingTitle from './PuggingTitle.js'
import GuideSidebar from '../guidesidebar.js'

function AimingHome() {
    return(
        <div>
            <div>
                <GuideSidebar />
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                    <PuggingTitle />
                    <PuggingText />
                </div>
            </div>
        </div>
    )
}

export default AimingHome;