import React from 'react'
import Guidesidebar from './guidesidebar.js'
import GuideTitle from './guidetitle.js'
import GuideText from './guidetext.js'
// import IGLHome from './InGameLeading/introiglhome.js'

function Guides() {
    return(
        <div className='GuidePage'>
            <Guidesidebar />
            <div className='GuidePageStyling'>
                <GuideTitle />
                <GuideText />
            </div>
        </div>
    );
}

export default Guides