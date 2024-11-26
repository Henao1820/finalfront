import { useState, useEffect } from "react";
import "../../../css/formulariogastos.css";
import { registrarGasto } from "../../../services/serviciosGastos";

export function FormularioGastos() {
  const [montoGasto, setmontoGasto] = useState("");
  const [fechaGasto, setfechaGasto] = useState("");
  const [nombreGasto, setnombreGasto] = useState("");
  const [descripcionGasto, setdescripcionGasto] = useState("");

  const [FormularioGastoEnviado, setFormularioGastoEnviado] = useState(false);
  const [datosGastoFormulario, setDatosGastosFormulario] = useState("");

  useEffect(
    function () {
      if (FormularioGastoEnviado === true) {
        console.log("Me voy pal back");
        console.log(datosGastoFormulario);
        registrarGasto(datosGastoFormulario).then(function (respuestaBack) {
          console.log(respuestaBack);
        });
        setFormularioGastoEnviado(false);
      }
    },
    [FormularioGastoEnviado]
  );

  function procesarFormulario(evento) {
    evento.preventDefault();
    let datosGasto = {
      monto: montoGasto,
      fecha: fechaGasto,
      nombre: nombreGasto,
      descripcion: descripcionGasto,
    };
    setDatosGastosFormulario(datosGasto);
    setFormularioGastoEnviado(true);
  }

  return (
    <div className="custom-bg bg-dark">
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h3 >Registro del Gasto: </h3><br />
            <form className="p-5 border rounded shadow" onSubmit={procesarFormulario}>
              <div className="row">
                <div className="col-12">
                  <label className="form-label">Nombre Gasto: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={nombreGasto}
                    onChange={function (evento) {
                      setnombreGasto(evento.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 col-md-6">
                  <label className="form-label">Monto del Gasto: </label>
                  <input
                    type="number"
                    className="form-control"
                    value={montoGasto}
                    onChange={function (evento) {
                      setmontoGasto(evento.target.value);
                    }}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Descripcion del Gasto: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={descripcionGasto}
                    onChange={function (evento) {
                      setdescripcionGasto(evento.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 col-md-6">
                  <label className="form-label">Fecha del Gasto: </label>
                  <input
                    type="date"
                    className="form-control"
                    value={fechaGasto}
                    onChange={function (evento) {
                      setfechaGasto(evento.target.value);
                    }}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-outline-success my-3 w-100">
                Registrar Gasto
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
