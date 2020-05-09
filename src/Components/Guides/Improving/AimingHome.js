import React from 'react'
import AimingText from './AimingText.js'
import AimGuideImage from '../../images/AimGuideImage.png'
import CustomizedGuideSideBar from '../GuideNavbar/guidesnavbar.js'

function AimingHome() {
    return(
        <div>
            <div>
                <CustomizedGuideSideBar />
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                <img className='GuideTitleImage' src={AimGuideImage} alt='Image saying Lets talk aim.' />
                    <AimingText />
                </div>
            </div>
        </div>
    )
}

export default AimingHome;