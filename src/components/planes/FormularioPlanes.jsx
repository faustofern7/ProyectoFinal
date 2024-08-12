import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const FormularioPlanes = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const navegacion = useNavigate();

  const claseValidada = (clase) => {
    navegacion("*");
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5 text-center">Gym Centre</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(claseValidada)}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Nicolás"
                {...register("nombre", {
                  required: "El nombre es obligatorio",
                  minLength: {
                    value: 4,
                    message:
                      "Debe ingresar como minimo 4 caracteres para el nombre",
                  },
                  maxLength: {
                    value: 40,
                    message:
                      "Debe ingresar como maximo 40 caracteres para el nombre",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombre?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formApellido">
              <Form.Label>apellido*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Prado"
                {...register("apellido", {
                  required: "El apellido es obligatorio",
                  minLength: {
                    value: 4,
                    message:
                      "Debe ingresar como minimo 4 caracteres para el apellido",
                  },
                  maxLength: {
                    value: 30,
                    message:
                      "Debe ingresar como maximo 30 caracteres para el apellido",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.apellido?.message}
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Planes*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "La categoria es obligatoria",
            })}
          >
            <option value="">Seleccione una Plan</option>
            <option value="SoloMusculacion">Solo musculacion</option>
            <option value="soloclases">solo clases</option>
            <option value="Full">Full</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electronico*</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ej: juan@mail.com"
            {...register("email", {
              required: "El correo es obligatorio",
              minLength: {
                value: 4,
                message: "El email debe contener al menos 4 caracteres",
              },
              maxLength: {
                value: 250,
                message: "El email debe contener como máximo 250 caracteres",
              },
              pattern: {
                value:
                  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                message:
                  "El correo debe ser un email valido Ej: nombre@mail.com",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>¿Como te gustaria entrenar?</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: me gustaria entrenar en un lugar calido con musica de fondo."
            as="textarea"
            {...register("pregunta", {
              minLength: {
                value: 5,
                message:
                  "Debe ingresar como minimo 5 caracteres para describir como te gusatria entrenar",
              },
              maxLength: {
                value: 100,
                message:
                  "Debe ingresar como maximo 100 caracteres para describir como te gustaria entrenar",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.pregunta?.message}
          </Form.Text>
        </Form.Group>

        <Button type="submit" className="btn  bgVerde border-0">
          Suscribirse
        </Button>
      </Form>
    </section>
  );
};

export default FormularioPlanes;
