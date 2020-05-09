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