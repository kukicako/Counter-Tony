import React from 'react'
import LurkTitle from './lurkingtitle.js'
import LurkText from './lurkingtext.js'

function LurkerHome() {
    return(
        <div>
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