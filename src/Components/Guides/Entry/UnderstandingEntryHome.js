import React from 'react'
import UnderstandingEntryTitle from './UnderstandingEntryTitle.js'
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
                    <UnderstandingEntryTitle />
                    <UnderstandingEntryText />
                </div>
            </div>
        </div>
    )
}

export default UnderstandingEntryHome