import React from 'react'
import IntroductionEntryText from './IntroductionEntryText.js'
import CustomizedGuideSideBar from '../GuideNavbar/guidesnavbar.js'


function IntroductionEntryHome() {
    return(
        <div>
            <div>
                <CustomizedGuideSideBar />
            </div>
            <div className="GuideTitles">
                <h4 className="GuideTitlesH4">Guides - Entry</h4>
                <h1 className="GuideTitlesH1">Introduction to Entry Fragging</h1>
                <h3 className="GuideTitlesH3">Written by: David "Gatr" Downes </h3>
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                    <IntroductionEntryText />
                </div>
            </div>
        </div>
    )
}

export default IntroductionEntryHome