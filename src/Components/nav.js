import React from 'react';
import styled from 'styled-components';
// import logo from '../WHEREVERTHEFUCK/logo.png'
import {Link} from 'react-router-dom';

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    background: #35373B;
    color: white;
    position: sticky;
    top: 0;
    padding: 0.25em 1em 0.25em 1em;
    height:3em;`
;

const NavLeft = styled.div`
    display: flex;
    align-items: center;`
;

const NavTitle = styled.h3`
    padding-left: 1em;
    font-weight: bold;
    font-size: 2rem;`
;

const NavRight = styled.div`
    display: flex;
    align-items: center;`
;

// const Logo = styled.img`
//     width: 10%;
//     height: 10%;
//     padding-right:150%;`
    
// ;

const StyledP = styled.p`
    padding-right: 12px;`
;

const Nav = () => {
    return (
        <NavBar>
           <NavLeft>
               <div>
                   {/* <Logo src={logo} /> */}
               </div>
               <NavTitle>Tony Guides</NavTitle>
           </NavLeft>
           <NavRight>
               <StyledP>Guides</StyledP>
               <StyledP>Stream</StyledP>
               <StyledP>Meet Tony!</StyledP>

           </NavRight>
       </NavBar>
    );
}


export default Nav;