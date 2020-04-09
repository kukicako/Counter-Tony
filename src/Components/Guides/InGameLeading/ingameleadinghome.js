import React from 'react'
import InGameLeadingTitle from './ingameleadingtitle.js'
import InGameLeadingText from './ingameleadingtext.js'
import Guidesidebar from '../guidesidebar.js'


function InGameLeadingHome() {
    return(
        <div className='GuidePage'>
            <Guidesidebar />
            <div className='GuidePageStyling'>
                <InGameLeadingTitle />
                <InGameLeadingText />
            </div>
        </div>
    )
}

export default InGameLeadingHome