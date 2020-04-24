import React from 'react'
import LeagueTitle from './LeagueTitle.js'
import LeagueText from './LeagueText.js'
import GuideSidebar from '../guidesidebar.js'

function LeagueHome() {
    return(
        <div>
            <div>
                <GuideSidebar />
            </div>
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