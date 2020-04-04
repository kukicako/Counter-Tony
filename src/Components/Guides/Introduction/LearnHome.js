import React from 'react'
import LearnTitle from './LearnTitle.js'
import LearnText from './Learn.js'
import Guidesidebar from '../guidesidebar.js'

function LearnHome() {
    return(
        <div className='GuidePage'>
            <Guidesidebar />
            <div className='GuidePageStyling'>
                <LearnTitle />
                <LearnText />
            </div>
        </div>
    )
}

export default LearnHome;