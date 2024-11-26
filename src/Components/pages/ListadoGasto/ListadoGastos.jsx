import { useState, useEffect } from "react";
import { buscarGastos } from "../../../services/serviciosGastos";
import "../../../css/listadogastos.css";
import imgexpense from "../../../assets/img/expense.png";

export function ListadoGastos() {
    const [datosAPI, setDatosApi] = useState(null);
    const [estadoCarga, setEstadoCarga] = useState(true);

    useEffect(function () {
        buscarGastos().then(function (respuestaBack) {
            console.log(respuestaBack);
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
                    <h3 id="lis" className="text-center mb-4">LISTADO DE GASTOS</h3> <br />
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {datosAPI.map(function (gasto, index) {
                            return (
                                <div className="col" key={index}>
                                    <div className="card h-100 shadow p-4 card-style  bg-transparent">
                                        <img
                                            src={imgexpense}
                                            alt="Logo o imagen descriptiva"
                                            className="card-img-top"
                                        />
                                        <div className="card-body">
                                            <h2 className="card-title">{gasto.nombre}</h2>
                                            <h4 className="card-description">
                                                Descripción: {gasto.descripcion}
                                            </h4>
                                            <h4 className="card-monto">Monto: {gasto.monto}</h4>
                                            <h4 className="card-fecha">Fecha: {gasto.fecha}</h4>
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
