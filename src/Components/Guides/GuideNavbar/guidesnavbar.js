import React from 'react';
import './guidesnavbar.scss'
import { Link } from 'react-router-dom'

function CustomizedGuideSideBar() {
  return(
    <div className="GuideNavBar">

    <div className='dropdown'>
      <button className="dropbtn">INDIVIDUAL IMPROVEMENT</button>
      <div className="dropdown-content">
        <Link to='/Aiming'><a href="#">Aiming</a></Link>
        <Link to='/ImprovingUtility'><a href="#">Utility</a></Link>
        <Link to='/Pugging'><a href="#">Pugging</a></Link>
        <Link to='/Matchmaking'><a href="#">Matchmaking</a></Link>
        <Link to='/League'><a href="#">ESEA League Play</a></Link>
      </div>
    </div>

    <div className='dropdown'>
      <button className="dropbtn">Entry Fragging</button>
      <div className="dropdown-content">
        <Link to='/Aiming'><a href="#">Aiming</a></Link>
        <Link to='/ImprovingUtility'><a href="#">Utility</a></Link>
        <Link to='/Pugging'><a href="#">Pugging</a></Link>
        <Link to='/Matchmaking'><a href="#">Matchmaking</a></Link>
        <Link to='/League'><a href="#">ESEA League Play</a></Link>
      </div>
    </div>

    <div className='dropdown'>
      <button className="dropbtn">Support Player</button>
      <div className="dropdown-content">
        <Link to='/Aiming'><a href="#">Aiming</a></Link>
        <Link to='/ImprovingUtility'><a href="#">Utility</a></Link>
        <Link to='/Pugging'><a href="#">Pugging</a></Link>
        <Link to='/Matchmaking'><a href="#">Matchmaking</a></Link>
        <Link to='/League'><a href="#">ESEA League Play</a></Link>
      </div>
    </div>

    <div className='dropdown'>
      <button className="dropbtn">Lurking</button>
      <div className="dropdown-content">
        <Link to='/Aiming'><a href="#">Aiming</a></Link>
        <Link to='/ImprovingUtility'><a href="#">Utility</a></Link>
        <Link to='/Pugging'><a href="#">Pugging</a></Link>
        <Link to='/Matchmaking'><a href="#">Matchmaking</a></Link>
        <Link to='/League'><a href="#">ESEA League Play</a></Link>
      </div>
    </div>

    <div className='dropdown'>
      <button className="dropbtn">In Game Leading</button>
      <div className="dropdown-content">
        <Link to='/Aiming'><a href="#">Aiming</a></Link>
        <Link to='/ImprovingUtility'><a href="#">Utility</a></Link>
        <Link to='/Pugging'><a href="#">Pugging</a></Link>
        <Link to='/Matchmaking'><a href="#">Matchmaking</a></Link>
        <Link to='/League'><a href="#">ESEA League Play</a></Link>
      </div>
    </div>

    <div className='dropdown'>
      <button className="dropbtn">Main AWPer</button>
      <div className="dropdown-content">
        <Link to='/Aiming'><a href="#">Aiming</a></Link>
        <Link to='/ImprovingUtility'><a href="#">Utility</a></Link>
        <Link to='/Pugging'><a href="#">Pugging</a></Link>
        <Link to='/Matchmaking'><a href="#">Matchmaking</a></Link>
        <Link to='/League'><a href="#">ESEA League Play</a></Link>
      </div>
    </div>

    </div>
  )
}

export default CustomizedGuideSideBar;
