import React from 'react'
import AnglesAwpText from './AnglesAwpText.js'
import AnglesPositioning from '../../images/AnglesPositioning.jpg'
import CustomizedGuideSideBar from '../GuideNavbar/guidesnavbar.js'


function AnglesAwpHome() {
    return(
        <div>
            <div>
                <CustomizedGuideSideBar />
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                <img className='GuideTitleImage' src={AnglesPositioning} alt='Image saying Introduction to AWPing' />
                    <AnglesAwpText />
                </div>
            </div>
        </div>
    )
}

export default AnglesAwpHome