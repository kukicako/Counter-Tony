import React from 'react'
import GuideTitle from './guidetitle.js'
import GuideText from './guidetext.js'
import GuideNav from './guidesnavbar.js'

function Guides() {
    return(
        <div>
            <div>
                <GuideNav />
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