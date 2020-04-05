import React from 'react'
import LeagueTitle from './LeagueTitle.js'
import LeagueText from './LeagueText.js'
import Guidesidebar from '../guidesidebar.js'

function LeagueHome() {
    return(
        <div className='GuidePage'>
            <Guidesidebar />
            <div className='GuidePageStyling'>
                <LeagueTitle />
                <LeagueText />
                
            </div>
        </div>
    )
}

export default LeagueHome;