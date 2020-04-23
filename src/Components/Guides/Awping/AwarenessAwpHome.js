import React from 'react'
import AwarenessAwpText from './AwarenessAwpText.js'
import AwarenessAwpTitle from './AwarenessAwpTitle.js'


function AwarenessAwpHome() {
    return(
        <div className='GuidePage'>
            <div className='GuidePageStyling'>
                <AwarenessAwpTitle />
                <AwarenessAwpText />
            </div>
        </div>
    )
}

export default AwarenessAwpHome