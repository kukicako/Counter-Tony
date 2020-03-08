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
          <button className="guide-button">  <strong>LEADING</strong></button>
        </div>
        <div class="card-transparent">
        <img className="leading-pic" src={lurk} />
          <button className="guide-button"> <strong>LURK</strong></button>
        </div>
        <div class="card-transparent">
          <img className="leading-pic" src={entry} />
          <button className="guide-button" ><strong>ENTRY</strong></button>
        </div>
        <div class="card-transparent">
          <img className="leading-pic" src={sniper} />
          <button className="guide-button" ><strong>AWP</strong></button>
        </div>

      </div>
    )
}

export default Guide;