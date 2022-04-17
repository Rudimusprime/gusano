import './App.css';
import Navigation from "./components/nav";
import About from "./components/about";
import Graphics from "./components/graphics";
import Footer from "./components/footer";
import gusanoLogo from "../src/images/about logo.svg"
import {
    ScrollingProvider,
    useScrollSection,
    Section,
} from 'react-scroll-section';
import React from "react";

function App() {
    return (
        <ScrollingProvider>
            <div className="App">
                {<Navigation/>}
                <main>
                    <section className="gusano-logo">
                        <img alt=""
                             className="about-logo"
                             src={gusanoLogo}/>
                    </section>
                    <Section id="about">
                        {<About/>}
                    </Section>
                    <Section id="graphics">
                        {<Graphics/>}
                    </Section>
                    <Section id="contact">
                        {<Footer/>}
                    </Section>
                </main>
            </div>
        </ScrollingProvider>
    );
}

export default App;
