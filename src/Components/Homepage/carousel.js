import React from "react";

function HomeCarousel({ src }) {
    let imgStyles = {
        width: 100 +"%",
        height: 100 +"%"
    };
    
    return <img src={src} alt="slide pic" style={imgStyles} /> 
}

export default HomeCarousel

