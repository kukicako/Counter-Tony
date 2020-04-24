import React from 'react'
import DemosText from './demostext.js'
import DemosTitle from './demostitle.js'


function InGameLeadingHome() {
    return(
        <div className='GuidePage'>
            <div className='GuidePageStyling'>
                <DemosTitle />
                <DemosText />
            </div>
        </div>
    )
}

export default InGameLeadingHome