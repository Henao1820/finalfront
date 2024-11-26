import { Routes, Route } from "react-router-dom";
import { Menu } from "../Components/common/Menu/Menu";
import { Home } from "../Components/pages/Home/Home";
import { Usuarios } from "../Components/pages/Usuarios/Usuarios";
import { Gastos } from "../Components/pages/Gastos/Gastos";
import { ListadoUsuarios } from "../Components/pages/ListadoUsuarios/LIstadoUsuarios";
import { ListadoGastos } from "../Components/pages/ListadoGasto/ListadoGastos";
import { SobreNosotros } from "../Components/pages/sobrenosotros/SobreNosotros";
import { SobreDesarrolladores } from "../Components/pages/desarrolladores/Desarro";

export function Rutas() {
    return (
        <>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/usuarios" element={<Usuarios />} />
                <Route path="/listausuarios" element={<ListadoUsuarios />} />
                <Route path="/gastos" element={<Gastos />} />
                <Route path="/listagastos" element={<ListadoGastos />} />  
                <Route path="/sobrenosotros" element={<SobreNosotros />} />  
                <Route path="/desarrollo" element={<SobreDesarrolladores />} />
            </Routes>
        </>
    );
}
