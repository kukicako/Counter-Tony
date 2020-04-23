import React from 'react'
import StrategiesText from './strategiestext.js'
import StrategiesTitle from './strategiestitle.js'


function RoundAwarenessHome() {
    return(
        <div className='GuidePage'>
            <div className='GuidePageStyling'>
                <StrategiesTitle />
                <StrategiesText />
            </div>
        </div>
    )
}

export default RoundAwarenessHome;