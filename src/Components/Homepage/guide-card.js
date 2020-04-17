import React, {useState} from "react";
import {Link} from 'react-router-dom';
import sniper from '../images/sniper.jpg'
import entry from '../images/entry.jpg'
import youtube from '../images/dust2youtube.jpg'
import inferno from '../images/inferno.jpg'
import Modal from '../Appointment/modal'
import useModal from '../Appointment/useModal'
import AppointmentModal from '../Appointment/appointmentform'
import ReactGA from "react-ga";
import drawing from '../images/Drawing.png'
import igl1 from '../images/igl1.png'
import tonycreation2 from '../images/tonycreation2.png'


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
        <div className="four-cards">
          <div className="guide-text-homepage-top">
            <h1 className="guide-text-homepage">Check Out Our Guides:</h1>
          </div>
          <div class="image-left">
            <img className="leading-pic" src={drawing} alt="leading pic" />
            <p className="left-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sit amet venenatis urna cursus eget nunc scelerisque. Massa id neque aliquam vestibulum morbi. Enim nulla aliquet porttitor lacus luctus. Urna molestie at elementum eu facilisis sed. Volutpat sed cras ornare arcu dui. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Ipsum dolor sit amet consectetur adipiscing elit. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.</p>
          </div>
          <div class="image-right">
          <img className="lurk-pic" src={igl1} alt="lurk pic" />
          <p className="right-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sit amet venenatis urna cursus eget nunc scelerisque. Massa id neque aliquam vestibulum morbi. Enim nulla aliquet porttitor lacus luctus. Urna molestie at elementum eu facilisis sed. Volutpat sed cras ornare arcu dui. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Ipsum dolor sit amet consectetur adipiscing elit. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.</p>
          </div>
          <div class="image-left">
            <img className="entry-pic" src={entry} alt="entry pic" />
            <p className="left-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sit amet venenatis urna cursus eget nunc scelerisque. Massa id neque aliquam vestibulum morbi. Enim nulla aliquet porttitor lacus luctus. Urna molestie at elementum eu facilisis sed. Volutpat sed cras ornare arcu dui. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Ipsum dolor sit amet consectetur adipiscing elit. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.</p>
          </div>
          <div class="image-right">
            <img className="sniper-pic" src={sniper} alt="sniper pic" />
            <p className="right-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sit amet venenatis urna cursus eget nunc scelerisque. Massa id neque aliquam vestibulum morbi. Enim nulla aliquet porttitor lacus luctus. Urna molestie at elementum eu facilisis sed. Volutpat sed cras ornare arcu dui. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Ipsum dolor sit amet consectetur adipiscing elit. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida.</p>
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
              
                  <Link onClick={() => SmocClicked (setModalState(<AppointmentModal/>), toggle())}  style={{cursor: "pointer"}}>
                  <img className="appointment-image" src={inferno} alt="appointment"/></Link>   
            
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