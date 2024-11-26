import { useState, useEffect } from "react";
import { registrarUsuario } from "../../../services/serviciosUsuario.js";
import "../../../css/formulariousuario.css";

export function FormularioUsuario() {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [edadUsuario, setEdadUsuario] = useState("");
  const [telefonoUsuario, setTelefonoUsuario] = useState("");
  const [correoUsuario, setCorreoUsuario] = useState("");
  const [contraseñaUsuario, setContraseñaUsuario] = useState("");
  const [fechaUsuario, setFechaUsuario] = useState("");
  const [ciudadUsuario, setCiudadUsuario] = useState("");

  const [FormularioEnviado, setFormularioEnviado] = useState(false);
  const [datosFormulario, setDatosFormulario] = useState("");

  // useEffect para controlar el llamado al API
  useEffect(
    function () {
      if (FormularioEnviado === true) {
        console.log("Me voy pal back");
        console.log(datosFormulario);
        registrarUsuario(datosFormulario).then(function (respuestaBack) {
          console.log(respuestaBack);
        });
        setFormularioEnviado(false);
      }
    },
    [FormularioEnviado]
  );

  function procesarFormulario(evento) {
    evento.preventDefault();
    let datosUsuario = {
      nombre: nombreUsuario,
      edad: edadUsuario,
      telefono: telefonoUsuario,
      correo: correoUsuario,
      contrasena: contraseñaUsuario,
      fechaRegistro: fechaUsuario,
      ciudad: ciudadUsuario,
    };
    setDatosFormulario(datosUsuario);
    setFormularioEnviado(true);
  }

  return (
    <div className="custom-bg bg-dark">
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h3>Registro de usuario: </h3><br />
            <form className="p-5 border rounded shadow" onSubmit={procesarFormulario}>
              <div className="row">
                <div className="col-12">
                  <label className="form-label">Nombre: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={nombreUsuario}
                    onChange={(evento) => setNombreUsuario(evento.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 col-md-6">
                  <label className="form-label">Edad: </label>
                  <input
                    type="number"
                    className="form-control"
                    value={edadUsuario}
                    onChange={(evento) => setEdadUsuario(evento.target.value)}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Teléfono: </label>
                  <input
                    type="number"
                    className="form-control"
                    value={telefonoUsuario}
                    onChange={(evento) => setTelefonoUsuario(evento.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 col-md-6">
                  <label className="form-label">Correo: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={correoUsuario}
                    onChange={(evento) => setCorreoUsuario(evento.target.value)}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Contraseña: </label>
                  <input
                    type="password"
                    className="form-control"
                    value={contraseñaUsuario}
                    onChange={(evento) => setContraseñaUsuario(evento.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 col-md-6">
                  <label className="form-label">Fecha Registro: </label>
                  <input
                    type="date"
                    className="form-control"
                    value={fechaUsuario}
                    onChange={(evento) => setFechaUsuario(evento.target.value)}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Ciudad: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={ciudadUsuario}
                    onChange={(evento) => setCiudadUsuario(evento.target.value)}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-outline-success my-3 w-100">
                Registrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
