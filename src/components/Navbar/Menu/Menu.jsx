import React from 'react';
import { NavLink } from "react-router-dom";

import "./Menu.css";

const Menu = () => {
    return (
        <div className="menu">
            <NavLink to="/"><span>Home</span></NavLink>
            <NavLink to="/posts"><span>Posts</span></NavLink>
            <NavLink to="/about"><span>About Us</span></NavLink>
        </div>
    );
};

export default Menu;