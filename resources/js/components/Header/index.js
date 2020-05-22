import React from 'react';
import './Header.css';

const Header = () => {
    const IMAGE = "/img/header3.jpg";

    return(
        <div className="Header">
            <img src={IMAGE} alt="header" />
        </div>
    );
}

export default Header;