import React from "react";
import headerBackground from '../../images/cats.jpg';

function Header(){
    return(
        <div className="header">
            <img className="headerImage" src={headerBackground}></img>
        </div>
    )
}

export default Header;