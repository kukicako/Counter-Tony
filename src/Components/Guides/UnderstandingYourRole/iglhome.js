import React from 'react'
import IGLTitle from './igltitle.js'
import IGLText from './igltext.js'

function IGLingHome() {
    return(
        <div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                    <IGLTitle />
                    <IGLText />
                </div>
            </div>
        </div>
    )
}

export default IGLingHome;