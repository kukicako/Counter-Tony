import React from 'react'
import LeagueTitle from './LeagueTitle.js'
import LeagueText from './LeagueText.js'

function LeagueHome() {
    return(
        <div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                    <LeagueTitle />
                    <LeagueText />
                </div>
            </div>
        </div>
    )
}

export default LeagueHome;