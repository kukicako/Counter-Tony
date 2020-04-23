import React from 'react'
import InGameLeadingTitle from './ingameleadingtitle.js'
import InGameLeadingText from './ingameleadingtext.js'


function InGameLeadingHome() {
    return(
        <div className='GuidePage'>
            <div className='GuidePageStyling'>
                <InGameLeadingTitle />
                <InGameLeadingText />
            </div>
        </div>
    )
}

export default InGameLeadingHome