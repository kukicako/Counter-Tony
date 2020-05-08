import React from 'react';
import './guidesnavbar.scss'
import { Link } from 'react-router-dom'

function CustomizedGuideSideBar() {
  return(
    <div className="GuideNavBar">

    <div className='dropdown'>
      <button className="dropbtn">Individual Improvement</button>
      <div className="dropdown-content">
        <Link to='/Aiming'><a className="dropdownlink" href="#">Aiming</a></Link>
        <Link to='/ImprovingUtility'><a className="dropdownlink" href="#">Utility</a></Link>
        <Link to='/Pugging'><a className="dropdownlink" href="#">Pugging</a></Link>
        <Link to='/Matchmaking'><a className="dropdownlink" href="#">Matchmaking</a></Link>
        <Link to='/League'><a className="dropdownlink" href="#">ESEA League Play</a></Link>
      </div>
    </div>

    <div className='dropdown'>
      <button className="dropbtn">Entry</button>
      <div className="dropdown-content">
        <Link to='/IntroductionEntry'><a className="dropdownlink" href="#">Introduction</a></Link>
        <Link to='/UnderstandingEntry'><a className="dropdownlink" href="#">Understanding</a></Link>
        <Link to='/AnglesEntry'><a className="dropdownlink" href="#">Angles</a></Link>
        <Link to='/CommunicationEntry'><a className="dropdownlink" href="#">Communication</a></Link>
        <Link to='/SpacingEntry'><a className="dropdownlink" href="#">Spacing</a></Link>
        <Link to='/TimingEntry'><a className="dropdownlink" href="#">Timing</a></Link>
      </div>
    </div>

    <div className='dropdown'>
      <button className="dropbtn">Support</button>
      <div className="dropdown-content">
        <Link to='/Aiming'><a className="dropdownlink" href="#">Aiming</a></Link>
        <Link to='/ImprovingUtility'><a className="dropdownlink" href="#">Utility</a></Link>
        <Link to='/Pugging'><a className="dropdownlink" href="#">Pugging</a></Link>
        <Link to='/Matchmaking'><a className="dropdownlink" href="#">Matchmaking</a></Link>
        <Link to='/League'><a className="dropdownlink" href="#">ESEA League Play</a></Link>
      </div>
    </div>

    <div className='dropdown'>
      <button className="dropbtn">Lurk</button>
      <div className="dropdown-content">
        <Link to='/Aiming'><a className="dropdownlink" href="#">Aiming</a></Link>
        <Link to='/ImprovingUtility'><a className="dropdownlink" href="#">Utility</a></Link>
        <Link to='/Pugging'><a className="dropdownlink" href="#">Pugging</a></Link>
        <Link to='/Matchmaking'><a className="dropdownlink" href="#">Matchmaking</a></Link>
        <Link to='/League'><a className="dropdownlink" href="#">ESEA League Play</a></Link>
      </div>
    </div>

    <div className='dropdown'>
      <button className="dropbtn">In Game Leading</button>
      <div className="dropdown-content">
        <Link to='/Aiming'><a className="dropdownlink" href="#">Aiming</a></Link>
        <Link to='/ImprovingUtility'><a className="dropdownlink" href="#">Utility</a></Link>
        <Link to='/Pugging'><a className="dropdownlink" href="#">Pugging</a></Link>
        <Link to='/Matchmaking'><a className="dropdownlink" href="#">Matchmaking</a></Link>
        <Link to='/League'><a className="dropdownlink" href="#">ESEA League Play</a></Link>
      </div>
    </div>

    <div className='dropdown'>
      <button className="dropbtn">AWP</button>
      <div className="dropdown-content">
        <Link to='/AWPIntroduction'><a className="dropdownlink" href="#">Introduction</a></Link>
        <Link to='/AWPAwareness'><a className="dropdownlink" href="#">Awareness + Understanding Timings</a></Link>
        <Link to='/AWPAngles'><a className="dropdownlink" href="#">Angles + Positioning</a></Link>
      </div>
    </div>

    </div>
  )
}

export default CustomizedGuideSideBar;
