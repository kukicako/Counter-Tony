import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png'
import {Link} from 'react-router-dom';

const NavBar = styled.nav`
    display:flex;
    width:100%;
    height:3em;
    background: #35373B;
    color: white;
    `
;


const NavTitle = styled.h3`
padding-top:1%;
`
;
const NavLeft = styled.div`
width:33%
    `
;

const NavMiddle = styled.p`
width:33%
    `
;

const NavRight = styled.div`
display:flex;
flex-wrap:wrap;
width:33%;
justify-content: flex-end;

    `
;

const Logo = styled.img`
height:2%;
width:12%;
    `
    
;

const StyledP = styled.p`
padding:2%;
width:30%

    `
;

const Nav = () => {
    return (
        <NavBar>
           <NavLeft>
               <div>
                   <Logo src={logo} />
               </div>
               
           </NavLeft>
           <NavMiddle>
               <NavTitle>Tony Guides</NavTitle>
           </NavMiddle>
           <NavRight>
               <StyledP><Link to="" className="nav-links">Guides</Link> </StyledP>
               <StyledP><Link to="" className="nav-links">Stream</Link></StyledP>
               <StyledP><Link to="" className="nav-links">Meet Tony!</Link></StyledP>

           </NavRight>
       </NavBar>
    );
}


export default Nav;