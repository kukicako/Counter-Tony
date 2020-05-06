import React from 'react'
import AnglesAwpText from './AnglesAwpText.js'
import AnglesAwpTitle from './AnglesAwpTitle.js'
import CustomizedGuideSideBar from '../GuideNavbar/guidesnavbar.js'


function AnglesAwpHome() {
    return(
        <div>
            <div>
                <CustomizedGuideSideBar />
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                    <AnglesAwpTitle />
                    <AnglesAwpText />
                </div>
            </div>
        </div>
    )
}

export default AnglesAwpHome