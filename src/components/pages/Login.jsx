import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../helpers/queries";
import Swal from "sweetalert2";

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = async (usuario) => {
    const respuesta = await login(usuario);
    try {
      if (respuesta.status === 200) {
        //aqui el usuario ya esta logueado
        Swal.fire(
          "¡Bienvenido!",
          "Has iniciado sesión correctamente",
          "success"
        );
        const datos = await respuesta.json();
        //actualizar el sessionStorage
        sessionStorage.setItem(
          "usuariofitfactory",
          JSON.stringify({ email: datos.email, token: datos.token })
        );
        //actualizar el state
        setUsuarioLogueado(datos);
        navegacion("/administrador");
      } else {
        Swal.fire(
          "Ocurrió un error",
          "Correo o contraseña incorrectos",
          "error"
        );
      }
    } catch (error) {
      Swal.fire(
        "Ocurrió un error",
        "Error procesando la respuesta del servidor",
        "error"
      );
    }
  };

  return (
    <div className="d-flex mainSection">
      <section className="d-none d-sm-block">
        <img
          src="https://i.ibb.co/qRnwGqX/loginnn.png"
          alt="mesero sirviendo a clientes"
          title="mesero sirviendo a clientes"
          className="imgLogin h-100"
        />
      </section>
      <section className="sectionLogin bg-white">
        <div className="text-center">
          <h1 className="my-4">Inicia sesión</h1>
        </div>

        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="px-2 px-md-5 pb-2 formText"
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo electronico:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ej: fausto@mail.com"
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
            <Form.Text className="text-danger">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control
              type="password"
              placeholder="ingrese una contraseña"
              {...register("password", {
                required: "El password es obligatorio",
                minLength: {
                  value: 8,
                  message: "el minimo es de 8 caracteres",
                },
                maxLength: {
                  value: 15,
                  message: "el maximo es de 15 caracteres",
                },
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                  message:
                    "El password debe contener al menos una letra mayúscula, una letra minúscula y un número",
                },
              })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Text className="text-danger">
              {" "}
              {errors.password?.message}
            </Form.Text>
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button className="bgVerde border-0" type="submit">
              Enviar
            </Button>
          </div>
        </Form>
        <div className="d-flex justify-content-center">
          <Link to="*" className="btn btn-link text-dark">
            ¿Has olvidado tu contraseña?
          </Link>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="*" className="btn btn-danger mx-auto mb-3 mt-1 mt-lg-3">
            <i className="fa-brands fa-google"></i> Ingresar con Google
          </Link>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="*" className="btn btn-primary mx-auto mb-2 my-lg-3">
            <i className="fa-brands fa-facebook"></i> Ingresar con Facebook
          </Link>
        </div>
        <div className="d-flex justify-content-center flex-column">
          <Link to="*" className="text-center text-dark">
            ¿Aún no te creaste una cuenta?{" "}
          </Link>
          <Link to="*" className="btn btn-link text-dark">
            Crear cuenta
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Login;
