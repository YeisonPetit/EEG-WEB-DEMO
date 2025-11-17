// import React from 'react'
// import Header from './Componets/Header.jsx'
// import Hero from './Componets/Hero.jsx'
// import LandingSections from './Componets/LandingSections.jsx'
// import Footer from './Componets/Footer.jsx'




// function App() {

//   return (
//     <>
//     <Header />
//     <Hero />
//     <LandingSections />
//     <Footer />
//     </>
//   )
// }

// export default App

import { Routes, Route } from "react-router-dom";

// Páginas
import Home from "./Pages/Home";
// import Programas from "./Pages/Programas";
// import SobreNosotros from "./Pages/SobreNosotros";
import Contacto from "./Pages/Contacto";

// Componentes
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/programas" element={<Programas />} /> */}
        {/* <Route path="/sobre-nosotros" element={<SobreNosotros />} /> */}
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
