import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardPlanes = ({plan}) => {
  return (
    
    <Col md={5} lg={5} className="mb-3">
      <Card className="h-100 border-0 efectoCard">
        <div className="bgVerde py-2 border-2">
            <h4 className="text-center font-weight-bold text-white">Gym centre</h4>
            <h2 className="text-center font-weight-bold">{plan.nombre}</h2>
        </div>
        <div className="p-2">
            <p className="py-1 p-precio">Mensual  <span>$ {plan.mensual}</span></p>
            <hr  className="colorVerde"/>
            <p className="py-1 p-precio">Trimestre  <span>$ {plan.trimestral}</span></p>
            <hr  className="colorVerde"/>
            <p className="py-1 p-precio colorVerde fw-bold">Semestre Premiun  <span>$ {plan.semestral}</span></p>
            <hr  className="colorVerde"/>
            <div className="d-flex justify-content-center mt-3">
              <Link to={'/suscribirse'} className="btn w-auto bgVerde border-0 text-white">Obtener Plan</Link>
            </div>
        </div>
      </Card>
    </Col>
  );
};

export default CardPlanes;