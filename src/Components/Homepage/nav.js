import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import './nav.scss'


const Nav = () => {
    return (
        <nav className="NavBar">
           <div className="NavLeft">
                
                <Link to="/"><h3 className="NavTitle">CSGO-Teacher</h3></Link>    
           </div>

           <div className="NavRight">
               <a className="StyledP" ><Link className="StyledP" to="/Guides">Guides</Link> </a>
               <a className="StyledP" href="https://www.w3schools.com">Streams</a>
               <a className="StyledP" href="https://www.w3schools.com">Teachers</a>

           </div>
       </nav>
    );
}


export default Nav;