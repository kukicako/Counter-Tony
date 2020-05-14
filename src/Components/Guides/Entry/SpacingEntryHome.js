import React from 'react'
import SpacingEntryText from './SpacingEntryText.js'
import CustomizedGuideSideBar from '../GuideNavbar/guidesnavbar.js'


function SpacingEntryHome() {
    return(
        <div>
            <div>
                <CustomizedGuideSideBar />
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                    <SpacingEntryText />
                </div>
            </div>
        </div>
    )
}

export default SpacingEntryHome