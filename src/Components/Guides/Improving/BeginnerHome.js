import React from 'react'
import BeginnerGuideText from './BeginnerText.js'
import BeginnerGuidePic from '../../images/BeginnerGuidePic.png'
import CustomizedGuideSideBar from '../GuideNavbar/guidesnavbar.js'

function BeginnerGuide() {
    return(
        <div>
            <div>
                <CustomizedGuideSideBar />
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                <img className='GuideTitleImage' src={BeginnerGuidePic} alt='Image saying Beginner Guide' />
                    <BeginnerGuideText />
                </div>
            </div>
        </div>
    )
}

export default BeginnerGuide;