import React from 'react';
import {Link} from 'react-router-dom';
import './nav.scss'


const Nav = () => {
    return (
        <nav className="NavBar">
           <div className="NavLeft">
                
                <Link to="/"><h3 className="NavTitle">CSGO-Teacher</h3></Link>    
           </div>

           <div className="NavRight">
               <Link className="StyledP" to="/Guides">Guides</Link>
               <Link className="StyledP" to="/Blog">Blogs</Link>
               <Link className="StyledP" to="/teachers">Teachers</Link>

           </div>
       </nav>
    );
}


export default Nav;