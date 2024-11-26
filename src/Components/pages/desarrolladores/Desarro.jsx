import React from "react";
import "../../../css/desarro.css";
import santi from "../../../assets/img/tommy.png";
import kevin from "../../../assets/img/kev2.png";
import user from "../../../assets/img/cara.png";

export function SobreDesarrolladores() {
  const desarrolladores = [
    {
      nombre: "Santiago Henao Cuervo",
      rol: "Fullstack Developer",
      descripcion: "Experto en filosofía sobre las mujeres",
      foto: santi,
      github: "https://github.com/Henao1820",
    },
    {
      nombre: "Kevin Rodríguez Zapata",
      rol: "Fullstack Developer",
      descripcion: "Experto en negocios y mujeres",
      foto: kevin,
      github: "https://github.com/cinamonArk",
    },
    {
      nombre: "Juan David Zapata Usuga",
      rol: "Fullstack Developer",
      descripcion: "Disfrutando de la vida",
      foto: user,
      github: "https://github.com/JuanZapataUsuga",
    },
  ];

  return (
    <div className="desarrolladores-custom-bg bg-dark">
      <div className="container py-5">
        <h1 className="text-center mb-4">Conoce a los mejores desarrolladores</h1>
        <p className="text-center mb-5">Somos los mejores</p><br />
        <div className="row">
          {desarrolladores.map((dev, index) => (
            <div className="col-12 col-md-4 mb-4" key={index}>
              <div className="desarrolladores-card bg-transparent text-center border-0 shadow w-75 mx-auto">
                <img
                  src={dev.foto}
                  className="desarrolladores-card-img-top rounded-circle mx-auto mt-3"
                  alt={dev.nombre}
                  style={{ width: "190px", height: "220px" }}
                /> <br></br><br></br><br></br>
                <div className="card-body">
                  <h5 className="desarrolladores-card-title">{dev.nombre}</h5>
                  <p className="text-light">{dev.rol}</p>
                  <p className="card-text text-light">{dev.descripcion}</p>
                  <div>
                    <a
                      href={dev.github}
                      className="desarrolladores-btn-outline-dark btn btn-outline-dark btn-sm mx-1 text-light"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <br /> <br /><br />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-dark text-light text-center py-4">
                <p>&copy; 2024 Expense. Todos los derechos reservados.</p>
            </footer>
    </div>
    
  );
}
