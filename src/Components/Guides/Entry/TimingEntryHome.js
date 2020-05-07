import React from 'react'
import TimingEntryTitle from './TimingEntryTitle.js'
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
                    <TimingEntryTitle />
                    <TimingEntryText />
                </div>
            </div>
        </div>
    )
}

export default TimingEntryHome