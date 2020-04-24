import React from 'react'
import GuideTitle from './guidetitle.js'
import GuideText from './guidetext.js'
import GuideSidebar from './guidesidebar.js'

function Guides() {
    return(
        <div>
            <div>
                <GuideSidebar />
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