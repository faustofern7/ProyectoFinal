import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardClases = ({ clase }) => {
  return (
    <Col md={4} lg={4} className="mb-3">
      <Card className="h-100 border-0 efectoCard">
        <div>
          <img src={clase.imagenClase} alt="" className="card-img-top-nueva" />
        </div>
        <Card.Body>
          <Card.Title>{clase.nombreClase}</Card.Title>
          <Card.Text>
            Fecha: {clase.fecha}
            <br />
            Instructor: {clase.nombreProfesor}
            <br />
            <span className="fw-bold">Hora: {clase.horario}</span>
          </Card.Text>
        </Card.Body>
        <div className="text-center pb-2">
          <Link to="*" className="bgVerde border-0 w-auto btn">
            Solicitar Turno
          </Link>
        </div>
      </Card>
    </Col>
  );
};

export default CardClases;
