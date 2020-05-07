import React from 'react'
import AnglesEntryTitle from './AnglesEntryTitle.js'
import AnglesEntryText from './AnglesEntryText.js'
import CustomizedGuideSideBar from '../GuideNavbar/guidesnavbar.js'


function AnglesEntryHome() {
    return(
        <div>
            <div>
                <CustomizedGuideSideBar />
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                    <AnglesEntryTitle />
                    <AnglesEntryText />
                </div>
            </div>
        </div>
    )
}

export default AnglesEntryHome