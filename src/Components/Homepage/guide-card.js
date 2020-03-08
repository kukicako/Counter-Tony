import React from "react";
// import csgo from '../images/css.jpg'
import {Link} from 'react-router-dom';
import sniper from '../images/sniper.jpg'
import lurk from '../images/lurk.jpg'
import entry from '../images/entry.jpg'
import csgo from '../images/lead.jfif'


const Guide = props => {
    return(
      <div className = "Guide-cards">
        <div class="card-transparent">
          <img className="leading-pic" src={csgo} />
        <Link className="guide-Link">  <strong>LEADING</strong></Link>
        </div>
        <div class="card-transparent">
        <img className="leading-pic" src={lurk} />
        <Link className="guide-Link"> <strong>LURK</strong></Link>
        </div>
        <div class="card-transparent">
          <img className="leading-pic" src={entry} />
        <Link className="guide-Link" ><strong>ENTRY</strong></Link>
        </div>
        <div class="card-transparent">
          <img className="leading-pic" src={sniper} />
        <Link className="guide-Link" ><strong>AWP</strong></Link>
        </div>
        

      </div>
    )
}

export default Guide;