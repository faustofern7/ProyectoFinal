import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../../styles/contacto.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (email) => {
    alerta();
  };

  const alerta = ()=>{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "En este momento no se puede contactar con nosotros!",
    });
  }

  return (
    <>
      <section className="bannerContact d-flex justify-content-center align-items-center bannerContacto">
        <div className=""></div>
        <div className="mt-3 mt-md-0 text-content">
          <p className="mb-0 fw-bold text-center">Mejora tú futuro</p>
          <h1 className="text-center">Contáctanos</h1>
        </div>
      </section>
      <section className="bg-body-secondary">
        <div className="mt-3 w-100 d-flex flex-column align-items-center my-4 gap-3 gap-md-2 text-center">
          <p>
            <i className="fa-solid fa-location-dot fs-2 me-2 "></i>
            Moreno 370 - San Miguel de Tucumán - Tucumán
          </p>
          <p title="WhatsApp">
            <i className="bi bi-whatsapp"> </i>
             381-543457
          </p>
        </div>
        <article>
          <div className="mb-4">
            <div className=" w-100 d-flex align-items-center justify-content-center container">
              <iframe
                className="rounded-3"
                width="600"
                height="450"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.780360576903!2d-65.20250599021722!3d-26.83737958996084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c067f08c0e9%3A0x28e4bee1d7b74a3c!2sMariano%20Moreno%20370%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e1!3m2!1ses!2sar!4v1723153238522!5m2!1ses!2sar"
                
              ></iframe>
            </div>
            
          </div>
        </article>
        <div className="d-flex justify-content-center my-5 gap-2">
          <Link
            to="*"
            title="facebook"
            className="border-0 tamanioIconos bg-body-secondary"
          >
            <i className="bi bi-facebook"></i>
          </Link>
          <Link
            to="*"
            title="instagram"
            className="border-0 tamanioIconos bg-body-secondary"
          >
            <i className="bi bi-instagram"></i>
          </Link>
          <Link
            to="*"
            title="twitter"
            className="border-0 tamanioIconos bg-body-secondary"
          >
            <i className="bi bi-twitter-x"></i>
          </Link>
        </div>
        <div className="d-flex justify-content-center">
          <Form
            className="text-center formContact mb-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="mt-3 mb-4">Contáctate con nosotros</h2>
            <Form.Group className="mb-3 text-start" controlId="fomBasicEmail">
              <Form.Label className="fw-bold">Correo electronico:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ej: fausto@mail.com"
                className="bg-white"
                {...register("email", {
                  required: "El correo es obligatorio",
                  minLength: {
                    value: 4,
                    message: "El email debe contener al menos 4 caracteres",
                  },
                  maxLength: {
                    value: 250,
                    message:
                      "El email debe contener como máximo 250 caracteres",
                  },
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:
                      "El correo debe ser un email valido Ej: nombre@mail.com",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="text-start" controlId="formBasicMessage">
              <Form.Label className="fw-bold">Mensaje:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="bg-white"
                {...register("message", {
                  required: "El mensaje es obligatorio",
                  minLength: {
                    value: 4,
                    message: "El mensaje debe contener al menos 4 caracteres",
                  },
                  maxLength: {
                    value: 450,
                    message:
                      "El mensaje debe contener como máximo 450 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.message?.message}
              </Form.Text>
            </Form.Group>
            <div className="text-end mt-3 d-flex justify-content-center">
              <Button type="submit" className=" btn px-5 bgVerde border-0">
                Enviar
              </Button>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Contacto;
