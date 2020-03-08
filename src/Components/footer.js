import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const FooterBar = styled.div`
    display: flex;
    justify-content: space-between;
    background: #35373B;
    color: white;
    align-content: flex-end;

    `
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
    align-items: center;
    justify-content:space-between;`
;

// const p = styled.p`
//     padding-right: 12px;`
// ;

const Footer = () => {
    return (
        <FooterBar>
           <FooterLeft>
               <FooterTitle>Copyright DA GAT MAN</FooterTitle>
           </FooterLeft>
           <FooterRight>
            <Link to="" className="nav-links">Guides</Link> 
            <Link to="" className="nav-links">Stream</Link> 
            <Link to="" className="nav-links">Twitch</Link> 
            <Link to="" className="nav-links">Twitter</Link> 
            <Link to="" className="nav-links">Gram</Link> 
            <Link to="" className="nav-links">Contact Us</Link> 
           </FooterRight>
       </FooterBar>
    );
}


export default Footer;