import { Modal } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { paramContext } from '../Contexts/paramContext';
import { useContext } from 'react';

const GraphModal = ({show, handleClose}) => {

    const getValues = useContext(paramContext)

    const modelSet = getValues(null, 'modelSet')

   return ( 
        <Modal show={show} onHide={handleClose} size='lg'>
            <Modal.Body>
                <Carousel variant="dark" indicators={false} controls={false}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={'Activations/' + modelSet + '/graph.png'} alt="Image missing" />
                    </Carousel.Item>
                </Carousel>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-orange" onClick={handleClose}>Close</button>
            </Modal.Footer>
        </Modal>
     );
}
 
export default GraphModal;