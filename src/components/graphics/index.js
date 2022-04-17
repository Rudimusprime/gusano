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
import Gallery from 'react-grid-gallery';
import Gibson1 from "../../images/optimalized/1973_Gibson_Les_Paul_Custom_Iron_Cross_Hetfield_Maciej_Janczak.jpg"
import Gibson2 from "../../images/optimalized/1973_Gibson_Les_Paul_Custom_Iron_Cross_Maciej_Janczak.jpg"
import AntonieDeSaint
    from "../../images/optimalized/Antoine_de_Saint-Exupéry_Mały_Książę_Okładka_Cover_Maciej_Jańczak_2-kopia.jpg"
import ButelkaKwadratowa from "../../images/optimalized/Butelka-kwadratowa---Technologia-500ml.jpg"
import CylinderVanTroffaZajdae
    from "../../images/optimalized/Cylinder_Van_Troffa_Zajdae_Okładka_Cover_Maciej_Jańczak-kopia.jpg"
import Grecja from "../../images/optimalized/Grecja-Maciej-Jańczak-2.jpg"
import HeeresCoffeLogo from "../../images/optimalized/Heere_s-Coffee-logo-Maciej-Janczak_4.jpg"
import InfografikaCiesielka from "../../images/optimalized/Infografika-CIESIELKA.jpg"
import InfografikaCiesielkaTradycja from "../../images/optimalized/Infografika-Ciesielka---tradycja2.jpg"
import InfografikaFink from "../../images/optimalized/Infografika-FINK.jpg"
import KowalBezskrzydly from "../../images/optimalized/Kowal-bezskrzydły-Robak-Bug-Maciej-Jańczak.jpg"

const images = [{
    src: Gibson1,
    thumbnail: Gibson1,
    caption: "1973 Gibson Les Paul Custom Iron Cross Hetfield"
}, {
    src: Gibson2,
    thumbnail: Gibson2,
    caption: "1973 Gibson Les Paul Custom Iron Cross"
}, {
    src: AntonieDeSaint,
    thumbnail: AntonieDeSaint,
    caption: "Antoine de Saint Exupéry Mały Książę okładka cover"
}, {
    src: ButelkaKwadratowa,
    thumbnail: ButelkaKwadratowa,
    caption: "Butelka Kwadratowa"
}, {
    src: CylinderVanTroffaZajdae,
    thumbnail: CylinderVanTroffaZajdae,
    caption: "Cylinder Van Troffa Zajdae okładka cover"
}, {
    src: Grecja,
    thumbnail: Grecja,
    caption: "Grecja"
}, {
    src: HeeresCoffeLogo,
    thumbnail: HeeresCoffeLogo,
    caption: "Heere's Coffe logo"
}, {
    src: InfografikaCiesielka,
    thumbnail: InfografikaCiesielka,
    caption: "Infografika ciesielka"
}, {
    src: InfografikaCiesielkaTradycja,
    thumbnail: InfografikaCiesielkaTradycja,
    caption: "Infografika ciesielka tradycja"
}, {
    src: InfografikaFink,
    thumbnail: InfografikaFink,
    caption: "Infografika"
}, {
    src: KowalBezskrzydly,
    thumbnail: KowalBezskrzydly,
    caption: "Kowal bezskrzydły"
},
]

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
                <Gallery images={images}
                         enableImageSelection={false}
                         backdropClosesModal={true}
                         margin={5}
                         rowHeight={225}/>
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
