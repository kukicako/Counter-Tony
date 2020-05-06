import React from 'react'
import IntroductionEntryTitle from './IntroductionEntryTitle.js'
import IntroductionEntryText from './IntroductionEntryText.js'
import CustomizedGuideSideBar from '../GuideNavbar/guidesnavbar.js'


function IntroductionEntryHome() {
    return(
        <div>
            <div>
                <CustomizedGuideSideBar />
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                    <IntroductionEntryTitle />
                    <IntroductionEntryText />
                </div>
            </div>
        </div>
    )
}

export default IntroductionEntryHome