import React from 'react'
import AwarenessAwpText from './AwarenessAwpText.js'
import AwarenessUnderstanding from '../../images/AwarenessUnderstanding.jpg'
import CustomizedGuideSideBar from '../GuideNavbar/guidesnavbar.js'


function AwarenessAwpHome() {
    return(
        <div>
            <div>
                <CustomizedGuideSideBar />
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                <img className='GuideTitleImage' src={AwarenessUnderstanding} alt='Image saying Introduction to AWPing' />
                    <AwarenessAwpText />
                </div>
            </div>
        </div>
    )
}

export default AwarenessAwpHome