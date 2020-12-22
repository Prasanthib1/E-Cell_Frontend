import React from 'react';
import './Club.css';

function Club({image,name}) {
    return (
        <div className="club">
            <div className="club_head">
                <h1>Club Members</h1>
            </div>
            <div className="members_c">
                <img className="img_cc"
                src={image} />
            </div>
            <div className="name_cc">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default Club
