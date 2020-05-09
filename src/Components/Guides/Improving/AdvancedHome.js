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