import React from 'react'
import CommunicationEntryTitle from './CommunicationEntryTitle.js'
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
                    <CommunicationEntryTitle />
                    <CommunicationEntryText />
                </div>
            </div>
        </div>
    )
}

export default CommunicationEntryHome