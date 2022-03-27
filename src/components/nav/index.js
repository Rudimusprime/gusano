import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import navBarLogo from "../../images/nav-bar logo.svg";
import './index.css';

const Navigation = () => {
    return (
        <Router>
            <header className="navbar">
                    <a href="#">
                        <img alt=""
                             className="navbar-logo"
                             src={navBarLogo}/>
                    </a>
                    <nav className="nav-links">
                        <ul>
                            <li>
                                <a href="#about">o mnie</a>
                            </li>
                            <li>
                                <a href="#graphics">grafika</a>
                            </li>
                            <li>
                                <a href="#sketch">rysunek</a>
                            </li>
                            <li>
                                <a href="#kontakt">kontakt</a>
                            </li>
                        </ul>
                    </nav>
            </header>
        </Router>
    );
}

export default Navigation;
