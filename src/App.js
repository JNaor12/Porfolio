// App.js
import "./App.css";
import ParticlesComponent from "./Componentes/particles.js";
import ComponenteLogo from "./Componentes/ComponenteLogo.tsx"; // Verifica que la ruta sea correcta
import Inicio from "./Componentes/Paginas/Inicio.tsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Proyectos from "./Componentes/Paginas/Proyectos/Proyectos.tsx";
import Contacto from "./Componentes/Paginas/Contacto/Contacto.tsx";
import SobreMi from "./Componentes/Paginas/Sobremi/SobreMi.tsx";
import Calculadora from "./Componentes/Aps/Calculadora/Calculadora.tsx";
import BuscaMinas from "./Componentes/Games/BuscaMinas/BuscaMinas.tsx";
import Tecnologias from "./Componentes/Paginas/Tecnologias/Tecnologias.tsx";
import SnakeGame from "./Componentes/Games/Snake/Snake.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <header className="App-header">
                <ComponenteLogo />
                <ParticlesComponent id="particles" />
              </header>
            </div>
          }
        />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/buscaminas" element={<BuscaMinas />} />
        <Route path="/sobremi" element={<SobreMi />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/snake" className="Snake" element={<SnakeGame />} />
      </Routes>
    </Router>
  );
}

export default App;
