import {React, useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import navBarLogo from "../../images/nav-bar logo.svg";
import './index.scss';
import {
    useScrollSection,
} from 'react-scroll-section';

const Navigation = () => {
    const [isActive, setActive] = useState("false");

    const aboutSection = useScrollSection('about');
    const logoSection = useScrollSection('logo');
    const graphicsSection = useScrollSection('graphics');
    const sketchSection = useScrollSection('sketch');
    const contactSection = useScrollSection('contact');
    const ToggleClass = () => {
        setActive(!isActive);

    };
    return (

        <Router>
            <header>
                <button className={`hamburger ${isActive ? "" : "hamburger--active"}`}
                        aria-label="Menu"
                        onClick={ToggleClass}>
                <span className="hamburger__container" tabIndex="-1">
                  <span className="hamburger__bars"></span>
                </span>
                </button>
                <nav className={`nav ${isActive ? "" : "nav--active"}`}>
                    <ul>
                        <li>
                            <a onClick={aboutSection.onClick} selected={aboutSection.selected}>o mnie</a>
                        </li>
                        <li>
                            <a onClick={logoSection.onClick} selected={logoSection.selected}>logo</a>
                        </li>
                        <li>
                            <a onClick={graphicsSection.onClick} selected={graphicsSection.selected}>grafika</a>
                        </li>
                        <li>
                            <a onClick={sketchSection.onClick} selected={sketchSection.selected}>rysunek</a>
                        </li>
                        <li>
                            <a onClick={contactSection.onClick} selected={contactSection.selected}>kontakt</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </Router>
    );
}

export default Navigation;
