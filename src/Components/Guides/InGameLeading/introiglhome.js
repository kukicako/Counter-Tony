import React from 'react'
import IntroIglTitle from './introigltitle.js'
import IntroIglText from './introigltext.js'


function IGLHome() {
    return(
        <div className='GuidePage'>
            <div className='GuidePageStyling'>
                <IntroIglTitle />
                <IntroIglText />
            </div>
        </div>
    )
}

export default IGLHome