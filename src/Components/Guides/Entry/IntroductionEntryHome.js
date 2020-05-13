import React from 'react'
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
                    <IntroductionEntryText />
                </div>
            </div>
        </div>
    )
}

export default IntroductionEntryHome