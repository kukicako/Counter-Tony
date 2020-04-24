import React from 'react'
import AwpTitle from './awpingtitle.js'
import AwpText from './awpingtext.js'
import GuideSidebar from '../guidesidebar.js'

function AwpHome() {
    return(
        <div>
            <div>
                <GuideSidebar />
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                    <AwpTitle />
                    <AwpText />
                </div>
            </div>
        </div>
    )
}

export default AwpHome;