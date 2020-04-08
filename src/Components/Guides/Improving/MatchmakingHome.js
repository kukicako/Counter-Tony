import React from 'react'
import MatchmakingText from './MatchmakingText.js'
import MatchmakingTitle from './MatchmakingTitle.js'
import Guidesidebar from '../guidesidebar.js'

function AimingHome() {
    return(
        <div className='GuidePage'>
            <Guidesidebar />
            <div className='GuidePageStyling'>
                <MatchmakingTitle />
                <MatchmakingText />
            </div>
        </div>
    )
}

export default AimingHome;