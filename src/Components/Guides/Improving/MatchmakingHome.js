import React from 'react'
import MatchmakingText from './MatchmakingText.js'
import MatchmakingTitle from './MatchmakingTitle.js'

function AimingHome() {
    return(
        <div>
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