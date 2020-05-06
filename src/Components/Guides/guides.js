import React from 'react'
import GuideTitle from './guidetitle.js'
import GuideText from './guidetext.js'
import CustomizedGuideSideBar from './GuideNavbar/guidesnavbar.js'

function Guides() {
    return(
        <div>
            <div>
                <CustomizedGuideSideBar />
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                    <GuideTitle />
                    <GuideText />
                </div>
            </div>
        </div>
    );
}

export default Guides