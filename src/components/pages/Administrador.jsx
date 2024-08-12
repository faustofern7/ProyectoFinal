import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/administrador.css";
import ItemClase from "../clases/ItemClase";
import { listarClases } from "../helpers/queries";

const Administrador = () => {
  const [clases, setClases] = useState([]);

  useEffect(() => {
    obtenerClases();
  }, []);

  const obtenerClases = async () => {
    const respuesta = await listarClases();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setClases(datos);
    } else {
      //Notificarle al usuario atraves de un mensaje
    }
  };

  return (
    <div className="bg-black">
      <section className="container mainSection ">
        <div className="d-flex justify-content-between align-items-center mt-5 py-3">
          <h1 className="display-5 text-white">Gestionar Clases</h1>
          <Link className="btn bgVerde" to={"/administrador/crear"}>
            <i className="bi bi-file-earmark-plus fs-4"></i>
          </Link>
        </div>
        <hr />
        <Table responsive bordered hover>
          <thead>
            <tr className="text-center">
              <th>Clase</th>
              <th>Profesor/a</th>
              <th>Fecha</th>
              <th>Horario</th>
              <th>URL de Imagen</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {clases.map((itemClase) => (
              <ItemClase
                key={itemClase._id}
                clase={itemClase}
                setClases={setClases}
              ></ItemClase>
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default Administrador;
