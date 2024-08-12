import { useEffect, useState } from "react";
import { Container, Card, Row, Col, Button, Carousel } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import brian from "../../assets/brian.png";

const AcercaDeNosotros = () => {
  return (
    <section className="container">
      <h2 className="text-center mt-5">Sobre Nosotros</h2>
      <hr />
      <p>
        En Gym Centre, creemos que
        cada persona tiene el poder de transformar su vida a través del
        ejercicio y el bienestar. Nuestra misión es inspirar y empoderar a
        nuestra comunidad para que alcance sus metas físicas y mentales. Fundado
        en 2012, Gym Centre ha crecido para convertirnos en uno de los gimnasios
        líderes de la región. Nuestro enfoque en ofrecer instalaciones de última
        generación, programas de entrenamiento innovadores y un equipo de
        instructores excepcionales, nos ha permitido crear un espacio acogedor y
        motivador donde nuestros miembros pueden florecer. Más allá del simple
        ejercicio, en Gym Centre nos enfocamos en el desarrollo integral de cada
        persona. Nuestros programas abarcan desde el acondicionamiento físico
        hasta la nutrición y el bienestar mental, brindando a nuestros miembros
        las herramientas necesarias para alcanzar su mejor versión. Desde
        nuestras modernas instalaciones hasta nuestro cálido equipo de
        profesionales, en Gym Centre encontrarás todo lo que necesitas para
        emprender tu viaje hacia una vida más saludable y plena. ¡Únete a
        nosotros y descubre el poder transformador del ejercicio! <br />
      </p>
      <hr />
      <h2 className="text-center mt-5">Nuestro Local</h2>
      <hr />
      <section className="container">
        <article>
          <Row>
            <Col md={4} sm={12} className="mb-3">
              <Card>
                <img
                  src="https://images.pexels.com/photos/4047039/pexels-photo-4047039.jpeg"
                  alt="imagen de local 1"
                  className="w-100 rounded-4"
                />
              </Card>
            </Col>
            <Col md={4} sm={12} className="mb-3">
              <Card>
                <img
                  src="https://images.pexels.com/photos/6456202/pexels-photo-6456202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="imagen de local 2"
                  className="w-100 rounded-4"
                />
              </Card>
            </Col>
            <Col md={4} sm={12} className="mb-3">
              <Card>
                <img
                  src="https://images.pexels.com/photos/4944968/pexels-photo-4944968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="imagen de local 3"
                  className="w-100 rounded-4"
                />
              </Card>
            </Col>
          </Row>
        </article>
        <article className="mt-5">
  <h2 className="text-center mb-3">Nuestro Equipo</h2>
  <hr />
  <div className="row justify-content-center">
    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <div className="card-img-container">
          <img src={brian} className="card-img-top" alt="Fausto Fernandez" />
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">Fausto Fernandez</h5>
          <div className="d-flex justify-content-center">
            <a href="https://www.linkedin.com/in/fausto-fidel-fern%C3%A1ndez-91b4502b5/" className="iconos">
              <i className="bi bi-linkedin text-dark tamanioIconosNosotros px-2"></i>
            </a>
            <a href="https://github.com/faustofern7" className="iconos">
              <i className="bi bi-github text-dark tamanioIconosNosotros px-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</article>
      </section>
    </section>
  );
};

export default AcercaDeNosotros;
