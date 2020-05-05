import React from 'react';
import daveed from '../images/daveed.png'
import muam from '../images/muam.png'


const ContactUs = () => {
    return (
        <div className="contact-container">
            <div className="muamer">
                <div className="img-container">
                    <img className="cont-img" src={muam}></img>
                </div>
                <div className="cont-title">
                    <h1 className="name"> Muamer Kukic</h1>
                </div>
                <div className="role">
                    <h3 class="role-text">Software Engineer</h3>
                </div>
               
                <div className="mail">
                    <a href="mailto:kukicako1@gmail.com?subject = Feedbackbody = Message" className="mail-text">Kukicako1@gmail.com</a>
                </div>

            </div>
            <div className="sexy-bar">

            </div>

            <div className="david">
                <div className="img-container">
                    <img className="cont-img" src={daveed}></img>
                </div>
                <div className="cont-title">
                    <h1 className="name">David Downes</h1>
                </div>
                <div className="role">
                    <h3 class="role-text">Full Stack Developer/Author</h3>
                </div>
                <div className="mail">
                    <a href="mailto:kukicako1@gmail.com?subject = Feedbackbody = Message" className="mail-text">david@mail.com</a>
                </div>

            </div>

       </div>
    );
}


export default ContactUs;