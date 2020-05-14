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
            <div className="GuideTitles">
                <h4 className="GuideTitlesH4">Guides - Player Improvement</h4>
                <h1 className="GuideTitlesH1">Guide for New Players and Lower Ranked Players</h1>
                <h3 className="GuideTitlesH3">Written by: David "Gatr" Downes </h3>
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