import React, {useState} from "react";
import {Link} from 'react-router-dom';
import sniper from '../images/sniper.jpg'
import entry from '../images/entry.jpg'
import youtube from '../images/dust2youtube.jpg'
import inferno from '../images/inferno.jpg'
import ReactGA from "react-ga";
import drawing from '../images/Drawing.png'
import igl1 from '../images/lurk.jpg'
import tonycreation2 from '../images/tonycreation2.png'

import AOS from 'aos';
import 'aos/dist/aos.css';


const Guide = props => {
  AOS.init()
    return(
      <div className = "Guide-cards">
        <div className="four-cards">

          <div className="guide-text-homepage-top">
            <h1 className="guide-text-homepage">What Guides do we offer?</h1>
          </div>

          <div class="image-left" 
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true">
            <img className="leading-pic" src={drawing} alt="leading pic" />
            <div className="top-left-text">
              <h2 className="text-titles-homepage">Help You Improve Individually! </h2>
              <p>We have taken the tips and tricks from current FPL players and put them into guides you can learn and use to help you improve! There are over 30+ detailed guides, personalized one on one training with high level players, and a wide array of videos stemming from simple aim mechanics to strategies top teams have employed at the highest levels of Counter Strike.</p>
            </div>
          </div>

          <div class="image-right"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true">
            <img className="lurk-pic" src={igl1} alt="lurk pic" />
            <div className="middle-right-text">
              <h2 className="text-titles-homepage">Become a Leader</h2>
              <p>The orignal inspiration for this site. In-Game Leading is arguably one of the toughest roles in Counter Strike Global Offensive and can be the difference between your team advancing further or falling just short of the finish line. Its a dying role as it is so difficult to learn and manage, so we offer 7 guides written by Gatr who's spent the last 15 League Seasons thriving as an IGL, specifically created to help other IGLs!</p>
            </div>
          </div>

          <div class="image-left"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true">
            <img className="entry-pic" src={entry} alt="entry pic" />
            <div className="middle-left-text">
              <h2 className="text-titles-homepage">Rotate and Communicate</h2>
              <p >There is a wide array of roles in competitive Counter Strike and each role plays a crucial part to the success of your team and your career. Each role needs to understand it's job and needs to learn how to communicate effectively what they are doing in their role. Read specialized guides specifically created for each role to fully understand what is being asked from you on a round to round basis!</p>
            </div>
          </div>

          <div class="image-right"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true">
            <img className="sniper-pic" src={sniper} alt="sniper pic" />
            <div className="bottom-right-text">
              <h2 className="text-titles-homepage">Think Like A Pro</h2>
              <p >Make sure to check out our other dozens of guides for anything and everything competitive Counter Strike related written by Gatr with help from current FPL and MDL+ players! We also have our blog where we update current events in the Counter Strike world so that we can keep you up to to date on the latest meta or schedule an appointment with one of our high quality teachers.</p>
            </div>
          </div>

      </div>
      <div className="third-section">
        <div className="guide-text-homepage-bottom">
          <h1 className="guide-text-homepage">Additional Resources:</h1>
        </div>
        <div className="bottom-cards">
          
            <div class="youtube-card">
              <a href="https://www.youtube.com/channel/UCUdRyJpHQSjolXMi94PLa_Q/featured" className="youtube-button">
                <img className="youtube-image"src={youtube} alt="youtube" />
              </a>
            </div>

          {/*  THE APPOINTMENT BUTTON CARD */}

          <div class="header-appointment-card">
              <a href="/teachers" className="youtube-button"><img className="appointment-image" src={inferno} alt="appointment"/></a>  
            
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
              <img className="flip-image" src={tonycreation2} alt="flip"/>
              </div>
              <div class="flip-card-back">
                <div className="names">
                  <h6 className="the-names">David "Gatr" Downes</h6>
                  <h6 className="the-names">Muamer "Dia" Kukic</h6>
                  <h6 className="the-names">Anthony "dawn" Hagopian</h6>
                  <h6 className="the-names">Josh "Spoice" Betters</h6>

                </div>
                <div className="media">
                  <div className="the-links"><i class="fab fa-twitter"></i><i class="fab fa-youtube"></i><i class="fab fa-twitch"></i></div>
                  <div className="the-links"><i class="fab fa-twitter"></i><i class="fab fa-youtube"></i><i class="fab fa-twitch"></i></div>
                  <div className="the-links"><i class="fab fa-twitter"></i><i class="fab fa-youtube"></i><i class="fab fa-twitch"></i></div>
                  <div className="the-links"><i class="fab fa-twitter"></i><i class="fab fa-youtube"></i><i class="fab fa-twitch"></i></div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
    )
}

export default Guide;