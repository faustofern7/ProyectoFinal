import { Button, Container, Row } from "react-bootstrap";
import promocion from "../../assets/promocion.png";
import CardClases from "../clases/CardClases";
import CardPlanes from "../planes/CardPlanes";
import CardInstructor from "../clases/CardInstructor";
import { useEffect, useState } from "react";
import { listarClases } from "../helpers/queries";
import planes from "../planes/planes.js";
import { Link } from "react-router-dom";

const Inicio = () => {
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
      console.log("Error al obtener los productos");
    }
  };

  return (
    <div className="mainSection">
      <div className="banner text-center p-1">
        <h3 className="">Un paso a la vez, hacia tu mejor versión</h3>
        <Link
          to={"/suscribirse"}
          className=" btn p-1 rounded-2 bgVerde mt-2 text-white"
        >
          Comenzá ya
        </Link>
      </div>
      <Container className="py-2">
        <div className="text-center">
          <img src={promocion} alt="" className="promocion text" />
        </div>
        <div className="py-2">
          <h2 className="text-center pb-2 mt-4"> - Clases - </h2>
          <Row className="justify-content-center">
            {clases.map((cardClases) => (
              <CardClases key={cardClases._id} clase={cardClases}></CardClases>
            ))}
          </Row>
        </div>

        <h2 className="text-center pb-2 mt-4"> Nuestros planes </h2>
        <Row className="justify-content-center">
          {planes.map((cardPlanes) => (
            <CardPlanes key={cardPlanes._id} plan={cardPlanes}></CardPlanes>
          ))}
        </Row>

        <h2 className="text-center mt-4">-- Nuestros Instructores --</h2>
        <Row className="justify-content-center">
          {clases.map((instructores) => (
            <CardInstructor
              key={instructores._id}
              instructor={instructores}
            ></CardInstructor>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Inicio;
