import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png'
import {Link} from 'react-router-dom';

const NavBar = styled.nav`
    display:flex;
    width:100%;
    height:4em;
    background: #00203FFF;
    color: #ADEFD1FF;
    `
;


const NavTitle = styled.h3`
    font-size: xx-large;
    padding-top:1%;
`
;
const NavLeft = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:50%
    `
;



const NavRight = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:50%;
    justify-content: flex-end;

    `
;

const Logo = styled.img`
    padding-left:2%;
    padding-right:2%;
    padding-top:2%;
    height:70%;
    width:10%;
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
                <Logo src={logo} />
                <NavTitle>Tony Guides</NavTitle>    
           </NavLeft>

           <NavRight>
               <StyledP><Link to="" className="nav-links">Guides</Link> </StyledP>
               <StyledP><Link to="" className="nav-links">Stream</Link></StyledP>
               <StyledP><Link to="" className="nav-links">Meet Tony!</Link></StyledP>

           </NavRight>
       </NavBar>
    );
}


export default Nav;