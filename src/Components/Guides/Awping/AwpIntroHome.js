import React from 'react'
import AwpIntroText from './AwpIntroText.js'
import AwpIntroTitle from './AwpIntroTitle.js'
import CustomizedGuideSideBar from '../GuideNavbar/guidesnavbar.js'


function AwpIntroHome() {
    return(
        <div>
            <div>
                <CustomizedGuideSideBar />
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                    <AwpIntroTitle />
                    <AwpIntroText />
                </div>
            </div>
        </div>
    )
}

export default AwpIntroHome