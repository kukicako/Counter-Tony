import React from 'react'
import IntermediateText from './IntermediateText.js'
import IntermediateGuidePic from '../../images/IntermediateGuidePic.png'
import CustomizedGuideSideBar from '../GuideNavbar/guidesnavbar.js'

function IntermediateGuide() {
    return(
        <div>
            <div>
                <CustomizedGuideSideBar />
            </div>
            <div className="GuideTitles">
                <h4 className="GuideTitlesH4">Guides - Player Improvement</h4>
                <h1 className="GuideTitlesH1">Guide for Average players looking to take that Next Step.</h1>
                <h3 className="GuideTitlesH3">Written by: David "Gatr" Downes </h3>
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                <img className='GuideTitleImage' src={IntermediateGuidePic} alt='Image saying Intermediate Guide' />
                    <IntermediateText />
                </div>
            </div>
        </div>
    )
}

export default IntermediateGuide;