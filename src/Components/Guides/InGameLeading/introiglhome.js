import React from 'react'
import IntroIglTitle from './introigltitle.js'
import IntroIglText from './introigltext.js'
import Guidesidebar from '../guidesidebar.js'


function IGLHome() {
    return(
        <div className='GuidePage'>
            <Guidesidebar />
            <div className='GuidePageStyling'>
                <IntroIglTitle />
                <IntroIglText />
            </div>
        </div>
    )
}

export default IGLHome