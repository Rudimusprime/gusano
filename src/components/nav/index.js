import {React, useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import navBarLogo from "../../images/nav-bar logo.svg";
import './index.scss';

const Navigation = () => {
    const [isActive, setActive] = useState("false");

    const ToggleClass = () => {
        setActive(!isActive);
    };
    return (

        <Router>
            <header>
                <a href="#">
                    <img alt=""
                         className="navbar-logo"
                         src={navBarLogo}/>
                </a>
                <button className={`hamburger ${isActive ? "hamburger" : "hamburger--active"}`}
                        aria-label="Menu"
                        onClick={ToggleClass}>
                <span className="hamburger__container" tabIndex="-1">
                  <span className="hamburger__bars"></span>
                </span>
                </button>
                    <nav className={`nav ${isActive ? "nav" : "nav--active"}`}>
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
