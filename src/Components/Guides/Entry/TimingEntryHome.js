import React from 'react'
import TimingEntryText from './TimingEntryText.js'
import CustomizedGuideSideBar from '../GuideNavbar/guidesnavbar.js'


function TimingEntryHome() {
    return(
        <div>
            <div>
                <CustomizedGuideSideBar />
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                    <TimingEntryText />
                </div>
            </div>
        </div>
    )
}

export default TimingEntryHome