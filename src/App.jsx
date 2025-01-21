import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

// Importation des pages
import Home from "./pages/home/Home";
import BtsSio from "./pages/btsSio/BtsSio";
import Certif from "./pages/certif/Certif";
import E4 from "./pages/e4/E4";
import E5 from "./pages/e5/E5";
import VeilleInfo from "./pages/veilleInfo/VeilleInfo";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bts-sio" element={<BtsSio />} />
          <Route path="/certification" element={<Certif />} />
          <Route path="/e4" element={<E4 />} />
          <Route path="/e5" element={<E5 />} />
          <Route path="/veille-informatique" element={<VeilleInfo />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
