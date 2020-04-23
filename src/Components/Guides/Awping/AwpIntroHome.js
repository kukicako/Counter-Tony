import React from 'react'
import AwpIntroText from './AwpIntroText.js'
import AwpIntroTitle from './AwpIntroTitle.js'


function AwpIntroHome() {
    return(
        <div className='GuidePage'>
            <div className='GuidePageStyling'>
                <AwpIntroTitle />
                <AwpIntroText />
            </div>
        </div>
    )
}

export default AwpIntroHome