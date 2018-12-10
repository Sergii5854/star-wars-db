import React from 'react';
import './style.css'

const Header = () => {
    return (
        <div className="header d-flex">
            <h3 className="brand">
                <a href="#">
                    Star Wars DB
                </a>
            </h3>
            <ul className="d-flex header-ul">
                <li>
                    <a href="#">People</a>
                </li>
                <li>
                    <a href="#">Planets</a>
                </li>
                <li>
                    <a href="#">Starships</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;