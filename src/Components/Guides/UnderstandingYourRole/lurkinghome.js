import React from 'react'
import LurkTitle from './lurkingtitle.js'
import LurkText from './lurkingtext.js'
import GuideSidebar from '../guidesidebar.js'

function LurkerHome() {
    return(
        <div>
            <div>
                <GuideSidebar />
            </div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                    <LurkTitle />
                    <LurkText />
                </div>
            </div>
        </div>
    )
}

export default LurkerHome;