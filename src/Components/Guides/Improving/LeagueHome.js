import React from 'react'
import LeagueTitle from './LeagueTitle.js'
import LeagueText from './LeagueText.js'

function LeagueHome() {
    return(
        <div className='GuidePage'>
            <div className='GuidePageStyling'>
                <LeagueTitle />
                <LeagueText />
                
            </div>
        </div>
    )
}

export default LeagueHome;