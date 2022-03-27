import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import navBarLogo from "../../images/nav-bar logo.svg";
import './index.css';
import './hamburger.scss';

const menu = document.querySelector('.hamburger');
const handleToggleClass = () => {
    menu.classList.toggle('hamburger--active');
}
const Navigation = () => {
    return (

        <Router>
            <header className="navbar">
                <a href="#">
                    <img alt=""
                         className="navbar-logo"
                         src={navBarLogo}/>
                </a>
                <button className="hamburger"
                        aria-label="Menu"
                        onClick={handleToggleClass}>
                <span className="hamburger__container" tabIndex="-1">
                  <span className="hamburger__bars"></span>
                </span>
                </button>
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
