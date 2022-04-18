import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './index.css';
import Gallery from 'react-grid-gallery';
import Gibson1 from "../../images/optimalized/1973_Gibson_Les_Paul_Custom_Iron_Cross_Hetfield_Maciej_Janczak.jpg"
import Gibson1thmb from "../../images/thumbnails/1973_Gibson_Les_Paul_Custom_Iron_Cross_Hetfield_Maciej_Janczak.jpg"
import Gibson2 from "../../images/optimalized/1973_Gibson_Les_Paul_Custom_Iron_Cross_Maciej_Janczak.jpg"
import Gibson2thmb from "../../images/thumbnails/1973_Gibson_Les_Paul_Custom_Iron_Cross_Maciej_Janczak.jpg"
import ButelkaKwadratowa from "../../images/optimalized/Butelka-kwadratowa---Technologia-500ml.jpg"
import ButelkaKwadratowaThmb from "../../images/thumbnails/Butelka-kwadratowa---Technologia-500ml.jpg"
import Grecja from "../../images/optimalized/Grecja-Maciej-Jańczak-2.jpg"
import GrecjaThmb from "../../images/thumbnails/Grecja-Maciej-Jańczak-2.jpg"
import HeeresCoffeLogo from "../../images/optimalized/Heere_s-Coffee-logo-Maciej-Janczak_4.jpg"
import HeeresCoffeLogoThmb from "../../images/thumbnails/Heere_s-Coffee-logo-Maciej-Janczak_4.jpg"
import InfografikaCiesielka from "../../images/optimalized/Infografika-CIESIELKA.jpg"
import InfografikaCiesielkaThmb from "../../images/thumbnails/Infografika-CIESIELKA.jpg"
import InfografikaCiesielkaTradycja from "../../images/optimalized/Infografika-Ciesielka---tradycja2.jpg"
import InfografikaCiesielkaTradycjaThmb from "../../images/thumbnails/Infografika-Ciesielka---tradycja2.jpg"
import InfografikaFink from "../../images/optimalized/Infografika-FINK.jpg"
import InfografikaFinkThmb from "../../images/thumbnails/Infografika-FINK.jpg"
import killipop from "../../images/optimalized/lizaczek-Maciej-Jańczak-killipop-lollipop-.jpg"
import killipopThumb from "../../images/thumbnails/lizaczek-Maciej-Jańczak-killipop-lollipop-.jpg"
import kawiarka from "../../images/optimalized/Maciej-Jańczak-czarna-kawa-kawiarka-frame.jpg"
import kawiarkaThumb from "../../images/thumbnails/Maciej-Jańczak-czarna-kawa-kawiarka-frame.jpg"
import locum from "../../images/optimalized/Maciej-Jańczak-Locum-karta.jpg"
import locumThumb from "../../images/thumbnails/Maciej-Jańczak-Locum-karta.jpg"
import motocyklCzerwony from "../../images/optimalized/Motocykl_Rozsypany_Strew_Red_Tshirt_Maciej_Jańczak.jpg"
import motocyklCzerwonyThumb from "../../images/thumbnails/Motocykl_Rozsypany_Strew_Red_Tshirt_Maciej_Jańczak.jpg"
import motoGuzziRozsypany
    from "../../images/optimalized/MotoGuzzi-NevadaClassic750e-Front-Rozsypany-25x35_Maciej_Jańczak.jpg"
import motoGuzziRozsypanyThumb
    from "../../images/thumbnails/MotoGuzzi-NevadaClassic750e-Front-Rozsypany-25x35_Maciej_Jańczak.jpg"
import motoGuzzi from "../../images/optimalized/MotoGuzziWizualizacja.jpg"
import motoGuzziThumb from "../../images/thumbnails/MotoGuzziWizualizacja.jpg"
import panTuNieStal from "../../images/optimalized/Pan-tu-nie-stał.jpg"
import panTuNieStalThumb from "../../images/thumbnails/Pan-tu-nie-stał.jpg"
import ulotka from "../../images/optimalized/Ulotka_Maciej_Jańczak_zębatki.jpg"
import ulotkaThumb from "../../images/thumbnails/Ulotka_Maciej_Jańczak_zębatki.jpg"
import VegeFarma5 from "../../images/optimalized/Vege-Farma-Butelka-zel-Maciej-Janczak_5.jpg"
import VegeFarma5Thumb from "../../images/thumbnails/Vege-Farma-Butelka-zel-Maciej-Janczak_5.jpg"
import VegeFarma6 from "../../images/optimalized/Vege-Farma-Butelka-zel-Maciej-Janczak_6.jpg"
import VegeFarma6Thumb from "../../images/thumbnails/Vege-Farma-Butelka-zel-Maciej-Janczak_6.jpg"
import VegeFarma7 from "../../images/optimalized/Vege-Farma-Butelka-zel-Maciej-Janczak_7.jpg"
import VegeFarma7Thumb from "../../images/thumbnails/Vege-Farma-Butelka-zel-Maciej-Janczak_7.jpg"
import WellBeing
    from "../../images/optimalized/Well-Being-Maciej-Janczak-Opakowanie-Mydlo-Soap-Packaging_Obszar-roboczy-6.jpg"
import WellBeingThumb
    from "../../images/thumbnails/Well-Being-Maciej-Janczak-Opakowanie-Mydlo-Soap-Packaging_Obszar-roboczy-6.jpg"
import YamahaXV1900 from "../../images/optimalized/Yamaha-XV-1900-Stratoliner-Front-Rozsypany-25x35_Maciej_Jańczak.jpg"
import YamahaXV1900Thumb
    from "../../images/thumbnails/Yamaha-XV-1900-Stratoliner-Front-Rozsypany-25x35_Maciej_Jańczak.jpg"
import YamahaWizualizacja from "../../images/optimalized/YamahaXV1900Wizualizacja.jpg"
import YamahaWizualizacjaThumb from "../../images/thumbnails/YamahaXV1900Wizualizacja.jpg"

const graphics = [{
    src: Gibson1,
    thumbnail: Gibson1thmb,
    caption: "1973 Gibson Les Paul Custom Iron Cross Hetfield"
}, {
    src: Gibson2,
    thumbnail: Gibson2,
    caption: "1973 Gibson Les Paul Custom Iron Cross"
}, {
    src: ButelkaKwadratowa,
    thumbnail: ButelkaKwadratowaThmb,
    caption: "Butelka Kwadratowa"
}, {
    src: Grecja,
    thumbnail: GrecjaThmb,
    caption: "Grecja"
}, {
    src: HeeresCoffeLogo,
    thumbnail: HeeresCoffeLogoThmb,
    caption: "Heere's Coffe logo"
}, {
    src: InfografikaCiesielka,
    thumbnail: InfografikaCiesielkaThmb,
    caption: "Infografika ciesielka"
}, {
    src: InfografikaCiesielkaTradycja,
    thumbnail: InfografikaCiesielkaTradycjaThmb,
    caption: "Infografika ciesielka tradycja"
}, {
    src: InfografikaFink,
    thumbnail: InfografikaFinkThmb,
    caption: "Infografika Fink"
}, {
    src: killipop,
    thumbnail: killipopThumb,
    caption: "Killipop"
}, {
    src: kawiarka,
    thumbnail: kawiarkaThumb,
    caption: "Kawiarka"
}, {
    src: locum,
    thumbnail: locumThumb,
    caption: "Locum"
}, {
    src: motocyklCzerwony,
    thumbnail: motocyklCzerwonyThumb,
    caption: "Czerwony motocykl"
}, {
    src: motoGuzziRozsypany,
    thumbnail: motoGuzziRozsypanyThumb,
    caption: "Rozsypany moto guzzi"
}, {
    src: motoGuzzi,
    thumbnail: motoGuzziThumb,
    caption: "Moto Guzzi"
}, {
    src: panTuNieStal,
    thumbnail: panTuNieStalThumb,
    caption: "Pan tu nie stał"
}, {
    src: ulotka,
    thumbnail: ulotkaThumb,
    caption: "Ulotka"
}, {
    src: VegeFarma5,
    thumbnail: VegeFarma5Thumb,
    caption: "Vege Farma 5"
}, {
    src: VegeFarma6,
    thumbnail: VegeFarma6Thumb,
    caption: "Vege Farma 6"
}, {
    src: VegeFarma7,
    thumbnail: VegeFarma7Thumb,
    caption: "Vege Farma 7"
}, {
    src: WellBeing,
    thumbnail: WellBeingThumb,
    caption: "Well Being"
}, {
    src: YamahaXV1900,
    thumbnail: YamahaXV1900Thumb,
    caption: "Yamaha XV 1900"
}, {
    src: YamahaWizualizacja,
    thumbnail: YamahaWizualizacjaThumb,
    caption: "Yamaha wizualizacja"
},
]

const Graphics = () => {
    return (
        <Router>
            <div className="sketch">
                <Gallery images={graphics}
                         enableImageSelection={false}
                         backdropClosesModal={true}
                         margin={10}
                         rowHeight={255}/>
            </div>
        </Router>
    );
}

export default Graphics;
