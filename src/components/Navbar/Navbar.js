import React, { Component } from "react";

import "./Navbar.css";
import Logo from "../Logo/Logo";

class Navbar extends Component {
    state = {
        logoText: "Linda Ikeji's Blog"
    }
    render() {
        return (
            <div className="navbar">
                <Logo text={this.state.logoText} />
            </div>
        )
    }
}

export default Navbar;