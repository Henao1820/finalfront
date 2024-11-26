import "./Menu.css";
import { Link } from "react-router-dom";
import "../../../css/menu.css";
import logo from "../../../assets/img/cara.png"; 

export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg menu navbar-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span className="navbar-title">EXPENSE</span>
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/usuarios">
                  Usuarios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/listausuarios">
                  Lista Usuarios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gastos">
                  Gastos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/listagastos">
                  Lista Gastos
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/sobrenosotros">
                  Sobre nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/desarrollo">
                  Desarrolladores
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br /><br />
    </>
  );
}
