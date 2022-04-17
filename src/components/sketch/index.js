import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './index.css';
import Gallery from 'react-grid-gallery';
import First from "../../images/optimalized/1.jpg"
import FirstThumb from "../../images/thumbnails/1.jpg"
import Second from "../../images/optimalized/2.jpg"
import SecondThumb from "../../images/thumbnails/2.jpg"
import Third from "../../images/optimalized/3.jpg"
import ThirdThumb from "../../images/thumbnails/3.jpg"
import Fourth from "../../images/optimalized/4.jpg"
import FourthThumb from "../../images/thumbnails/4.jpg"
import Fifth from "../../images/optimalized/5.jpg"
import FifthThumb from "../../images/thumbnails/5.jpg"
import Sixth from "../../images/optimalized/6.jpg"
import SixthThumb from "../../images/thumbnails/6.jpg"
import Seventh from "../../images/optimalized/7.jpg"
import SeventhThumb from "../../images/thumbnails/7.jpg"
import Eighth from "../../images/optimalized/8.jpg"
import EighthThumb from "../../images/thumbnails/8.jpg"
import Nineth from "../../images/optimalized/9.jpg"
import NinethThumb from "../../images/thumbnails/9.jpg"
import Tenth from "../../images/optimalized/10.jpg"
import TenthThumb from "../../images/thumbnails/10.jpg"
import Eleventh from "../../images/optimalized/11.jpg"
import EleventhThumb from "../../images/thumbnails/11.jpg"

const sketch = [{
    src: First,
    thumbnail: FirstThumb,
    caption: "Cylinder Van Troffa Zajdae Okładka Cover",
}, {
    src: Second,
    thumbnail: SecondThumb,
    caption: "Kawowiec arabica",
}, {
    src: Third,
    thumbnail: ThirdThumb,
    caption: "TO - Stephen King Cover",
}, {
    src: Fourth,
    thumbnail: FourthThumb,
    caption: "Syrena i Ośmiornica",
}, {
    src: Fifth,
    thumbnail: FifthThumb,
    caption: "Mały Książę okładka Cover",
}, {
    src: Sixth,
    thumbnail: SixthThumb,
    caption: "TO - Stephen King",
}, {
    src: Seventh,
    thumbnail: SeventhThumb,
    caption: "Króliczek w kwiatach",
}, {
    src: Eighth,
    thumbnail: EighthThumb,
    caption: "Ptak w gnieździe",
}, {
    src: Nineth,
    thumbnail: NinethThumb,
    caption: "Mały Książę",
}, {
    src: Tenth,
    thumbnail: TenthThumb,
    caption: "Syrenka",
}, {
    src: Eleventh,
    thumbnail: EleventhThumb,
    caption: "Kowal bezskrzydły",
},
]
const Sketch = () => {
    return (
        <Router>
            <div className="sketch">
                <Gallery images={sketch}
                         enableImageSelection={false}
                         backdropClosesModal={true}
                         margin={10}
                         rowHeight={255}/>
            </div>
        </Router>
    )
}
export default Sketch;