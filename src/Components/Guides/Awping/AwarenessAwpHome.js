import React from 'react'
import AwarenessAwpText from './AwarenessAwpText.js'
import AwarenessAwpTitle from './AwarenessAwpTitle.js'
import CustomizedGuideSideBar from '../GuideNavbar/guidesnavbar.js'


function AwarenessAwpHome() {
    return(
        <div>
            <div>
                <CustomizedGuideSideBar />
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                    <AwarenessAwpTitle />
                    <AwarenessAwpText />
                </div>
            </div>
        </div>
    )
}

export default AwarenessAwpHome