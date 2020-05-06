import React from 'react'
import LearnTitle from './LearnTitle.js'
import LearnText from './Learn.js'

function LearnHome() {
    return(
        <div>
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