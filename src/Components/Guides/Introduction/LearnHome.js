import React from 'react'
import LearnTitle from './LearnTitle.js'
import LearnText from './Learn.js'

function LearnHome() {
    return(
        <div className='GuidePage'>
            <div className='GuidePageStyling'>
                <LearnTitle />
                <LearnText />
            </div>
        </div>
    )
}

export default LearnHome;