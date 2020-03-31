import React from "react";
import {Link} from 'react-router-dom';
import sniper from '../images/sniper.jpg'
import lurk from '../images/lurk.jpg'
import entry from '../images/entry.jpg'
import csgo from '../images/lead.jfif'
import youtube from '../images/dust2youtube.jpg'
import inferno from '../images/inferno.jpg'



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
            <button className="youtube-button">
          <img className="youtube-image"src={youtube} />
          </button>
          </div>

        {/*  THE APPOINTMENT BUTTON CARD */}

        <div class="header-appointment-card">
          <button className="appointment-button">
          <img className="appointment-image" src={inferno}/>
          </button>
        </div>
        <div class="twitch-card">
          <iframe src="https://player.twitch.tv/?channel=shablagooooo" frameborder="0" allowfullscreen="true" scrolling="no" height="100%" width="100%"></iframe><a href="https://www.twitch.tv/shablagooooo?tt_content=text_link&tt_medium=live_embed" ></a>
        </div>
      </div>

      </div>
    )
}

export default Guide;