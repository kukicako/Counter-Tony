import React from 'react'
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
                    <AnglesEntryText />
                </div>
            </div>
        </div>
    )
}

export default AnglesEntryHome