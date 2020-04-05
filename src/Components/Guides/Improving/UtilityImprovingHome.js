import React from 'react'
import UtilityImprovingText from './UtilityImprovingText.js'
import UtilityImprovingTitle from './UtilityImprovingTitle.js'
import Guidesidebar from '../guidesidebar.js'

function UtilityImprovingHome() {
    return(
        <div className='GuidePage'>
            <Guidesidebar />
            <div className='GuidePageStyling'>
                <UtilityImprovingTitle />
                <UtilityImprovingText />
                
            </div>
        </div>
    )
}

export default UtilityImprovingHome;