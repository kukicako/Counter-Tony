import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const FooterBar = styled.div`
    display: flex;
    justify-content: space-between;
    background: #35373B;
    color: white;
    position: sticky;
    top: 0;
    padding: 0.25em 1em 0.25em 1em;
    height:3em;`
;

const FooterLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    `
;

const FooterTitle = styled.h3`
    padding-left: 1em;
    
    `
;

const FooterRight = styled.div`
    display: flex;
    align-items: center;`
;

const StyledP = styled.p`
    padding-right: 12px;`
;

const Footer = () => {
    return (
        <FooterBar>
           <FooterLeft>
               <FooterTitle>Copyright US mofo</FooterTitle>
           </FooterLeft>
           <FooterRight>
               <StyledP>Guides</StyledP>
               <StyledP>Stream</StyledP>
               <StyledP>Twitch</StyledP>
               <StyledP>Twitter</StyledP>
               <StyledP>Gram</StyledP>
               <StyledP>About Us</StyledP>

           </FooterRight>
       </FooterBar>
    );
}


export default Footer;