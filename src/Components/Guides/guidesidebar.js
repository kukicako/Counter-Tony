import React from 'react';
import CustomizedMenu1 from './GuideNavbar/guidesnavbar.js'
import CustomizedMenu2 from './GuideNavbar/guidesnavbar2.js'
import CustomizedMenu3 from './GuideNavbar/guidesnavbar3.js'
import CustomizedMenu4 from './GuideNavbar/guidesnavbar4.js'
import CustomizedMenu5 from './GuideNavbar/guidesnavbar5.js'
import CustomizedMenu6 from './GuideNavbar/guidesnavbar6.js'
import CustomizedMenu7 from './GuideNavbar/guidesnavbar7.js'
import CustomizedMenu8 from './GuideNavbar/guidesnavbar8.js'


function GuideSidebar() {
    return(
        <div className="GuideNavBar">
            <CustomizedMenu1 />
            <CustomizedMenu2 />
            <CustomizedMenu3 />
            <CustomizedMenu4 />
            <CustomizedMenu5 />
            <CustomizedMenu6 />
            <CustomizedMenu7 />
            <CustomizedMenu8 />
        </div>
    )
}

export default GuideSidebar;
