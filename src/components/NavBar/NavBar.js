import React from 'react';
import "./NavBar.scss";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="menu">
                <Link to="/about">about</Link>
                <Link to="/browse">browse</Link>
                <Link to="/profile">profile</Link>
                        
            </div>
        </div>
    )
}

export default NavBar;