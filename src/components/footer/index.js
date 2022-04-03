import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import redmotionLogo from "../../images/redmotion logo.svg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import {faBehanceSquare, faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import './index.css';

const Footer = () => {
    return (
        <Router>
            <section className="footer">
                <div className="contact-footer">
                    <h3>kontakt</h3>
                    <div className="contact">
                    <a href="tel:+48 607 381 939">
                        <FontAwesomeIcon icon={faMobileAlt}/> Zadzwoń do mnie!
                    </a>
                    <a href='mailto:kontakt@gusano.pl'>
                        <FontAwesomeIcon icon={faEnvelope}/> Wyślij e-mail
                    </a>
                    </div>
                </div>
                <div className="follow-me">
                    <h3>zaobserwuj mnie</h3>
                    <div className="links">
                        <a href="https://www.behance.net/maciejjot55c0"
                           target="_blank">
                            <FontAwesomeIcon icon={faBehanceSquare}/>
                        </a>
                        <a href="https://www.facebook.com/Maciej.JotJanczak"
                           target="_blank">
                            <i className="fab fa-facebook-square"/>
                            <FontAwesomeIcon icon={faFacebookSquare}/>
                        </a>
                    </div>
                </div>
                <div className="creator">
                    <h3>wykonawca</h3>
                    <a href="https://redmotion.pl/">
                        <img alt=""
                             className="creator-logo"
                             src={redmotionLogo}/>
                    </a>
                </div>
            </section>
        </Router>
    );
}
export default Footer;
