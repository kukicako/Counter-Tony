import React from "react";
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

        <div class="youtube-card">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/OelJsDwpQZI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        {/*  THE APPOINTMENT BUTTON CARD */}

        <div class="header-appointment-card">


        </div>
        <div class="twitch-card">
          <iframe src="https://player.twitch.tv/?channel=shablagooooo" frameborder="0" allowfullscreen="true" scrolling="no" height="100%" width="100%"></iframe><a href="https://www.twitch.tv/shablagooooo?tt_content=text_link&tt_medium=live_embed" ></a>
        </div>
        

      </div>
    )
}

export default Guide;