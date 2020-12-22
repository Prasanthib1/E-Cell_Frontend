import React from 'react';
import './Info1.css';

function Info1({image,name,desc}) {
    return (
        <div className="info_1">
           <div className="img_info1"><img src={image} /></div>
           <div className="desc_info1">
            <h1>{name}</h1>
            <p>{desc}</p>
           </div>
        </div>
    )
}

export default Info1;

