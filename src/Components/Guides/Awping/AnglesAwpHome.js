import React from 'react'
import AnglesAwpText from './AnglesAwpText.js'
import AnglesAwpTitle from './AnglesAwpTitle.js'
import Guidesidebar from '../guidesidebar.js'


function AnglesAwpHome() {
    return(
        <div className='GuidePage'>
            <Guidesidebar />
            <div className='GuidePageStyling'>
                <AnglesAwpTitle />
                <AnglesAwpText />
            </div>
        </div>
    )
}

export default AnglesAwpHome