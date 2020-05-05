import React, {useState} from 'react';
import {Link} from 'react-router-dom';
// import logo from '../images/logo.png'
import Modal from '../modals/modal'
import useModal from '../modals/useModal'
import Contactus from '../modals/contactus'
import Pmodal from '../modals/priv-modal'
import Privacy from '../modals/privacy'
import PrivUseModal from '../modals/privUseModal'


const Footer = () => {
    const {isShowing, toggle} = useModal();
    const {isAppear, tog} = PrivUseModal();
    const [modalState, setModalState] = useState();
    const [privState, setPrivState] = useState();

    return (
        <div className="footer">
            <Pmodal
             isShowing={isAppear}
             hide={tog}
             component={privState}
         />
             <Modal
            isShowing={isShowing}
            hide={toggle}
            component={modalState}
        />
            <div className="copyright">
                <p style={{ padding: '0%', margin: '0%' }}>© 2020 CSGO-TEACHER. All Rights Reserved.</p>
            </div> 
            <div className="contact-privacy">
                <div className="priv">
                    <Link onClick={() => (setPrivState(<Privacy/>), tog())}  style={{cursor: "pointer"}} className="cont">Privacy</Link>
                </div>
                <div className="priv">
                    <Link onClick={() => (setModalState(<Contactus/>), toggle())}  style={{cursor: "pointer"}} className="cont">Contact</Link>
                </div>
            </div> 
        </div>
    );
}

export default Footer;