import Ejercicio1 from "./components/Ejercicio1";
import ParentComponent from "./components/ParentComponent";
import PokeList from "./components/PokeList";



function App() {
  return (
    <div className="App">
    <Ejercicio1 />
    <hr />
    <ParentComponent />
    <hr />
    <PokeList/>
    </div>
  );
}

export default App;
