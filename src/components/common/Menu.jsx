import { Container, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logoRecortado.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {

  const navegacion = useNavigate();

  const logout = () => {
    sessionStorage.removeItem('usuariofitfactory');
    setUsuarioLogueado({});
    navegacion("/");
  };

  const [clima, setClima] = useState('');

  useEffect(() => {consultarAPI();}, []);

  const consultarAPI = async () => {
    try {
      
      const respuesta = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Tucuman,ar&APPID=96e54c77ff9c0e3692eef44bac90ca30"
      );
      //almacenar la respuesta en el state
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setClima(datos);
      }
    } catch (error) {
      console.error(error);

    }
  };

  const kelvinACentigrados = (temperatura) => parseInt(temperatura - 273.15);

  const { name, main } = clima;
  const temp = main ? kelvinACentigrados(main.temp) : null;


  return (
    <Navbar expand="lg" className="bgVerde fs-5  ">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="Logo" className="imgLogo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto">
            <NavLink to="/" className="nav-link fontWeight">
              Inicio
            </NavLink>
            {
            usuarioLogueado.email ? (
              <>
                <NavLink
                
                  to="/administrador"
                  className="nav-link fontWeight "
                >
                  Administrador
                </NavLink>
                <NavLink
                  
                  to="/contacto"
                  className="nav-link fontWeight"
                >
                  Contacto
                </NavLink>
                <NavLink to="*" className="nav-link fontWeight">
                  Productos
                </NavLink>
                <NavLink to="/nosotros" className="nav-link fontWeight">
                  Nosotros
                </NavLink>
                <div className="d-flex justify-content-start">
                <Button
                  variant="link"
                  className="nav-link fontWeight"
                  onClick={logout}
                >
                  logout
                </Button>
                </div>
              </>
            ) : (
              <>
                <NavLink
                  
                  to="/contacto"
                  className="nav-link fontWeight"
                >
                  Contacto
                </NavLink>
                <NavLink to="*" className="nav-link fontWeight">
                  Productos
                </NavLink>
                <NavLink to="/nosotros" className="nav-link fontWeight">
                  Nosotros
                </NavLink>
                <NavLink to="/login" className="nav-link fontWeight">
                  Login
                </NavLink>
              </>
            )}
          </Nav>
          <div className="navbar">
            <p className="p-0 paddingCero">
              <i className="paddingCero"></i>
              {temp !== null ? `${temp}°C` : "Cargando..."}
            </p>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
