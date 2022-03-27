import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import redmotionLogo from "../../images/redmotion logo.svg";
import redmotionLogoHistory from "../../images/redmotion history.svg";
import hairlessHorsemanLogo from "../../images/hairless horseman logo.svg";
import hairlessHorsemanLogoSketch1 from "../../images/hairless horseman sketch.svg";
import hairlessHorsemanLogoSketch2 from "../../images/hairless horseman sketch 2.svg";
import motorcyclesBarberShopLogo from "../../images/motorcycles-barbershop logo.svg"
import motorcyclesBarberShopLogoHistory from "../../images/motorcycles-barbershop logo history.svg"
import bambeeLogo from "../../images/bambee logo.svg"
import bambeeLogoHistory from "../../images/bambee logo history.svg"
import bambeeLogoAlternative from "../../images/bambee logo alternative.svg"
import ajmal from "../../images/ajmal.svg"
import tobolek from "../../images/tobolek.svg"
import heeresCoffe from "../../images/heeres coffe.svg"
import pb from "../../images/pb.svg"
import scaryShop from "../../images/scary shop.svg"
import './index.css';

const Graphics = () => {
    return (
        <Router>
            <div className="graphics">
                <section className="redmotion">
                    <img src={redmotionLogo}
                         className="redmotion-logo"
                         alt=""/>
                    <div className="redmotion-description">
                        <p>red motion to firma zajmująca się głównie fotografią samochodową, ale świadczy też ogólne
                            usługi
                            fotograficzne, usługi wideo oraz zajmuje się projektowaniem stron internetowych </p>
                        <p>zostałem poproszony o stworzenie logo na bazie dwóch elementów:
                            symbolu rejestracji wideo i płynnego ruchu</p>
                        <p>red motion is a company that mainly deals with car photography, but also provides general
                            photography services, video services and website design</p>
                        <p>I was asked to create a logo based on two elements:
                            video recording and smooth motion symbol</p>
                    </div>
                    <img src={redmotionLogoHistory}
                         className="redmotion-history"
                         alt=""/>
                </section>
                <section className="hairless-horseman">
                    <img src={hairlessHorsemanLogo}
                         className="hairless-horseman-logo"
                         alt=""/>
                    <div className="hairless-horseman-description">
                        <p>hairless horseman to hurtownia ryzjerska oferująca starannie wybrane produkty do pielęgnacji
                            włosów oraz brody</p>
                        <p>zostałem poproszony o stworzenie logo dla hurtowni fryzjerskiej
                            punktem wyjścia była sylwetka motocykla i odręczny font</p>
                        <p>w następnej kolejności powstało logo z tą samą nazwą, ale przeznaczone do opakowań
                            kosmetyków</p>
                        <p>hairless horseman is a hairdressing wholesaler offering carefully selected hair and beard
                            care products</p>
                        <p>I was asked to create a logo for a hairdressing wholesaler
                            the starting point was the silhouette of a motorcycle and a handwritten font</p>
                    </div>
                    <div className="hairless-horseman-history">
                        <img src={hairlessHorsemanLogoSketch1}
                             className="hairlessHorsemanLogoSketch"
                             alt=""/>
                        <img src={hairlessHorsemanLogoSketch2}
                             className="hairlessHorsemanLogoSketch"
                             alt=""/>
                    </div>
                </section>
                <section className="motorcycles-barbershop">
                    <img src={motorcyclesBarberShopLogo}
                         className="motorcycles-barbershop-logo"
                         alt=""/>
                    <div className="motorcycles-barbershop-description">
                        <p>motorcycles barbershop to miejsce stworzone z pasją do fryzjerstwa i motocykli. Tutaj
                            spotykają się najwięksi twardziele, którzy potrzebują chwili relaksu zanim ruszą w dalszą
                            drogę </p>
                        <p>zostałem poproszony o stworzenie logo na bazie kilku elementów:
                            znaku road66, motocylka, akcesoriów fryzjerskich
                            oraz indiwidualnego fontu</p>
                        <p>motorcycles barbershop is a place created with passion for hairdressing and motorcycles. The
                            toughest guys who need a moment of relaxation meet here before they move on</p>
                        <p>I was asked to create a logo based on several elements:
                            road66 mark, a motorcycle, hairdressing accessories and
                            an individual font</p>
                    </div>
                    <div className="motorcycles-barbershop-history">
                        <img src={motorcyclesBarberShopLogoHistory}
                             className="motorcyclesBarberShopLogoHistory"
                             alt=""/>
                    </div>
                </section>
                <section className="bambee">
                    <img src={bambeeLogo}
                         className="bambee-logo"
                         alt=""/>
                    <div className="bambee-description">
                        <p>bambee to firma zajmująca się szyciem na miarę</p>
                        <p>zostałem poproszony o stworzenie logo przedstawiające wesolą, bajkową pszczołę</p>
                        <p>bambee is a made-to-measure company</p>
                        <p>I was asked to create a logo depicting a happy, fairy-tale bee</p>
                    </div>
                    <div className="bambee-history">
                        <img src={bambeeLogoHistory}
                             className="bambeeLogoHistory"
                             alt=""/>
                        <img src={bambeeLogoAlternative}
                             className="bambeeLogoAlternative"
                             alt=""/>
                    </div>
                </section>
                <section className="other-works">
                    <img src={ajmal}
                         className="ajmal"
                         alt=""/>
                    <img src={tobolek}
                         className="tobolek"
                         alt=""/>
                    <img src={heeresCoffe}
                         className="heeresCoffe"
                         alt=""/>
                    <img src={pb}
                         className="pb"
                         alt=""/>
                    <img src={scaryShop}
                         className="scaryShop"
                         alt=""/>
                </section>
            </div>
        </Router>
    );
}

export default Graphics;
