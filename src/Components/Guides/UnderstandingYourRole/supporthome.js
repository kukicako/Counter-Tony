import React from 'react'
import SupportTitle from './supporttitle.js'
import SupportText from './supporttext.js'

function SupportHome() {
    return(
        <div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                    <SupportTitle />
                    <SupportText />
                </div>
            </div>
        </div>
    )
}

export default SupportHome;