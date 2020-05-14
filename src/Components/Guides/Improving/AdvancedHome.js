import React from 'react'
import AdvancedText from './AdvancedText.js'
import AdvancedGuidePic from '../../images/AdvancedGuidePic.png'
import CustomizedGuideSideBar from '../GuideNavbar/guidesnavbar.js'

function AdvancedGuide() {
    return(
        <div>
            <div>
                <CustomizedGuideSideBar />
            </div>
            <div className="GuideTitles">
                <h4 className="GuideTitlesH4">Guides - Player Improvement</h4>
                <h1 className="GuideTitlesH1">Guide for Higher Ranked Players looking to get into League Play</h1>
                <h3 className="GuideTitlesH3">Written by: David "Gatr" Downes </h3>
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                <img className='GuideTitleImage' src={AdvancedGuidePic} alt='Image saying Advanced Guide' />
                    <AdvancedText />
                </div>
            </div>
        </div>
    )
}

export default AdvancedGuide;