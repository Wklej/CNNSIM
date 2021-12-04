import { useState } from "react";
import { Modal } from "react-bootstrap";
import ConvParams from './ConvParams'
import PoolParams from "./PoolParams";

const Details = ({layerType}) => {

    if (layerType === "conv") {
        return (
            <ConvParams />
        );    
    }
    else if (layerType === "pool") {
        return (
            <PoolParams />
        );
    }
    else if (layerType === "flat") {
        return (
            <Modal.Body>Flatten details body content</Modal.Body>
        );
    }
}
 
export default Details;
