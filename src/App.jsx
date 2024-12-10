import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

// Exemples de pages
const Home = () => <h1>Accueil</h1>;
const BtsSio = () => <h1>BTS SIO</h1>;
const VeilleInformatique = () => <h1>Veille Informatique</h1>;
const TableauDeSynthese = () => <h1>Tableau de Synthèse</h1>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bts-sio" element={<BtsSio />} />
        <Route path="/veille-informatique" element={<VeilleInformatique />} />
        <Route path="/tableau-de-synthese" element={<TableauDeSynthese />} />
      </Routes>
    </Router>
  );
};

export default App;
