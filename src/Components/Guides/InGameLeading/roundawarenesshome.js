import React from 'react'
import RoundAwarenessTitle from './roundawarenesstitle.js'
import RoundAwarenessText from './roundawarenesstext.js'


function RoundAwarenessHome() {
    return(
        <div className='GuidePage'>
            <div className='GuidePageStyling'>
                <RoundAwarenessTitle />
                <RoundAwarenessText />
            </div>
        </div>
    )
}

export default RoundAwarenessHome;