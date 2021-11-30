import { Modal } from "react-bootstrap";

const Details = ({layerType}) => {
    if (layerType === "conv") {
        return (
            <Modal.Body>Conv details body content</Modal.Body>
        );    
    }
    else if (layerType === "pool") {
        return (
            <Modal.Body>Pool details body content</Modal.Body>
        );
    }
    else if (layerType === "flat") {
        return (
            <Modal.Body>Flatten details body content</Modal.Body>
        );
    }
}
 
export default Details;
