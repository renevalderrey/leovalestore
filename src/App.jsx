import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import SiteJob from "./Pages/SiteJob";
import Inspo from "./Pages/Inspo";
import Promotions from "./Pages/Promotions";
import Information from "./Pages/Information";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/sitiodetrabajo" element={<SiteJob />} />
        <Route path="/inspo" element={<Inspo />} />
        <Route path="/promociones" element={<Promotions />} />
        <Route path="/informacion" element={<Information />} />
        <Route path="/ubicacionycontacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
