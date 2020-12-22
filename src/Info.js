import React from 'react';
import './Info.css';
function Info({image,desc,name}) {
    return (
        <div className="info">
            <img className="img_info" src={image} /> 
            <div className="desc_info">
              <h1>{name}</h1>
              <p>{desc}</p>
            </div>
        </div>
    )
}

export default Info
