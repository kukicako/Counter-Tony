import React from "react";
// import csgo from '../images/css.jpg'
import {Link} from 'react-router-dom';
import brain from '../images/brain.svg'
import leader from '../images/leader.png'
import lurk from '../images/lurk.png'
import awp from '../images/awp.png'
import cash from '../images/cash.png'
const Youtube = props => {
    return(
      <div class="guide-flip-card">
      <div class="guide-flip-card-inner">
        <div class="guide-flip-card-front">
          <p>Guides</p>
          {/* <img className="csgo-pic" src={brain}></img> */}
        </div>
        <div class="guide-flip-card-back">
          <div className = "guide-left">
            <div className="guide-same">
              <Link to="" className="guide-links">In-Game Leading</Link>
              <img className="guide-img" src={brain}></img>
            </div>
            <div className="guide-same">
              <Link to="" className="guide-links2">Entry Fragging</Link> 
              <img className="guide-img" src={leader}></img>
             </div>
             <div className="guide-same">
              <Link to="" className="guide-links3">Lurk Lore</Link> 
              <img className="guide-img" src={lurk}></img>
            </div>
          </div>
          <div className="guide-right">
            <div className="guide-same" >
              <Link to="" className="guide-links">Awp Role</Link>
              <img className="guide-img" src={awp}></img>
            </div>
            <div className="guide-same">
              <Link to="" className="guide-links2">Economy</Link> 
              <img className="guide-img" src={cash}></img>
            </div>
            <div className="guide-same">
              <Link to="" className="guide-links3">Economy</Link> 
              <img className="guide-img" src={cash}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Youtube;