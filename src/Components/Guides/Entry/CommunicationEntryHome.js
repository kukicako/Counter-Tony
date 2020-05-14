import React from 'react'
import CommunicationEntryText from './CommunicationEntryText.js'
import CustomizedGuideSideBar from '../GuideNavbar/guidesnavbar.js'


function CommunicationEntryHome() {
    return(
        <div>
            <div>
                <CustomizedGuideSideBar />
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                    <CommunicationEntryText />
                </div>
            </div>
        </div>
    )
}

export default CommunicationEntryHome