
import { Col } from 'react-bootstrap';

const CardInstructor = ({instructor}) => {
    return (
        <Col md={5} lg={4} className="pt-2">
            <div className="text-center">
                <img 
                    src={instructor.imagen}
                    alt={instructor.nombreProfesor}
                    className="rounded-circle imgInstructor"
                />
                <h4 className='pt-1'>{instructor.nombreProfesor}</h4>
            </div>
        </Col>
    );
};

export default CardInstructor;