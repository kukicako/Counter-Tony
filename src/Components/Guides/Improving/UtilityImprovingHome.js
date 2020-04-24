import React from 'react'
import UtilityImprovingText from './UtilityImprovingText.js'
import UtilityImprovingTitle from './UtilityImprovingTitle.js'
import GuideSidebar from '../guidesidebar.js'

function UtilityImprovingHome() {
    return(
        <div>
            <div>
                <GuideSidebar />
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                    <UtilityImprovingTitle />
                    <UtilityImprovingText />
                    
                </div>
            </div>
        </div>
    )
}

export default UtilityImprovingHome;