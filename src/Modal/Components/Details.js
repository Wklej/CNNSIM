import { Modal } from "react-bootstrap";
import ConvParams from './ConvParams'
import FullyParams from "./FullyParams";
import PoolParams from "./PoolParams";

import { useState } from "react";
import {Button} from 'react-bootstrap';

const Details = ({layerType, id}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if (layerType === "conv") {
        return (
            <ConvParams id={id} layerType={layerType} />
        );    
    }
    else if (layerType === "pool") {
        return (
            <div>
            <PoolParams id={id} layerType={layerType} />

            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
    </div>
        );
    }
    else if (layerType === "flat") {
        return (
            <Modal.Body>Flatten details body content</Modal.Body>
        );
    }
    else if (layerType === "fully") {
        return(
            <FullyParams id={id} layerType={layerType} />
        )
    }
}
 
export default Details;
