import React from 'react'
import RoundAwarenessTitle from './roundawarenesstitle.js'
import RoundAwarenessText from './roundawarenesstext.js'
import Guidesidebar from '../guidesidebar.js'


function RoundAwarenessHome() {
    return(
        <div className='GuidePage'>
            <Guidesidebar />
            <div className='GuidePageStyling'>
                <RoundAwarenessTitle />
                <RoundAwarenessText />
            </div>
        </div>
    )
}

export default RoundAwarenessHome;