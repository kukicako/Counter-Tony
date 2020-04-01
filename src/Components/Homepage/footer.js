import React from 'react';
import styled from 'styled-components';
// import logo from '../images/logo.png'
import {Link} from 'react-router-dom';

const NavBar = styled.nav`
    display:flex;
    width:100%;
    height:4.5em;
    background: white
    color: blue;
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



const StyledP = styled.p`
width:20%;
color: green;
padding-top:5em;

padding-left:3%
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
               <StyledP><Link to="">Twitter</Link></StyledP>
               <StyledP><Link to="">Stream</Link></StyledP>
               <StyledP><Link to="">Gram</Link></StyledP>
               <StyledP><Link to="">Find Us!</Link></StyledP>

           </NavRight>
       </NavBar>
    );
}

export default Nav;