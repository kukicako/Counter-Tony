import React, {useState} from "react";
import {Link} from 'react-router-dom';
import sniper from '../images/sniper.jpg'
import lurk from '../images/lurk.jpg'
import entry from '../images/entry.jpg'
import csgo from '../images/lead.jfif'
import youtube from '../images/dust2youtube.jpg'
import inferno from '../images/inferno.jpg'
import flip from '../images/flip.jpg'
import Modal from '../Appointment/modal'
import useModal from '../Appointment/useModal'
import AppointmentModal from '../Appointment/appointmentform'
import ReactGA from "react-ga";


const Guide = props => {
  const {isShowing, toggle} = useModal();
  const [modalState, setModalState] = useState();


  const SmocClicked = link => {
    ReactGA.event({ category: 'Data', 
    action: `clicked ${link} link` });
}
  
    return(
      <div className = "Guide-cards">
        <Modal
            isShowing={isShowing}
            hide={toggle}
            component={modalState}
        />
      <div className="guide-text-homepage">
        <h1>Check Out Our Guides:</h1>
      </div>
        <div className="four-cards">
          <div class="card-transparent">
            <img className="leading-pic" src={csgo} alt="leading pic" />
          </div>
          <div class="card-transparent">
          <img className="lurk-pic" src={lurk} alt="lurk pic" />
          </div>
          <div class="card-transparent">
            <img className="entry-pic" src={entry} alt="entry pic" />
          </div>
          <div class="card-transparent">
            <img className="sniper-pic" src={sniper} alt="sniper pic" />
          </div>
      </div>
      <div className="guide-text-homepage">
        <h1>Additional Resources:</h1>
      </div>
      <div className="bottom-cards">
        
          <div class="youtube-card">
            <a href="https://www.youtube.com/channel/UCUdRyJpHQSjolXMi94PLa_Q/featured" className="youtube-button">
              <img className="youtube-image"src={youtube} alt="youtube" />
            </a>
          </div>

        {/*  THE APPOINTMENT BUTTON CARD */}

        <div class="header-appointment-card">
             
                <Link onClick={() => SmocClicked (setModalState(<AppointmentModal/>), toggle())}  style={{cursor: "pointer"}}>
                <img className="appointment-image" src={inferno} alt="appointment"/></Link>   
          
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
            <img className="flip-image" src={flip} alt="flip"/>
            </div>
            <div class="flip-card-back">
              <div className="names">
                <h6 className="the-names">David "Gatr" Downes</h6>
                <h6 className="the-names">Muamer "Dia" Kukic</h6>
                <h6 className="the-names">Anthony "Dawn" Hagopian</h6>
                <h6 className="the-names">Josh "Spoice" blahhh</h6>

              </div>
              <div className="media">
                <div className="the-links"></div>
                <div className="the-links"></div>
                <div className="the-links"></div>
                <div className="the-links"></div>

              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
    )
}

export default Guide;