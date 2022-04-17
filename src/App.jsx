import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Videojuego from "./components/Videojuego";

import asc from "./img/asc.jpg"
import cbrpk from "./img/cbrpk.jpg"
import wd from "./img/wd.jpg"

function App() {

  return (
    <div>
      <NavBar />
      <SideBar />
      <div className="principal-contenedor">

        <Videojuego
          imagen={asc}
          titulo="Assassins Creed"
          precio="150.000"
        
        />
        <Videojuego
          imagen={cbrpk}
          titulo="Cyber Punk 2077"
          precio="180.000"
        
        />
        <Videojuego
          imagen={wd}
          titulo="Watch Dogs 2"
          precio="110.000"
        
        />
        <h4>Cargar los componentes de videojuegos etc</h4> 
        <h4>Para validar formularios se puede usar yup</h4>
      </div>
    </div>
  );
}

export default App;
