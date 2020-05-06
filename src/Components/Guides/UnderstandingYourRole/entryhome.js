import React from 'react'
import EntryTitle from './entrytitle.js'
import EntryText from './entrytext.js'

function EntryingHome() {
    return(
        <div>
            <div className='GuidePage'>
                <div className='GuidePageStyling'>
                    <EntryTitle />
                    <EntryText />
                </div>
            </div>
        </div>
    )
}

export default EntryingHome;