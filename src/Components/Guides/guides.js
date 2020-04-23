import React from 'react'
import GuideTitle from './guidetitle.js'
import GuideText from './guidetext.js'

function Guides() {
    return(
        <div className='GuidePage'>
            <div className='GuidePageStyling'>
                <GuideTitle />
                <GuideText />
            </div>
        </div>
    );
}

export default Guides