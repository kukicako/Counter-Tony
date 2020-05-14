import React from 'react'
import UnderstandingEntryText from './UnderstandingEntryText.js'
import CustomizedGuideSideBar from '../GuideNavbar/guidesnavbar.js'


function UnderstandingEntryHome() {
    return(
        <div>
            <div>
                <CustomizedGuideSideBar />
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                    <UnderstandingEntryText />
                </div>
            </div>
        </div>
    )
}

export default UnderstandingEntryHome