import { useEffect, useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DetalleDelPlan = () => {
  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="PlanGym"
            />
          </Col>

          <Col md={6} >
            <Card.Body >
              <Card.Title className="primary-font text-center">Musculación</Card.Title>
              <div>
                <h2>Descripción del servicio:</h2>
                <p>
                  Este servicio ofrece acceso completo a instalaciones y
                  recursos para lograr tus objetivos de fitness, incluyendo:
                </p>
                <ul>
                  <li>
                    Acceso a todas las máquinas de gimnasio con equipos modernos
                    y bien mantenidos.
                  </li>
                  <li>
                    Pesas libres disponibles para todo tipo de entrenamientos en
                    espacios dedicados.
                  </li>
                  <li>
                    Programas personalizados basados en evaluaciones iniciales
                    para establecer metas específicas y ajustes periódicos para
                    asegurar progreso continuo.
                  </li>
                  <li>
                    Asesoramiento de entrenadores certificados, con sesiones de
                    orientación, supervisión de técnica y forma, motivación y
                    apoyo constante, y consejos nutricionales básicos.
                  </li>
                </ul>
              </div>
              
              <br />
              <br />
              <span className="primary-font fw-semibold">Precio: $28.0000,00</span>
              <br />
              <br />
              <Button variant="primary">Suscribite</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleDelPlan;