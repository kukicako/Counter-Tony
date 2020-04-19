import React from 'react'
import StrategiesText from './strategiestext.js'
import StrategiesTitle from './strategiestitle.js'
import Guidesidebar from '../guidesidebar.js'


function RoundAwarenessHome() {
    return(
        <div className='GuidePage'>
            <Guidesidebar />
            <div className='GuidePageStyling'>
                <StrategiesTitle />
                <StrategiesText />
            </div>
        </div>
    )
}

export default RoundAwarenessHome;