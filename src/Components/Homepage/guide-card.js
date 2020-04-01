import React from "react";
import {Link} from 'react-router-dom';
import sniper from '../images/sniper.jpg'
import lurk from '../images/lurk.jpg'
import entry from '../images/entry.jpg'
import csgo from '../images/lead.jfif'
import youtube from '../images/dust2youtube.jpg'
import inferno from '../images/inferno.jpg'
import flip from '../images/flip.jpg'


const Guide = props => {
  
    return(
      <div className = "Guide-cards">
        <div className="four-cards">
          <div class="card-transparent">
            <img className="leading-pic" src={csgo} />
          <Link className="guide-Link">  <strong>LEADING</strong></Link>
          </div>
          <div class="card-transparent">
          <img className="lurk-pic" src={lurk} />
          <Link className="guide-Link"> <strong>LURK</strong></Link>
          </div>
          <div class="card-transparent">
            <img className="entry-pic" src={entry} />
          <Link className="guide-Link" ><strong>ENTRY</strong></Link>
          </div>
          <div class="card-transparent">
            <img className="sniper-pic" src={sniper} />
          <Link className="guide-Link" ><strong>AWP</strong></Link>
          </div>
      </div>
      <div className="bottom-cards">
        
          <div class="youtube-card">
            <a href="https://www.youtube.com/watch?v=zVLTpRjt0PU" className="youtube-button">
              <img className="youtube-image"src={youtube} />
            </a>
          </div>

        {/*  THE APPOINTMENT BUTTON CARD */}

        <div class="header-appointment-card">
          <a href="https://www.youtube.com/watch?v=zVLTpRjt0PU" className="appointment-button">
            <img className="appointment-image" src={inferno}/>
          </a>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
            <img className="flip-image" src={flip}/>
            </div>
            <div class="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect  Engineer</p>
            <p>We love that guy</p>
            </div>
          </div>
        </div>
      </div>

      </div>
    )
}

export default Guide;