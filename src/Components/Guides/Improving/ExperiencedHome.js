import React from 'react'
import ExperiencedText from './ExperiencedText.js'
import ExperiencedGuidePic from '../../images/ExperiencedGuidePic.png'
import CustomizedGuideSideBar from '../GuideNavbar/guidesnavbar.js'

function ExperiencedGuide() {
    return(
        <div>
            <div>
                <CustomizedGuideSideBar />
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                <img className='GuideTitleImage' src={ExperiencedGuidePic} alt='Image saying Experienced Guide' />
                    <ExperiencedText />
                </div>
            </div>
        </div>
    )
}

export default ExperiencedGuide;