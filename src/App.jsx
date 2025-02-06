import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

// Importation des pages
import Home from "./pages/home/Home";
import BtsSio from "./pages/btsSio/BtsSio";
import E5 from "./pages/e5/E5";
import E6 from "./pages/e6/E6";
import Projets from "./pages/projets/Projets";
import Certif from "./pages/certif/Certif";
import VeilleInfo from "./pages/veilleInfo/VeilleInfo";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bts-sio" element={<BtsSio />} />
          <Route path="/e5" element={<E5 />} />
          <Route path="/e6" element={<E6 />} />
          <Route path="/veille-informatique" element={<VeilleInfo />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/certification" element={<Certif />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
