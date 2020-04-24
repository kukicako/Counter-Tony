import React from 'react'
import LearnTitle from './LearnTitle.js'
import LearnText from './Learn.js'
import GuideSidebar from '../guidesidebar.js'

function LearnHome() {
    return(
        <div>
            <div>
                <GuideSidebar />
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                    <LearnTitle />
                    <LearnText />
                </div>
            </div>
        </div>
    )
}

export default LearnHome;