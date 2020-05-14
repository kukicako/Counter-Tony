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
            <div className="GuideTitles">
                <h4 className="GuideTitlesH4">Guides - Player Improvement</h4>
                <h1 className="GuideTitlesH1">Improving your Aim</h1>
                <h3 className="GuideTitlesH3">Written by: David "Gatr" Downes </h3>
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