import React from "react";
import footerBackground from '../../images/planets.jpg';
function Footer(){
    return(
        <div className="footer">
            <img className="footerImage" src={footerBackground}></img>
        </div>
    )
}

export default Footer;