import './App.css';
import Navigation from "./components/nav";
import About from "./components/about";
import Graphics from "./components/graphics";
import Footer from "./components/footer";
import {
    ScrollingProvider,
    useScrollSection,
    Section,
} from 'react-scroll-section';

function App() {
    return (
        <ScrollingProvider>
            <div className="App">
                {<Navigation/>}
                <main>
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
