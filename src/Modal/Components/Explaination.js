import { Modal } from "react-bootstrap";

const Explaination = ({layerType}) => {
    if (layerType === "conv") {
        return (
            <Modal.Body>Conv explaination body content
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>

            </Modal.Body>
        );    
    }
    else if (layerType === "pool") {
        return (
            <Modal.Body>
                Pool explaination body content
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
                <p>asd</p>
            </Modal.Body>
        );
    }
    else if (layerType === "flat") {
        return (
            <Modal.Body>Flatten explaination body content</Modal.Body>
        );
    }
    else if (layerType === "fully") {
        return (
            <Modal.Body>Fully explaination body content</Modal.Body>
        );
    }
}

export default Explaination;