import './App.css';
import Navigation from "./components/nav";
import About from "./components/about";
import Graphics from "./components/graphics";
import Footer from "./components/footer";

function App() {
    return (
        <div className="App">
            {<Navigation/>}
            <main>
            {<About/>}
            {<Graphics/>}
            {<Footer/>}
            </main>
        </div>
    );
}

export default App;
