import React from 'react'
import AimingText from './AimingText.js'
import AimingTitle from './AimingTitle.js'

function AimingHome() {
    return(
        <div className='GuidePage'>
            <div className='GuidePageStyling'>
                <AimingTitle />
                <AimingText />
            </div>
        </div>
    )
}

export default AimingHome;