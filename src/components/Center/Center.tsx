import React from "react";
import centerBackground from '../../images/dyno.jpg';
// const btn = document.getElementById('btn');

function Center() {
    
    return (
        <div className="center">
            <div className="container">
                <img className="centerImage" src={centerBackground}></img>
                <button id='btn'>click</button>
            </div>

        </div>
    )
}

export default Center;