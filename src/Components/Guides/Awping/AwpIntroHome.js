import React from 'react'
import AwpIntroText from './AwpIntroText.js'
import CustomizedGuideSideBar from '../GuideNavbar/guidesnavbar.js'
import IntroAWP from '../../images/IntroAWP.jpg'


function AwpIntroHome() {
    return(
        <div>
            <div>
                <CustomizedGuideSideBar />
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                <img className='GuideTitleImage' src={IntroAWP} alt='Image saying Introduction to AWPing' />
                    <AwpIntroText />
                </div>
            </div>
        </div>
    )
}

export default AwpIntroHome