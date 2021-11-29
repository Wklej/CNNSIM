import { Modal } from "react-bootstrap";

const Explaination = ({layerType}) => {
    if (layerType === "conv") {
        return (
            <Modal.Body>Conv explaination body content</Modal.Body>
        );    
    }
    else if (layerType === "pool") {
        return (
            <Modal.Body>Pool explaination body content</Modal.Body>
        );
    }
}

export default Explaination;