import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import gusanoLogo from "../../images/about logo.svg";
import gusanoOwner from "../../images/gusanoOwner.svg";
import './index.css';

const About = () => {
    return (
        <Router>
            <div className="about">
                <img alt=""
                     className="about-logo"
                     src={gusanoLogo}/>
                <section className="about-me">
                    <img alt=""
                         className="avatar"
                         src={gusanoOwner}/>
                    <p className="description">Nazywam się Maciej Jańczak, jestem grafikiem i rysownikiem.
                        Zajmuję się głównie grafiką wektorową.
                        Projektuję logo, plakaty, ulotki, wzory na opakowania i odzież. Rysuję i maluję w różnych
                        technikach.
                        Pracuję jako grafik w drukarni fleksograficznej, a z wykształcenia jestem inżynierem
                        konstrukcji.
                    </p>
                </section>

            </div>
        </Router>
    );
}

export default About;
