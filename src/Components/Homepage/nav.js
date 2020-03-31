import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png'
import {Link} from 'react-router-dom';

const NavBar = styled.nav`
    display:flex;
    width:100%;
    height:4em;
    background: white;
    color: blue;
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
    width:60%;
    justify-content: flex-end;
    align-items: center;

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

const StyledP = styled.a`
    padding:2%;
    color: blue;
    width:15%

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
               <StyledP><Link to="">Guides</Link> </StyledP>
               <StyledP href="https://www.w3schools.com">Stream</StyledP>
               <StyledP href="https://www.w3schools.com">Meet Tony</StyledP>

           </NavRight>
       </NavBar>
    );
}


export default Nav;