import React from 'react'
import MatchmakingText from './MatchmakingText.js'
import MatchmakingTitle from './MatchmakingTitle.js'
import GuideSidebar from '../guidesidebar.js'

function AimingHome() {
    return(
        <div>
            <div>
                <GuideSidebar />
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                    <MatchmakingTitle />
                    <MatchmakingText />
                </div>
            </div>
        </div>
    )
}

export default AimingHome;