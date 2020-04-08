import React from 'react'
import AimingText from './AimingText.js'
import AimingTitle from './AimingTitle.js'
import Guidesidebar from '../guidesidebar.js'

function AimingHome() {
    return(
        <div className='GuidePage'>
            <Guidesidebar />
            <div className='GuidePageStyling'>
                <AimingTitle />
                <AimingText />
            </div>
        </div>
    )
}

export default AimingHome;