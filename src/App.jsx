import { Routes, Route } from "react-router-dom";

// Páginas
import Home from "./Pages/Home";
// import Programas from "./Pages/Programas";
// import SobreNosotros from "./Pages/SobreNosotros";
import Contacto from "./Pages/Contacto";
import FAQs from "./Pages/FAQs";
import Cookies from "./Pages/Cookies";
import Privacidad from "./Pages/Privacidad";


// Componentes
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";
import { Cookie } from "lucide-react";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/programas" element={<Programas />} /> */}
        {/* <Route path="/sobre-nosotros" element={<SobreNosotros />} /> */}
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/Privacidad" element={<Privacidad />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
