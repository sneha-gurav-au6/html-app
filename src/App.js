import "./App.css";
import Navbar from "./components/Navbar";
import NavbarBar from "./components/NavbarBar";
import Boxes from "./components/Boxes";

function App() {
    return (
        <div className="App">
            <Navbar />
            <NavbarBar />
            <div className="boxes">
                {" "}
                <Boxes />
            </div>
        </div>
    );
}

export default App;
