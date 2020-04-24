import React from 'react'
import EntryTitle from './entrytitle.js'
import EntryText from './entrytext.js'
import GuideSidebar from '../guidesidebar.js'

function EntryingHome() {
    return(
        <div>
            <div>
                <GuideSidebar />
            </div>
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