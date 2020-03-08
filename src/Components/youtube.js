import React from "react";
import youtubePic from "../images/youtubePic.png"

const Youtube = props => {
    return(
      <div class="youtube-flip-card">
      <div class="youtube-flip-card-inner">
        <div class="youtube-flip-card-front">
          <img className="youtube-pic" src={youtubePic}></img>
        </div>
        <div class="youtube-flip-card-back">
        <iframe 
        width="700" 
        height="400" 
        src="https://www.youtube.com/embed/HZu29rVkmzU" 
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        </div>
      </div>
    </div>
    )
}

export default Youtube;