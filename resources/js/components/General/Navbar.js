import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './styles/Navbar.css';

const Navbar = () => {
    const [height, setHeight] = useState(window.scrollY);
    const updateHeight = () => { setHeight(window.scrollY); }

    useEffect(() => {
        window.addEventListener("scroll", updateHeight);
        return() => window.removeEventListener("scroll", updateHeight);
    });

    return(
        <div className={`Navbar ${(height > 380) ? 'black' : 'white'}`}>
            <NavLink 
                to="/"
                className=""
                activeClassName="uppercase"
                isActive={(match, location) => {
                    if(!location.pathname.includes("projects")) return true;
                }}>
                Sobre mí
            </NavLink>
            <NavLink to="/projects" className="" activeClassName="uppercase">
                Trabajos
            </NavLink>
        </div>
    )
    
};

export default Navbar;