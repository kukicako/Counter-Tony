import React from 'react';
import styled from 'styled-components';
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
    padding-top:5%;
    text-decoration: none;
    &:hover {
        color:blue !important
    }
    
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



const StyledP = styled.a`
    width:18%;
    padding:2%;
    color: blue;
    font-size: large;


    `
;

const Nav = () => {
    return (
        <NavBar>
           <NavLeft>
                
                <Link to="/"><NavTitle>CSGO-Teacher</NavTitle></Link>    
           </NavLeft>

           <NavRight>
               <StyledP><Link to="/Guides">Guides</Link> </StyledP>
               <StyledP href="https://www.w3schools.com">Streams</StyledP>
               <StyledP href="https://www.w3schools.com">Teachers</StyledP>

           </NavRight>
       </NavBar>
    );
}


export default Nav;