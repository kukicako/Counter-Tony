import React from 'react'
import GuideText from './guidetext.js'
import guidemainpage from '../images/guidemainpage.jpg'
import CustomizedGuideSideBar from './GuideNavbar/guidesnavbar.js'

function Guides() {
    return(
        <div>
            <div>
                <CustomizedGuideSideBar />
            </div>
            <div className="GuideTitles">
                <h4 className="GuideTitlesH4">Guides - Site Introduction</h4>
                <h1 className="GuideTitlesH1">Introduction to CSGOTeacher</h1>
                <h3 className="GuideTitlesH3">Written by: David "Gatr" Downes</h3>
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                    <img className='GuideTitleImage' src={guidemainpage} alt='Image saying Guides' />
                    <GuideText />
                </div>
            </div>
        </div>
    );
}

export default Guides