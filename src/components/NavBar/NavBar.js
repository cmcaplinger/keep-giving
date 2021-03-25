import React from 'react';
import "./NavBar.scss";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="nav-bar">
				<Link to="/about">about</Link>
                <Link to="/profile">profile</Link>
                <Link to="/browse">browse</Link>

        </div>
    )
}

export default NavBar;