import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png'
import {Link} from 'react-router-dom';

const NavBar = styled.nav`
    display:flex;
    width:100%;
    height:1em;
    color: #ADEFD1FF;
    `
;


const NavTitle = styled.h3`
font-size: xx-large;
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
align-items: center;

    `
;

const Logo = styled.img`
height:2%;
width:12%;
    `
    
;

const StyledP = styled.a`
width:20%;
color: blue;
padding-top:4em;
padding-bottom:1em;


    `
;

const Nav = () => {
    return (
        <NavBar>
           <NavLeft>
           </NavLeft>
           <NavMiddle>
           </NavMiddle>
           <NavRight>
                <StyledP><Link to="">Guides</Link> </StyledP>
               <StyledP href="https://www.w3schools.com">Twitter</StyledP>
               <StyledP href="https://www.w3schools.com">Twitch</StyledP>
               <StyledP href="https://www.w3schools.com">Gram</StyledP>
               <StyledP href="https://www.w3schools.com">Find Us</StyledP>

           </NavRight>
       </NavBar>
    );
}


export default Nav;