import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className="header">
        <div className="logo">
        <Link to="/">
            <img className="imgh" src="https://saenitk.files.wordpress.com/2020/05/sae-nitk-club-logo-jpg-file-1.png?w=697" />
            </Link>
        </div>
        <div className="right_h">
            <Link className="hh2" to = "/">
            <h3 className="hh2">Home</h3>
            </Link>
            <Link to="/about" className="hh2">
            <h3 className="hh2" >About Us</h3>
            </Link>
            <Link className="hh2" to="/blog">
            <h3 className="hh2">Blogs</h3>
            </Link>
            <Link to ="/club" className="hh2">
            <h3 className="hh2">Club Members</h3>
            </Link>
            <Link className="hh2" to="/project">
            <h3 className="hh2">Projects</h3>
            </Link>
            <h3 className="hh">Events And Magazines</h3>
            <Link className="hh2" to="/message">
            <h3 className="hh2">Message from Alumni</h3>
            </Link>
        </div> 
            
        </div>
    )
}

export default Header
