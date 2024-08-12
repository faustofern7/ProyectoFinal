import { Button, Container } from "react-bootstrap";
import error404 from "../../assets/error404.svg";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Container className="text-center py-2">
      <img src={error404} alt="" className="imgError404 mx-auto d-block" />
      <Link to="/" className=" btn bgVerde border-0">
        Volver al inicio
      </Link>
    </Container>
  );
};

export default Error404;
