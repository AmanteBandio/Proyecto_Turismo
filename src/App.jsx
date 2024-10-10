import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InicioSesion from './pages/InicioSesion';
import Titulo from './pages/Index'; // Importa el componente Index
import ElMelado from './pages/Elmelado'; // Importa el componente ElMelado
import Pasopehuenche from './pages/Pasopehuenche';
import Colbunalto from './pages/Colbunalto';
import Colbun from './pages/Colbun';
import Laguardia from './pages/Laguardia';
import Losboldos from './pages/Losboldos';
import Panimavida from './pages/Panimavida';
import Rari from './pages/Rari';
import Quinamavida from './pages/Quinamavida';
import Rabones from './pages/Rabones';
import Losbellotos from './pages/Losbellotos';
import Balnearios from './pages/Balnearios';
import QueHacer from './pages/QueHacer';
import Cultura from './pages/Cultura';
import Cultura2 from './pages/Cultura2';
import Cultura3 from './pages/Cultura3';
import Cultura4 from './pages/Cultura4';
import Senderismo from './pages/Senderismo';
import Senderismo2 from './pages/Senderismo2';
import Senderismo3 from './pages/Senderismo3';
import Senderismo4 from './pages/Senderismo4';
import Parque from './pages/Parque';
import Termas from './pages/Termas';
import ZOIT from './pages/Zoit';
import Turismo from './pages/Turismo';
import OIT from './pages/OIT';
import Folleteria from './pages/Folleteria';
import SobreNosotros from './pages/SobreNosotros';
import Asociados from './pages/Asociados';
import Privacidad from './pages/Privacidad';
import Catastro from './pages/Catastro';
import Panoramas from './pages/Panoramas';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Titulo />} />
        <Route path="/login" element={<InicioSesion />} /> {/* Nueva ruta para InicioSesion */}
        <Route path="/Index" element={<Titulo />} />
        <Route path="/ElMelado" element={<ElMelado />} /> {/* Nueva ruta para ElMelado */}
        <Route path="/Paso-pehuenche" element={<Pasopehuenche/>} />
        <Route path="/Colbun-alto" element={<Colbunalto/>} />
        <Route path="/Colbun" element={<Colbun/>} />
        <Route path="/La-Guardia" element={<Laguardia/>} />
        <Route path="/Los-Boldos" element={<Losboldos/>} />
        <Route path="/Panimavida" element={<Panimavida/>} />
        <Route path="/Rari" element={<Rari/>} />
        <Route path="/Quinamavida" element={<Quinamavida/>} />
        <Route path="/Rabones" element={<Rabones/>} />
        <Route path="/Los-Bellotos" element={<Losbellotos/>} />
        <Route path="/Balneario-Machicura" element={<Balnearios/>} />
        <Route path="/QueHacer" element={<QueHacer/>} />
        <Route path="/Cultura" element={<Cultura/>} />
        <Route path="/Cultura2" element={<Cultura2/>} />
        <Route path="/Cultura3" element={<Cultura3/>} />
        <Route path="/Cultura4" element={<Cultura4/>} />
        <Route path="/Senderismo" element={<Senderismo/>} />
        <Route path="/Senderismo2" element={<Senderismo2/>} />
        <Route path="/Senderismo3" element={<Senderismo3/>} />
        <Route path="/Senderismo4" element={<Senderismo4/>} />
        <Route path="/Parque" element={<Parque/>} />
        <Route path="/Termas" element={<Termas/>} />
        <Route path="/Zoit" element={<ZOIT/>} />
        <Route path="/Turismo" element={<Turismo/>} />
        <Route path="/OIT" element={<OIT/>} />
        <Route path="/Folleteria" element={<Folleteria/>} />
        <Route path="/SobreNosotros" element={<SobreNosotros/>} />
        <Route path="/Asociados" element={<Asociados/>} />
        <Route path="/Privacidad" element={<Privacidad/>} />
        <Route path="/Catastro" element={<Catastro/>} />
        <Route path="/Panoramas" element={<Panoramas/>} />
      </Routes>
    </Router>
  );
};

export default App;
