import React, { Component } from "react";

import "./Navbar.css";
import Logo from "../Logo/Logo";
import Menu from "./Menu/Menu.jsx";

class Navbar extends Component {
    state = {
        logoText: "Linda Ikeji's Blog"
    }
    render() {
        return (
            <div className="navbar">
                <Logo text={this.state.logoText} />
                <Menu /> 
            </div>
        )
    }
}

export default Navbar;