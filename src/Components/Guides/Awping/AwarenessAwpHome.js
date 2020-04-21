import React from 'react'
import AwarenessAwpText from './AwarenessAwpText.js'
import AwarenessAwpTitle from './AwarenessAwpTitle.js'
import Guidesidebar from '../guidesidebar.js'


function AwarenessAwpHome() {
    return(
        <div className='GuidePage'>
            <Guidesidebar />
            <div className='GuidePageStyling'>
                <AwarenessAwpTitle />
                <AwarenessAwpText />
            </div>
        </div>
    )
}

export default AwarenessAwpHome