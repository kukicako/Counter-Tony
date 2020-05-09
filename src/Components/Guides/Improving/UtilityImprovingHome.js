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