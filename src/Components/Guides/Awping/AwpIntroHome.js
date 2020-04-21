import React from 'react'
import AwpIntroText from './AwpIntroText.js'
import AwpIntroTitle from './AwpIntroTitle.js'
import Guidesidebar from '../guidesidebar.js'


function AwpIntroHome() {
    return(
        <div className='GuidePage'>
            <Guidesidebar />
            <div className='GuidePageStyling'>
                <AwpIntroTitle />
                <AwpIntroText />
            </div>
        </div>
    )
}

export default AwpIntroHome