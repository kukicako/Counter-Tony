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