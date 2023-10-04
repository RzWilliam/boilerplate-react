import "./App.scss";
import Logo from "./assets/pokemonlogo.png";
import DataFetch from "./components/DataFetch";
import Searchbar from "./components/Searchbar";
function App() {
    return (
        <div className="flex p-4 flex-col items-center gap-6 bg-cyan-200/70 max-w-md">
            <img src={Logo} alt="Logo Pokemon" className="w-1/2" />
            <Searchbar />
            <DataFetch />
        </div>
    );
}

export default App;
