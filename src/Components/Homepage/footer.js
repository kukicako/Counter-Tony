import React from 'react';
import {Link} from 'react-router-dom';
// import logo from '../images/logo.png'


const Nav = () => {
    return (
        <div className="footer">
            <div className="copyright">
                <p style={{ padding: '0%', margin: '0%' }}>© 2020 CSGO-TEACHER. All Rights Reserved.</p>
            </div> 
            <div className="contact-privacy">
                <div className="priv">
                    <Link className="cont" to="/teachers">Privacy</Link>
                </div>
                <div className="priv">
                    <Link className="cont" to="/teachers">Contact</Link>
                </div>
            </div> 
        </div>
    );
}

export default Nav;