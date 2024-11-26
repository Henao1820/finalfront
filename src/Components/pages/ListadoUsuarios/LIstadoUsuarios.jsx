import { useState, useEffect } from "react";
import { buscarUsuarios } from "../../../services/serviciosUsuario.js";
import "../../../css/listadogastos.css"; 
import user from "../../../assets/img/user.png";

export function ListadoUsuarios() {
  // Simulando un conjunto de datos que viene del backend
  let usuarios = [
    {
      id: 5,
      nombre: "Juan Jose Gallego",
      telefono: "3225962363",
      ciudad: "Sabaneta",
    },
    {
      id: 85,
      nombre: "Laura Perez Muñoz",
      telefono: "3028905620",
      ciudad: "Sabaneta",
    },
    {
      id: 12,
      nombre: "Santiago Botero",
      telefono: "3108794547",
      ciudad: "Medellin",
    },
    {
      id: 122,
      nombre: "Karina Yamile",
      telefono: "3018794150",
      ciudad: "Medellin",
    },
    {
      id: 70,
      nombre: "Dila Francisco Zapata",
      telefono: "+573141414",
      ciudad: "La furia",
    },
  ];

  const [datosAPI, setDatosApi] = useState(null);
  const [estadoCarga, setEstadoCarga] = useState(true);

  useEffect(function () {
    buscarUsuarios().then(function (respuestaBack) {
      setDatosApi(respuestaBack);
      setEstadoCarga(false);
    });
  }, []);

  if (estadoCarga === true) {
    return <h3>Estamos cargando....</h3>;
  } else {
    return (
      <div className="custom-bg bg-dark text-light py-5">
        <div className="container">
          <h3 id="lis" className="text-center mb-4">LISTADO DE USUARIOS</h3>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {datosAPI.map(function (usuario) {
              return (
                <div className="col" key={usuario.id}>
                  <div className="card h-100 shadow p-4 card-style bg-transparent">
                    <img
                      src={user}
                      alt="Imagen de usuario"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{usuario.nombre}</h5>
                      <h4 className="card-description">Ciudad: {usuario.ciudad}</h4>
                      <h4 className="card-monto">Teléfono: {usuario.telefono}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
