import { Routes, Route } from "react-router-dom";
import FormularioClase from "../clases/FormularioClase";
import Administrador from "../pages/Administrador";

const ListasRutasAdmin = () => {
  return (
    <Routes>
      <Route path="/" element={<Administrador></Administrador>}></Route>
      <Route
        path="/crear"
        element={<FormularioClase creando={true}></FormularioClase>}
      ></Route>
      <Route
        path="/editar/:id"
        element={<FormularioClase creando={false}></FormularioClase>}
      ></Route>
    </Routes>
  );
};

export default ListasRutasAdmin;
