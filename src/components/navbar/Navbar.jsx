import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-link">
          Portfolio de Santiago Naranjo Grajales
        </Link>
      </div>
      <ul className="navbar-right">
        <li>
          <Link to="/bts-sio" className="navbar-link">
            BTS SIO
          </Link>
        </li>
        <li>
          <Link to="/e5" className="navbar-link">
            E5
          </Link>
        </li>
        <li>
          <Link to="/e6" className="navbar-link">
            E6
          </Link>
        </li>
        <li>
          <Link to="/veille-informatique" className="navbar-link">
            Veille Informatique
          </Link>
        </li>
        <li>
          <Link to="/projets" className="navbar-link">
            Projets
          </Link>
        </li>
        <li>
          <Link to="/certification" className="navbar-link">
            Certification
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
