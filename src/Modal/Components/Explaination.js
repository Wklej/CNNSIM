import { Modal } from "react-bootstrap";
import { useState } from "react";
import {Button} from 'react-bootstrap';
import ExplainModal from "../ExplainModal";

const Explaination = ({layerType}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
    else if (layerType === "loss") {
        return (
            <Modal.Body>Loss param explaination body content</Modal.Body>
        );
    }
    else if (layerType === "activation") {
        return (
            <Modal.Body>Activation param explaination body content</Modal.Body>
        );
    }
}

export default Explaination;