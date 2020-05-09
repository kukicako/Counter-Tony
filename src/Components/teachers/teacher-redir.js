import React from 'react';
import {Link} from 'react-router-dom';
import './teachers.scss'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Redir = () => {
    AOS.init()
    return (
        <div className="redir-contain">
            <div className="redir-top"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true">
                <div className="thanks-container">
                    <h3 className="thanks">Thanks for submitting!</h3>
                </div>
                <div className="contacter-container">
                    <h3 className="contacter">We will contact your email directly.</h3>
                </div>

            </div>
            <div className="redir-bottom"
           >
                <div className="dir-box"
                data-aos="fade-right"
                data-aos-offset="200"
                //  data-aos-delay="50"
                // data-aos-delay="200"
                data-aos-duration="1300"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true">
                   <Link className="linx" to="/"><div className="boxes">
                        <h2 className="werd1">Home</h2>
                    </div></Link>
                    
                </div>
                <div className="dir-box"  
                data-aos="fade-up"
                data-aos-offset="200"
                //  data-aos-delay="50"
                // data-aos-delay="200"
                data-aos-duration="1300"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true">
                   <Link className="linx" to="/Guides">
                       <div className="boxes2">
                        <h2 className="werd2">Guides</h2>
                    </div></Link>                   
                </div>
                <div className="dir-box"
                data-aos="fade-down"
                data-aos-offset="200"
                //  data-aos-delay="50"
                // data-aos-delay="200"
                data-aos-duration="1300"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true">
                   <Link className="linx" to="/Blog"> 
                   <div className="boxes3">
                        <h2 className="werd3">Blog</h2>
                    </div></Link>
                    
                </div>
                <div className="dir-box"
                data-aos="fade-left"
                data-aos-offset="200"
                //  data-aos-delay="50"
                // data-aos-delay="200"
                data-aos-duration="1300"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true">
                   <a className="linx" href="/Blog"> 
                   <div className="boxes4">
                        <h2 className="werd3">Youtube</h2>
                    </div></a>
                    
                </div>

            </div>


        </div>
    );
}

export default Redir;