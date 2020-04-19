import React from 'react'
import DemosText from './demostext.js'
import DemosTitle from './demostitle.js'
import Guidesidebar from '../guidesidebar.js'


function InGameLeadingHome() {
    return(
        <div className='GuidePage'>
            <Guidesidebar />
            <div className='GuidePageStyling'>
                <DemosTitle />
                <DemosText />
            </div>
        </div>
    )
}

export default InGameLeadingHome