import React from 'react'
import UtilityImprovingText from './UtilityImprovingText.js'
import UtilityPic from '../../images/UtilityPic.png'
import CustomizedGuideSideBar from '../GuideNavbar/guidesnavbar.js'

function UtilityImprovingHome() {
    return(
        <div>
            <div>
                <CustomizedGuideSideBar />
            </div>
            <div className="GuideTitles">
                <h4 className="GuideTitlesH4">Guides - Player Improvement</h4>
                <h1 className="GuideTitlesH1">Importance of Using Proper Utility Usage</h1>
                <h3 className="GuideTitlesH3">Written by: David "Gatr" Downes </h3>
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                <img className='GuideTitleImage' src={UtilityPic} alt='Image saying Utility' />
                    <UtilityImprovingText /> 
                </div>
            </div>
        </div>
    )
}

export default UtilityImprovingHome;