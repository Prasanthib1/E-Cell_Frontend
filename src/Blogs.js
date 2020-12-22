import React from 'react';
import './Blogs.css';

function Blogs({image,desc}) {
    return (
        <div className="blogs">
          <img className="blogs_img" src={image} ></img>
          <div className="blogs_desc">
            <p>{desc}</p>
          </div>
        </div>
    )
}

export default Blogs
